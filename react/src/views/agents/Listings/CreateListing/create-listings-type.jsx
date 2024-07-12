import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { fetchPropertyTypes } from '../../../../Services/AgentCreateListingService';
import { useOutletContext } from 'react-router-dom';

export default function AgentCreateListingType() {

    const [propertyTypes, setPropertyTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { selectedTypes, setSelectedTypes} = useOutletContext();

    useEffect(() => {
        const getPropertyTypes = async () => {
            try {
                const data = await fetchPropertyTypes();
                setPropertyTypes(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch property types:', error);
            }
        };

        getPropertyTypes();
    }, []);

    const handleSelectType = (typeId) => {
        setSelectedTypes(typeId);
    };

    if(!loading) {
        return(
            <div className="d-flex justify-content-center transition-fade-in">
                <div className='d-flex flex-direction-y gapl1'>
    
                    <div className="text-l1 fw-bold create-listing-cont">Tell us what type of property you are offering.</div>
                        
                    <div className="create-listing-option-box-cont">
    
                        {propertyTypes.map((type) => (
                            <div 
                                key={type.id} 
                                onClick={() => handleSelectType(type)}
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