import { useEffect, useState } from "react";
import { fetchAllClientsWithPropViews } from "../Services/ClientsServices";
import { Matrix } from 'ml-matrix';
import { SVD } from 'ml-matrix';

export default function CollabPropertyViews() {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        const getAllClients = async() => {
            try {
                const data = await fetchAllClientsWithPropViews();
                setClients(data);
            } catch (error) {
                console.error(error);
            }
        }
        getAllClients();
    }, []);


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

        return { interactionMatrix, uniqueClients, uniqueProperties};
    }

    // Perform matrix factorization using SVD
    const applySVD = (interactionMatrix) => {
        const svd = new SVD(interactionMatrix, { autoTranspose: true });

        const u = svd.leftSingularVectors;
        const s = svd.diagonal;
        const v = svd.rightSingularVectors;

        // `u`, `s`, and `v` are the matrices from SVD
        // console.log('U matrix:', u);
        // console.log('Singular values (S):', s);
        // console.log('V matrix:', v);

        // Reconstruct the original matrix or use it for recommendations
        const reconstructedMatrix = u.mmul(Matrix.diag(s)).mmul(v.transpose());

        const rmse = calculateRMSE(interactionMatrix, reconstructedMatrix);
        console.log('RMSE:', rmse);

        return reconstructedMatrix;
    }

    const recommendProperties = (clientIndex, reconstructedMatrix, uniqueProperties) => {
        const clientInteractions = reconstructedMatrix.getRow(clientIndex);

        const recommendations = clientInteractions.map((score, i) => ({
            property: uniqueProperties[i],
            score: score
        })).sort((a, b) => b.score - a.score);

        return recommendations;
    }

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


    /* 
    | Debugging
    */
    useEffect(() => {
        if(clients?.length > 0) {
            const { interactionMatrix, uniqueClients, uniqueProperties } = createInteractionMatrix(clients);
            const recommendationsMatrix = applySVD(interactionMatrix);
            const recommendations = recommendProperties(2, recommendationsMatrix, uniqueProperties);
            console.log('Recommendations for client:', uniqueClients[2], recommendations);
        }
    }, [clients]);

    return(
        <>
            <div className="text-l1 mar-bottom-1">Collaborative Filtering for Property views.</div>
            {clients && clients.map(client => (
                <div key={client.id} className="mar-bottom-1">
                    <div className="text-m1">client_id: {client.id}</div>
                    <div className="text-m1">name: {client.firstname} {client.lastname}</div>
                    <div className="mar-start-2">
                        <div className="text-m1">liked properties: </div>
                        {client.property_views.map(propView => (
                            <div key={propView.id} className="mar-bottom-3">
                                <div className="text-m1">property_id: {propView.property}</div>
                                <div className="text-m1">viewed_times: {propView.viewed_times}</div>
                            </div>
                        ))}
                    </div>                    
                </div>
            ))}
        </>
    );
}