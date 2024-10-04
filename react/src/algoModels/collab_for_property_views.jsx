import { useEffect, useState } from "react";
import { fetchAllClientsWithPropViews } from "../Services/ClientsServices";
import { Matrix, SVD, inverse } from 'ml-matrix';
import { CollabForPropViewMachine } from "./collab_for_property_views_machine";

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

    /* 
    | Debugging
    */
    useEffect(() => {
        CollabForPropViewMachine(824907).then(data => {
            console.log(data.topRecommendations);
            console.log("RMSE: ", data.rmse);
            console.log("MSE:", data.mse);
        })
    }, []);

    return(
        <>
            <div className="text-l1 mar-bottom-1">Collaborative Filtering for Property views.</div>
            {clients && clients.map(client => (
                <div key={client.id} className="mar-bottom-1">
                    <div className="text-m1">client_id: {client.id}</div>
                    <div className="text-m1">name: {client.firstname} {client.lastname}</div>
                    <div className="mar-start-2">
                        <div className="text-m1">viewed properties: </div>
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