import { fetchAllClientPreferedLoc } from "../Services/ClientPreferedLocService";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";

export async function ContentBasedForPrefLocMachine(clientId) {
    const getAllClientPrefLoc = async() => {
        try {
            return await fetchAllClientPreferedLoc(clientId);
        } catch (error) {
            console.error(error);
            return[];
        }
    }

    const getAllProperties = async() => {
        try {
            return await fetchPublishedProperties();
        } catch (error) {
            console.error(error);
            return[];
        }
    }

    const [prefered_locations, properties] = await Promise.all([getAllClientPrefLoc(), getAllProperties()]);

    // Function To Match properties Location to Prefered Locations
    const getMatchingPropertiesWithScores = (preferedLocations, properties, maxDistanceKm) => {
        return properties.map(property => {
            // Calculate distances between the property and each preferred location
            const distances = preferedLocations.map(location => 
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

    // Main Logic
    if(prefered_locations?.length > 0 && properties?.length > 0) {
        const matchingProperties = getMatchingPropertiesWithScores(prefered_locations, properties, 70);

        // Now `matchingProperties` is an array of property matches with distances and scores
        return {properties: matchingProperties.map(prop => prop.property)}
    }
}
