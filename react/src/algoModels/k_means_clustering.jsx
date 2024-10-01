import { useEffect, useState } from "react";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";
import {kmeans} from 'ml-kmeans';
import { Scatter } from 'react-chartjs-2';
import ClusterVisualization from "../components/Algoritms/cluster_visualization";
import { fetchAllClients } from "../Services/ClientsServices";
import { fetchAllProvinces } from "../Services/ProvinceService";
import { formatToPhilPeso } from "../assets/js/utils";

export default function KMeansClustering() {
    const [clusters, setClusters] = useState(null);
    const [centroids, setCentroids] = useState(null);

    const [clusterSummaries, setClusterSummaries] = useState(null);

    const [properties, setProperties] = useState(null);
    const [clients, setClients] = useState(null);
    const [provinces, setProvinces] = useState(null);


    // Fetch all the data needed from database
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


    // Ready the data from for the clustering
    const prepDataForClustering = () => {

        // Prepare property data
        const propertyData = properties.map(prop => [
            prop.id,
            parseInt(prop.bedroom),
            parseInt(prop.bath),
            prop.lot_area,
            prop.floor_area,
            provinces.filter(prov => prov.province == prop.province_denormalized)[0].id,
            prop.tcp
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


    // For Summary of Clusters
    useEffect(() => {
        if(!clusters || !centroids) return;
        const _clusterSummaries = Array(centroids.length).fill(null).map(() => ({
            totalProperties: 0,
            totalBedrooms: 0,
            totalBathrooms: 0,
            totalLotArea: 0,
            totalFloorArea: 0,
            totalTCP: 0
        }))
    
        clusters.forEach((clusterIndex, i) => {
            const property = properties[i];  // Get the corresponding property
            _clusterSummaries[clusterIndex].totalProperties++;
            _clusterSummaries[clusterIndex].totalBedrooms += parseInt(property.bedroom);
            _clusterSummaries[clusterIndex].totalBathrooms += parseInt(property.bath);
            _clusterSummaries[clusterIndex].totalLotArea += property.lot_area;
            _clusterSummaries[clusterIndex].totalFloorArea += property.floor_area;
            _clusterSummaries[clusterIndex].totalTCP += property.tcp;
        });

        setClusterSummaries(_clusterSummaries);
    
        // Calculate averages for each cluster
        // clusterSummaries?.forEach((summary, index) => {
        //     console.log(`Cluster ${index + 1} Summary:`);
        //     console.log(`Total Properties: ${summary.totalProperties}`);
        //     console.log(`Average Bedrooms: ${(summary.totalBedrooms / summary.totalProperties).toFixed(2)}`);
        //     console.log(`Average Bathrooms: ${(summary.totalBathrooms / summary.totalProperties).toFixed(2)}`);
        //     console.log(`Average Lot Area: ${(summary.totalLotArea / summary.totalProperties).toFixed(2)}`);
        //     console.log(`Average Floor Area: ${(summary.totalFloorArea / summary.totalProperties).toFixed(2)}`);
        //     console.log(`Average TCP: ${(summary.totalTCP / summary.totalProperties).toFixed(2)}`);
        //     console.log();
        // });
    }, [clusters, centroids]);
    


    // Clustering Function
    const runClustering = () => {
        const dataForClustering = prepDataForClustering();
        const k = 3; // Number of clusters

        // console.log(dataForClustering);
        
        const result = kmeans(dataForClustering.properties, k);
        // console.log(result);
        setClusters(result.clusters);
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
    // useEffect(() => {
    //     console.log(centroids);
    // }, [centroids]);
    // useEffect(() => {
    //     console.log(clusterSummaries);
    // }, [clusterSummaries]);


    if(properties) {
        return (
            <div>
                <h1>K-means Clustering Example</h1>
                <button onClick={runClustering}>Run K-means Clustering</button>
                <div style={{width: "800px", height: "500px"}}>
                    {clusters && (
                        <ClusterVisualization properties={properties} clusters={clusters} centroids={centroids}/>
                    )}                    
                </div>

                {clusterSummaries && clusterSummaries.map((summary, index) => (
                    <div className="mar-bottom-1">
                        <div className="text-m1 mar-bottom-3">Cluster {index + 1} Summary:</div>
                        <div className="text-m3">Total Properties: {summary.totalProperties}</div>
                        <div className="text-m3">Average Bedrooms: {(summary.totalBedrooms / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average Bathrooms: {(summary.totalBathrooms / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average Lot Area: {(summary.totalLotArea / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average Floor Area: {(summary.totalFloorArea / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average TCP: {formatToPhilPeso((summary.totalTCP / summary.totalProperties).toFixed(2))}</div>
                    </div>
                ))}
            </div>
        );
    }
}