import { useEffect, useState } from "react";
import { fetchAllClients } from "../Services/ClientsServices";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";
import { ContentBasedForPrefLocMachine } from "./content_based_pref_loc_machine";

export default function ContentBasedUserProfile() {
    const [clients, setClients] = useState(null);
    const [properties, setProperties] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const getAllClients = async() => {
            try {
                const data = await fetchAllClients();
                setClients(data);
            } catch (error) {
                console.error(error);
            }
        }

        const getAllProperties = async() => {
            try {
                const data = await fetchPublishedProperties();
                setProperties(data);
            } catch (error) {
                console.error(error);
            }    
        }
        getAllProperties();
        getAllClients();

        ContentBasedForPrefLocMachine(101838).then(prop => console.log(prop.properties));
    }, []);

    // useEffect(() => {
    //     console.log(recommendations);
    // }, [recommendations]);



    // Haversine formula for calculating distance between two coordinates (lat/long)
    const haversineDistance = (lat1, lon1, lat2, lon2) => {
        const toRadians = (deg) => deg * (Math.PI / 180);
        const R = 6371; // Radius of Earth in km
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon1 - lon2);
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    // Function to find matching properties based on distance to preferred locations
    const getMatchingPropertiesByDistance = (client, properties, maxDistanceKm) => {
        return properties.filter(property =>
            client.prefered_locations.some(location => {
                const distance = haversineDistance(
                location.province.lat, location.province.long,
                property.province.lat, property.province.long
                );
                return distance <= maxDistanceKm; // Filter properties within maxDistanceKm
            })
        );
    };

    const getMatchingPropertiesWithScores = (client, properties, maxDistanceKm) => {
        return properties.map(property => {
            // Calculate distances between the property and each preferred location
            const distances = client.prefered_locations.map(location => 
                haversineDistance(
                    location.province.lat, location.province.long,
                    property.province.lat, property.province.long
                )
            );
    
            // Get the closest distance
            const minDistance = Math.min(...distances);
    
            // Normalize score based on distance
            const score = minDistance <= maxDistanceKm 
                ? 1 - (minDistance / maxDistanceKm)  // Score is between 1 (close) and 0 (far)
                : 0; // Score is 0 if the distance is beyond the maxDistanceKm
    
            return {
                property,
                minDistance, // Return the closest distance
                score: score.toFixed(2)  // Score rounded to 2 decimal places
            };
        }).filter(item => item.score > 0);  // Filter out properties with a score of 0
    };
    
 

    useEffect(() => {
        if(clients && properties) {
            const clientRecommendatons = clients.map(client => {
                const matchingProperties = getMatchingPropertiesWithScores(client, properties, 70);
                return {client: client.id, prefered_locations: client.prefered_locations, properties: matchingProperties};
            });
            setRecommendations(clientRecommendatons);
        }
    }, [clients, properties]);



    // return(
    //     <>
    //         {clients?.length > 0 && clients.map(client => (
                    
    //             <div className="mar-bottom-1" key={client.id}>
    //                 {"{"}
    //                 <div className="text-m1">Client ID: {client.id}</div>
    //                 <div className="text-m1">Name: {client.firstname} {client.lastname}</div>
    //                 <div className="text-m1">Prefered Locations:</div>
    //                     {"["}
    //                         {client.prefered_locations.map(prefLoc => (
    //                             <div key={prefLoc.id}>
    //                                 {"{"}
    //                                 <div className="mar-start-1">
    //                                     <div className="text-m1">id: {prefLoc.id},</div>
    //                                     <div className="text-m1">province:</div>
    //                                     {"{"}
    //                                         <div className="text-m1 mar-start-l3">id: {prefLoc.province.id}</div>
    //                                         <div className="text-m1 mar-start-l3">province: {prefLoc.province.province}</div>
    //                                         <div className="text-m1 mar-start-l3">lat: {prefLoc.province.lat}</div>
    //                                         <div className="text-m1 mar-start-l3">long: {prefLoc.province.long}</div>
    //                                     {"}"}
    //                                 </div>
    //                                 {"},"}
    //                             </div>
    //                         ))}
    //                     {"]"}
    //                 {"},"}
    //             </div>
                    
    //         ))};
    //     </>
        
    // );
    
    return (
        <div>
            <h1>Content-Based Recommendations</h1>
            {recommendations.map((rec, index) => (
                <div key={index}>
                    <h3>{rec.client}'s</h3>
                    <div>Prefered Locations</div>
                    <div>Prefered Locations</div>
                    {rec.prefered_locations.map(prefLoc => (
                        <li key={prefLoc.id}>{prefLoc.province.province}</li>
                    ))}

                    <div>Properties ({rec.properties.length})</div>
                    <ul>
                        {rec.properties.map((property, index) => (
                            <div key={index}>
                                {"{"}
                                <div className="mar-start-1" key={property.id}>Property Id: {property.property.id}</div>
                                <div className="mar-start-1" key={property.id}>Property Province: {property.property.province.province}</div>
                                <div className="mar-start-1" key={property.id}>Distance {property.minDistance}</div>
                                <div className="mar-start-1" key={property.id}>Score: {property.score}</div>
                                {"},"}
                            </div>
                            
                        ))}
                    </ul>
                    <hr/>
                </div>
            ))}
        </div>
    );
}