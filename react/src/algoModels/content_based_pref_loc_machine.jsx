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
        const matchedProperties = [];
        const addedPropertyIds = new Set(); // Set to track unique property IDs
    

        // 1. First, get properties where the province matches the preferred location's province
        const matchedProvinceProperties = properties.filter(property =>
          preferedLocations.some(location => location.province.id === property.province.id)
        );
    

        // Add matched properties directly to the result (ensuring no duplicates)
        matchedProvinceProperties.forEach(property => {
          if (!addedPropertyIds.has(property.id)) {
            // matchedProperties.push(property);
            matchedProperties.push({
                property: property,
                minDistance: 0,
                score: 0,
            });
            addedPropertyIds.add(property.id); // Track added property by its ID
          }
        });
    

        // 2. Next, filter out properties that are not in the preferred province
        const unmatchedProvinceProperties = properties.filter(
          property => !preferedLocations.some(location => location.province.id === property.province.id)
        );
    
        
        // 3. Compare cities of properties in preferred provinces with cities in unmatched properties
        unmatchedProvinceProperties.forEach(unmatchedProperty => {
          matchedProvinceProperties.forEach(matchedProperty => {
            const distance = haversineDistance(
              matchedProperty.city.lat, matchedProperty.city.long,
              unmatchedProperty.city.lat, unmatchedProperty.city.long
            );
    
            // If the unmatched property is close enough to the matched property's city
            if (distance <= maxDistanceKm) {
              const score = 1 - (distance / maxDistanceKm); // Normalize score based on distance
    
              // Add the unmatched property if it's unique
              if (!addedPropertyIds.has(unmatchedProperty.id)) {
                matchedProperties.push({
                  property: unmatchedProperty,
                  minDistance: distance,
                  score: score.toFixed(2),
                });
                addedPropertyIds.add(unmatchedProperty.id); // Track added property
              }
            }
          });
        });
    
        return matchedProperties;
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
        const matchingProperties = getMatchingPropertiesWithScores(prefered_locations, properties, 50);
        
        // Now `matchingProperties` is an array of property matches with distances and scores
        return {properties: matchingProperties.map(prop => prop.property)}
    }
}
