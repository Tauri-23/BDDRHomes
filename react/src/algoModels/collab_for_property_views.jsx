import { useEffect, useState } from "react";
import { fetchAllClientsWithPropViews } from "../Services/ClientsServices";
import { Matrix } from 'ml-matrix';

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


    /* 
    | Debugging
    */
    useEffect(() => {
        const { interactionMatrix, uniqueClients, uniqueProperties } = createInteractionMatrix(clients);
        console.log(interactionMatrix);
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