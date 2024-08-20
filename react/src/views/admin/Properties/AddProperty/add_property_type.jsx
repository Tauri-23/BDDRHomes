import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchPropertyTypes } from "../../../../Services/GeneralPropertiesService";

export default function AdminAddPropertyType() {
    const {selectedTypes, setSelectedTypes} = useOutletContext();
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPropertyTypes = async() => {
            try {
                const data = await fetchPropertyTypes();
                setPropertyTypes(data);
                setLoading(false);
            }catch(error) {
                console.error('Failed to fetch property types:', error);
            }
        }

        getPropertyTypes();
    }, []);

    

    if(!loading) {
        return(
            <div className="d-flex justify-content-center transition-fade-in">
                    <div className='d-flex flex-direction-y gapl1'>
        
                        <div className="text-l1 fw-bold create-listing-cont">Tell us what type of property you are offering.</div>
                            
                        <div className="create-listing-option-box-cont">
        
                            {propertyTypes.map((type) => (
                                <div 
                                    key={type.id} 
                                    onClick={() => setSelectedTypes(type)}
                                    className={`create-listing-option-box1 ${selectedTypes && selectedTypes.id === type.id ? 'active' : ''}`}                                
                                >
                                    <img src={`/src/assets/media/icons/${type.icon}`} className="create-listing-option-box1-icon" alt={type.type_name} />
                                    <div className="text-m1">{type.type_name}</div>
                                </div>
                            ))}
        
                        </div>  
                        
                    </div>
                </div>
        );
    }
}