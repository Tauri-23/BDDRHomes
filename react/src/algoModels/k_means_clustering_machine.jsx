import { useEffect, useState } from "react";
import {kmeans} from 'ml-kmeans';
import { Scatter } from 'react-chartjs-2';
import ClusterVisualization from "../components/Algoritms/cluster_visualization";
import { fetchAllClients } from "../Services/ClientsServices";
import { fetchAllProvinces } from "../Services/ProvinceService";
import { formatToPhilPeso } from "../assets/js/utils";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";

export async function KMeansClusteringMachine() {
    // Fetch data (properties, clients, provinces) asynchronously
    const getAllPropertiesFull = async () => {
        try {
            return await fetchPublishedProperties();
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const getAllClientsFull = async () => {
        try {
            return await fetchAllClients();
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const getAllProvince = async () => {
        try {
            return await fetchAllProvinces();
        } catch (error) {
            console.error(error);
            return [];
        }
    };



    // Fetch all necessary data
    const [properties, clients, provinces] = await Promise.all([
        getAllPropertiesFull(),
        getAllClientsFull(),
        getAllProvince()
    ]);



    // Prepare the data for clustering
    const prepDataForClustering = () => {
        // Prepare property data
        const propertyData = properties.map(prop => {
            // const propertyCoords = {
            //     lat: parseFloat(prop.province.lat), 
            //     long: parseFloat(prop.province.long)
            // };
    
            // Map through preferred locations and calculate distances
            // const clientPreferedCoords = preferedLoc.map(prefLoc => {
            //     const province = provinces.find(prov => prov.id === prefLoc);
            //     if (!province) {
            //         console.error("Province not found for preferred location:", prefLoc);
            //         return { lat: NaN, long: NaN };
            //     }
            //     return {
            //         lat: parseFloat(province.lat), 
            //         long: parseFloat(province.long)
            //     };
            // });
    
            // Calculate distances between property and each preferred location
            // const distances = clientPreferedCoords.map(coord => {
            //     return calculateDistance(propertyCoords.lat, propertyCoords.long, coord.lat, coord.long);
            // });
    
            // Choose minimum or average distance (change this based on your preference)
            // const validDistances = distances.filter(dist => !isNaN(dist)); // Filter out NaN distances
            // const minDistance = Math.min(...validDistances);
            // const averageDistance = validDistances.reduce((sum, dist) => sum + dist, 0) / validDistances.length || NaN;
    
            // Here, we choose minDistance, but you can choose averageDistance as well
            // const chosenDistance = minDistance;
    
            return [
                // parseInt(prop.bedroom),
                // parseInt(prop.bath),
                // prop.lot_area,
                prop.floor_area,
                prop.tcp,
            ];
        });
    
        // Prepare client data
        const clientData = clients.map(client => {
            const preferredLocationIds = client.prefered_locations.map(prefLoc => prefLoc.id || 0);
            const averagePreferredLocationId = preferredLocationIds.length
                ? preferredLocationIds.reduce((sum, locId) => sum + locId, 0) / preferredLocationIds.length
                : 0;
    
            return [client.id, averagePreferredLocationId, parseFloat(client.monthly_income)];
        });
    
        return {
            properties: propertyData,
            clients: clientData
        };
    };



    // Clustering function
    const runClustering = (dataForClustering) => {
        const k = 3; // Number of clusters

        const result = kmeans(dataForClustering.properties, k);

        // Calculate average TCP for each cluster
        const averageTCPs = Array(k).fill(0).map((_, index) => {
            const clusterProperties = properties.filter((_, clusterIndex) => result.clusters[clusterIndex] === index);
            const totalTCP = clusterProperties.reduce((sum, prop) => sum + prop.tcp, 0);
            return totalTCP / (clusterProperties.length || 1); // Avoid division by zero
        });

        // Assign labels based on average TCP
        const sortedClusters = averageTCPs.map((tcp, index) => ({ index, tcp })).sort((a, b) => a.tcp - b.tcp);
        const clusterLabels = sortedClusters.map((cluster, i) => (i === 0 ? 'Entry level' : i === 1 ? 'Medium' : 'High end'));

        // Create a mapping of clusters to labels
        const clusterMapping = {};
        sortedClusters.forEach(({ index }, i) => {
            clusterMapping[index] = clusterLabels[i];
        });

        return {
            clusters: result.clusters,
            centroids: result.centroids,
            clusterMapping
        };
    };



    // Summary of clusters
    const summarizeClusters = (clusters, clusterMapping) => {
        const centroids = new Array(3); // Assuming 3 centroids for k=3 clustering
        const clusterSummaries = Array(centroids.length).fill(null).map(() => ({
            totalProperties: 0,
            totalBedrooms: 0,
            totalBathrooms: 0,
            totalLotArea: 0,
            totalFloorArea: 0,
            totalTCP: 0
        }));

        clusters.forEach((clusterIndex, i) => {
            const property = properties[i];
            clusterSummaries[clusterIndex].totalProperties++;
            clusterSummaries[clusterIndex].totalBedrooms += parseInt(property.bedroom);
            clusterSummaries[clusterIndex].totalBathrooms += parseInt(property.bath);
            clusterSummaries[clusterIndex].totalLotArea += property.lot_area;
            clusterSummaries[clusterIndex].totalFloorArea += property.floor_area;
            clusterSummaries[clusterIndex].totalTCP += property.tcp;
        });

        return clusterSummaries.map((summary, index) => ({
            label: clusterMapping[index],
            properties: getPropertiesByCluster(clusters, index)
        }));
    };



    // Get properties by cluster
    const getPropertiesByCluster = (clusters, clusterIndex) => {
        return properties.filter((_, index) => clusters[index] === clusterIndex);
    };



    // Haversine formula calculate the distance of the provinces
    // const calculateDistance = (lat1, lon1, lat2, lon2) => {
    //     if (!lat1 || !lon1 || !lat2 || !lon2) {
    //         console.error("Invalid coordinates:", { lat1, lon1, lat2, lon2 });
    //         return NaN; // Return NaN if any coordinates are invalid
    //     }
    
    //     const R = 6371; // Radius of the Earth in km
    //     const dLat = (lat2 - lat1) * (Math.PI / 180);
    //     const dLon = (lon2 - lon1) * (Math.PI / 180);
    //     const a = Math.sin(dLat / 2) * Math.sin(dLon / 2) +
    //               Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    //               Math.sin(dLon / 2) * Math.sin(dLon / 2);
    //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     return R * c; // Distance in km
    // };
    




    // Main logic
    const dataForClustering = prepDataForClustering();
    const { clusters, centroids, clusterMapping } = runClustering(dataForClustering);
    const propertiesToReturn = summarizeClusters(clusters, clusterMapping);

    // Entry Level to High End
    return {properties: [
        propertiesToReturn.find(prop => prop.label === 'Entry level'),
        propertiesToReturn.find(prop => prop.label === 'Medium'),
        propertiesToReturn.find(prop => prop.label === 'High end'),
    ], clusters, centroids};
}
