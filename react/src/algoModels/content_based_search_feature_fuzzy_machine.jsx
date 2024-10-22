import Fuse from "fuse.js";
import { isEmptyOrSpaces } from "../assets/js/utils";


export async function ContentBasedSearchFeatureFuzzyMachine(properties, searchQuery) {
    /**
     * Clean Data
     */
    const prepareData = (props) => {
        return props.map(props => ({
            id: props.id,
            project_name: props.project.project_name,
            project_model: props.project_model,
            city: props.city.city,
            province: props.province.province,
            type: props.property_type.type_name
        }));
    }



    /**
     * Search function
     */
    const searchProperties = (cleanedData, query) => {
        // Options for fuzzy
        const options = {
            keys: ['project_name', 'project_model', 'city', 'province', 'type'],
            threshold: 0.3, // Lower value = stricter match, higher = looser
        }

        const fuse = new Fuse(cleanedData, options);
        const results = fuse.search(query);

        return results.map(results => results.item); // Return matching properties
    };



    /**
     * Main Logic
     */
    if(!isEmptyOrSpaces(searchQuery) && properties?.length > 0) {
        const cleanedData = prepareData(properties);
        const searchResults = searchProperties(cleanedData, searchQuery);
        return properties.filter(prop => searchResults.some(res => res.id == prop.id));
    }
    
    return []; // Return empty array if query is empty
}