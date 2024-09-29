import { useEffect, useState } from "react";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";
import {kmeans} from 'ml-kmeans';
import { Scatter } from 'react-chartjs-2';
import ClusterVisualization from "../components/Algoritms/cluster_visualization";
import { fetchAllClients } from "../Services/ClientsServices";
import { fetchAllProvinces } from "../Services/ProvinceService";

export default function KMeansClustering() {
    const [clusters, setClusters] = useState(null);
    const [centroids, setCentroids] = useState(null);

    const [properties, setProperties] = useState(null);
    const [clients, setClients] = useState(null);
    const [provinces, setProvinces] = useState(null);

    useEffect(() => { 
        const getAllPropertiesFull = async() => {
            try {
                const data = await fetchPublishedProperties();
                setProperties(data);
            } catch(error) {console.error(error)}
        }

        const getAllClientsFull = async() => {
            try {
                const data = await fetchAllClients();
                setClients(data);
            } catch(error) {console.error(error)}
        }

        const getAllProvince = async() => {
            try {
                const data = await fetchAllProvinces();
                setProvinces(data);
            } catch(error) {console.error(error)}
        }

        const getAll = async() => {
            getAllPropertiesFull();
            getAllClientsFull();
            getAllProvince();
        }

        getAll();
    }, []);



    const prepDataForClustering = () => {

        // Prepare property data
        const propertyData = properties.map(prop => [
            prop.id,
            parseInt(prop.bedroom),
            parseInt(prop.bath),
            prop.lot_area,
            prop.floor_area,
            provinces.filter(prov => prov.province == prop.province_denormalized)[0].id,
        ]);

        // Prepare Client
        const clientData = clients.map(client => {

            const preferredLocationIds = client.prefered_locations.map(prefLoc => 
                prefLoc.id || 0 // Map to province ID
            );
    
            // Create a numerical representation (average or max) for preferred locations
            const averagePreferredLocationId = preferredLocationIds.length > 0 
                ? preferredLocationIds.reduce((sum, locId) => sum + locId, 0) / preferredLocationIds.length
                : 0;
    
            return [
                client.id,
                averagePreferredLocationId,  // Average location ID
                parseFloat(client.monthly_income)  // Ensure numeric type
            ];
        });
        
        return {
            properties: propertyData,
            clients: clientData
        }
    } 



    const runClustering = () => {
        const dataForClustering = prepDataForClustering();
        const k = 4; // Number of clusters

        console.log(dataForClustering);
        
        const result = kmeans(dataForClustering.properties, k);
        console.log(result);
        setClusters(result.clusters); // save the clusters result
        setCentroids(result.centroids);
    }


    /*
    | Debugging 
    */
    // useEffect(() => {
    //     console.log(properties);
    // }, [properties]);
    // useEffect(() => {
    //     console.log(clients);
    // }, [clients]);
    // useEffect(() => {
    //     console.log(provinces);
    // }, [provinces]);


    if(properties) {
        return (
            <div>
                <h1>K-means Clustering Example</h1>
                <button onClick={runClustering}>Run K-means Clustering</button>
                <div style={{width: "800px", height: "600px"}}>
                    {clusters && (
                        <ClusterVisualization properties={properties} clusters={clusters} centroids={centroids}/>
                    )}
                    
                </div>
            </div>
        );
    }
}