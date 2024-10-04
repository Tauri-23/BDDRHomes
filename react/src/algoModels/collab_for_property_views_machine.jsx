import { fetchAllClientsWithPropViews } from "../Services/ClientsServices";
import { Matrix, inverse } from 'ml-matrix';

export async function CollabForPropViewMachine(userId) {
    const getAllClients = async() => {
        try {
            return await fetchAllClientsWithPropViews();
        } catch (error) {
            console.error(error);
            return [];
        }
    }


    const [clients] = await Promise.all([getAllClients()]);


    // Function to create matrix from client data
    const createInteractionMatrix = (clients) => {
        // unique properties in the property views
        const uniqueProperties = Array.from(new Set(clients.flatMap(client =>
            client.property_views.map(pv => pv.property)
        )));

        const uniqueClients = clients.map(client => client.id);

        // create a zero-filled matrix
        const interactionMatrix = new Matrix(uniqueClients.length, uniqueProperties.length, 0);

        // Fill the matrix with viewed_times
        clients.forEach((client, i) => {
            client.property_views.forEach(property => {
                const propertyIndex = uniqueProperties.indexOf(property.property);
                interactionMatrix.set(i, propertyIndex, property.viewed_times);
            });
        });

        // Create a map of userId -> userIndex
        const userIdToIndexMap = new Map(uniqueClients.map((userId, index) => [userId, index]));

        return { interactionMatrix, uniqueClients, uniqueProperties, userIdToIndexMap };
    }


    // Alternating Least Squares
    const ALS = (R, numUsers, numItems, maxIterations, regularization, numLatentFeatures) => {
        // Initialize random latent matrices U (users) and V (items)
        let U = Matrix.rand(numUsers, numLatentFeatures);
        let V = Matrix.rand(numItems, numLatentFeatures);

        // ALS loop
        for (let iteration = 0; iteration < maxIterations; iteration++) {
            // console.log(`Starting iteration ${iteration + 1}`);

            // Update U (users)
            for (let u = 0; u < numUsers; u++) {
                const Vu = V.transpose().mmul(V).add(Matrix.eye(numLatentFeatures).mul(regularization));
                const Ru = R.getRow(u);
                const RuMatrix = new Matrix([Ru]).transpose(); // Ensure Ru is a column vector
                const VuR = V.transpose().mmul(RuMatrix);
                const VuInverse = inverse(Vu); // Use matrix inversion

                const result = VuInverse.mmul(VuR); // Compute result
                U.setRow(u, result.to1DArray()); // Update U for user u
            }

            // Update V (items)
            for (let i = 0; i < numItems; i++) {
                const Ui = U.transpose().mmul(U).add(Matrix.eye(numLatentFeatures).mul(regularization));
                const Ri = R.getColumn(i); // Get item column vector
                const MatrixRi = new Matrix([Ri]).transpose(); // Ensure it's a column vector
                const UiR = U.transpose().mmul(MatrixRi);
                const UiInverse = inverse(Ui); // Inverse Ui

                const result = UiInverse.mmul(UiR); // Compute result
                V.setRow(i, result.to1DArray()); // Update V for item i
            }

            // console.log(`Iteration ${iteration + 1} completed.`);
        }

        return { U, V }; // Return the latent matrices
    };


    // Get top 3 recommendations for each user based on userId
    const getTopNRecommendations = (predictedRatings, userId, N, uniqueProperties, userIdToIndexMap) => {
        const userIndex = userIdToIndexMap.get(userId); // Find the user index from the map
        if (userIndex === undefined) {
            console.error(`User with ID ${userId} not found.`);
            return [];
        }

        const userRatings = predictedRatings.getRow(userIndex); // Get predicted ratings for the user
        const itemRatings = userRatings.map((rating, index) => ({ index, rating })); // Map item indices with ratings
        
        // Sort by rating in descending order
        const sortedItemRatings = itemRatings.sort((a, b) => b.rating - a.rating);
        return sortedItemRatings.slice(0, N).map(item => ({
            property: uniqueProperties[item.index],  // Return property IDs
            rating: item.rating
        }));
    };



    const generatePredictions = (U, V) => {
        // Multiply U and V transpose to get the predicted ratings matrix
        return U.mmul(V.transpose());
    };



    const calculateRMSE = (originalMatrix, predictedMatrix) => {
        let totalError = 0;
        let count = 0;
    
        for (let i = 0; i < originalMatrix.rows; i++) {
            for (let j = 0; j < originalMatrix.columns; j++) {
                if (originalMatrix.get(i, j) !== 0) {  // Only compare non-zero entries (observed interactions)
                    const error = originalMatrix.get(i, j) - predictedMatrix.get(i, j);
                    totalError += error * error;
                    count++;
                }
            }
        }
    
        const meanError = totalError / count;
        return Math.sqrt(meanError); // RMSE
    };



    const calculateMSE = (R_actual, R_predicted) => {
        let sumSquaredError = 0;
        let count = 0;
    
        for (let i = 0; i < R_actual.rows; i++) {
            for (let j = 0; j < R_actual.columns; j++) {
                const actual = R_actual.get(i, j);
                const predicted = R_predicted.get(i, j);
                if (actual > 0) { // Only consider non-zero entries (where we have actual ratings)
                    sumSquaredError += Math.pow(actual - predicted, 2);
                    count++;
                }
            }
        }
    
        return sumSquaredError / count; // Mean Squared Error
    };




    // Main Logic
    if(clients?.length > 0) {
        const maxIterations = 20;
        const regularization = 0.1;
        const numLatentFeatures = 10; // Number of latent features

        const { interactionMatrix, uniqueClients, uniqueProperties, userIdToIndexMap } = createInteractionMatrix(clients);

        // ALS
        const { U, V } = ALS(interactionMatrix, uniqueClients.length, uniqueProperties.length, maxIterations, regularization, numLatentFeatures);

        // Generate predictions
        const R_pred = generatePredictions(U, V);

        // Get top 3 recommendations for a user by userId (e.g., userId = 101838)
        const topRecommendations = getTopNRecommendations(R_pred, userId, 5, uniqueProperties, userIdToIndexMap);

        // After generating the predictions
        const mse = calculateMSE(interactionMatrix, R_pred);

        const rmse = calculateRMSE(interactionMatrix, R_pred);

        return {topRecommendations, mse, rmse}

    }
}
