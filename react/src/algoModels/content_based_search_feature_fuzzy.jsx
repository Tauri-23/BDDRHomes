import { useEffect, useState } from "react";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";
import Fuse from "fuse.js";


export default function ContentBasedSearchFeatureFuzzy() {
    const [properties, setProperties] = useState([]);



    /**
     * Get All Necessary Data
     */
    useEffect(() => {
        const getAll = async() => {
            const [propsDb] = await Promise.all([
                fetchPublishedProperties()
            ]);

            setProperties(
                propsDb.map(props => ({
                    id: props.id,
                    project_name: props.project.project_name,
                    project_model: props.project_model,
                    city: props.city.city,
                    province: props.province.province,
                    type: props.property_type.type_name
                }))
            );
        };

        getAll();
    }, []);



    /**
     * Search function
     */
    const searchProperties = (query) => {
        // Options for fuzzy
        const options = {
            keys: ['project_name', 'project_model', 'city', 'province', 'type'],
            threshold: 0.3, // Lower value = stricter match, higher = looser
        }

        const fuse = new Fuse(properties, options);
        const results = fuse.search(query);

        return results.map(results => results.item); // Return matching properties
    };



    /**
     * Debugging
     */
    useEffect(() => {
        const searchResults = searchProperties("single");
        console.log(searchResults);
    }, [properties]);



    /**
     * Render
     */
    // return(
    //     <>
    //         {properties?.map(prop => (
    //             <div key={prop.id} className="mar-start-3 mar-bottom-l1">
    //                 <div className="text-m2">id: {prop.id},</div>
    //                 <div className="text-m2">project: {'{'} <br/> <div className="mar-start-3">id: {prop.project.id}, <br/> project_name: {prop.project.project_name}</div> {'}'},</div>
    //                 <div className="text-m2">project_model: {prop.project_model},</div>
    //                 <div className="text-m2">
    //                     city: {'{'} <br/> 
    //                         <div className="mar-start-3">id: {prop.city.id}, <br/> city: {prop.city.city}, <br/> lat: {prop.city.lat}, <br/> long: {prop.city.long}</div> 
    //                     {'}'},
    //                 </div>
    //                 <div className="text-m2">
    //                     province: {'{'} <br/> 
    //                         <div className="mar-start-3">id: {prop.province.id}, <br/> province: {prop.province.province}, <br/> lat: {prop.province.lat}, <br/> long: {prop.province.long}</div> 
    //                     {'}'},
    //                 </div>
    //                 <div className="text-m2">bath: {prop.bath},</div>
    //                 <div className="text-m2">bedroom: {prop.bedroom},</div>
    //                 <div className="text-m2">carport: {prop.carport},</div>
    //                 <div className="text-m2">floor_area: {prop.floor_area},</div>
    //                 <div className="text-m2">lot_area: {prop.lot_area},</div>
    //                 <div className="text-m2">tcp: {prop.tcp},</div>
    //                 <div className="text-m2">
    //                     property_type: {'{'} <br/> 
    //                         <div className="mar-start-3">id: {prop.property_type.id}, <br/> type_name: {prop.property_type.type_name}</div> 
    //                     {'}'},
    //                 </div>
    //             </div>
    //         ))}
    //     </>
    // )
}