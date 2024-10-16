import { useEffect, useState } from "react";
import { fetchAllClients } from "../Services/ClientsServices";
import { fetchPublishedProperties } from "../Services/GeneralPropertiesService";
import { ContentBasedForPrefLocMachine } from "./content_based_pref_loc_machine";
import { useStateContext } from "../contexts/ContextProvider";

export default function ContentBasedUserProfile() {
    const {user} = useStateContext();
    const [recommendations, setRecommendations] = useState([]);
    
    

    useEffect(() => {
        const getAll = async() => {
            const [rec] = await Promise.all([
                ContentBasedForPrefLocMachine(user.id)
            ])
            setRecommendations(rec);
        }
        
        getAll();
    }, []);



    useEffect(() => {
        console.log(recommendations);
    }, [recommendations]);



    
    // return (
    //     <div>
    //         <h1>Content-Based Recommendations</h1>
    //         {recommendations.map((rec, index) => (
    //             <div key={index}>
    //                 <h3>{rec.client}'s</h3>
    //                 <div>Prefered Locations</div>
    //                 <div>Prefered Locations</div>
    //                 {rec.prefered_locations.map(prefLoc => (
    //                     <li key={prefLoc.id}>{prefLoc.province.province}</li>
    //                 ))}

    //                 <div>Properties ({rec.properties.length})</div>
    //                 <ul>
    //                     {rec.properties.map((property, index) => (
    //                         <div key={index}>
    //                             {"{"}
    //                             <div className="mar-start-1" key={property.id}>Property Id: {property.property.id}</div>
    //                             <div className="mar-start-1" key={property.id}>Property Province: {property.property.province.province}</div>
    //                             <div className="mar-start-1" key={property.id}>Distance {property.minDistance}</div>
    //                             <div className="mar-start-1" key={property.id}>Score: {property.score}</div>
    //                             {"},"}
    //                         </div>
                            
    //                     ))}
    //                 </ul>
    //                 <hr/>
    //             </div>
    //         ))}
    //     </div>
    // );
}