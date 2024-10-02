import { useEffect, useState } from "react";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";
import {kmeans} from 'ml-kmeans';
import { Scatter } from 'react-chartjs-2';
import ClusterVisualization from "../components/Algoritms/cluster_visualization";
import { fetchAllClients } from "../Services/ClientsServices";
import { fetchAllProvinces } from "../Services/ProvinceService";
import { formatToPhilPeso } from "../assets/js/utils";
import { KMeansClusteringMachine } from "./k_means_clustering_machine";

export default function KMeansClustering() {
    const [properties, setProperties] = useState(null);
    const [propsScatterPlot, setPropsScatterPlot] = useState([]);
    const [clusters, setClusters] = useState(null);
    const [centroids, setCentroids] = useState(null);

    useEffect(() => {
        KMeansClusteringMachine().then(propertiesToReturn => {
            // console.log('Clustered Properties:', propertiesToReturn);
            setProperties(propertiesToReturn.properties);
            setClusters(propertiesToReturn.clusters);
            setCentroids(propertiesToReturn.centroids);
            console.log(propertiesToReturn.properties);
            setPropsScatterPlot(prev => {
                const result = propertiesToReturn.properties.flatMap(prop =>
                    prop.properties // This assumes prop.properties is an array
                );
            
                return [...prev, ...result]; // Update state by combining previous properties with the new ones
            });
        });
    }, [])

    useEffect(() => {
        console.log(propsScatterPlot);
    }, [propsScatterPlot])
    
    if(properties) {
        return (
            <div>
                <h1>K-means Clustering Example</h1>
                <div style={{width: "800px", height: "500px"}}>
                    {clusters && propsScatterPlot.length > 0 && (
                        <ClusterVisualization properties={propsScatterPlot} clusters={clusters} centroids={centroids}/>
                    )}                    
                </div>
    
                {properties.map((property, index) => (
                    <div key={index} className="mar-bottom-1">
                        <div className="text-m1 mar-bottom-3">Cluster {index + 1}:</div>
                        {property.properties.map((property, index) => (
                            <li key={index}>
                                ID: {property.id}, 
                                Province: {property.province.province}, 
                                Bedrooms: {property.bedroom}, 
                                Bathrooms: {property.bath}, 
                                Lot Area: {property.lot_area}, 
                                Floor Area: {property.floor_area}, 
                                TCP: {formatToPhilPeso(property.tcp)}
                            </li>
                        ))}
    
                        {/* <div className="text-m3">Total Properties: {summary.totalProperties}</div>
                        <div className="text-m3">Average Bedrooms: {(summary.totalBedrooms / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average Bathrooms: {(summary.totalBathrooms / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average Lot Area: {(summary.totalLotArea / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average Floor Area: {(summary.totalFloorArea / summary.totalProperties).toFixed(2)}</div>
                        <div className="text-m3">Average TCP: {formatToPhilPeso((summary.totalTCP / summary.totalProperties).toFixed(2))}</div> */}
                    </div>
                ))}
            </div>
        );
    }
}