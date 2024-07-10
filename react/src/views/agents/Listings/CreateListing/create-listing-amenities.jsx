import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { fethPropertyAmenities } from '../../../../Services/AgentCreateListingService';
import { useOutletContext } from 'react-router-dom';

export default function AgentCreateListingAmenities() {

    const [propertyAmenities, setPropertyAmenities] = useState([]);
    const [loading, setLoading] = useState(true);
    const {selectedPropertyAmenities, setSelectedPropertyAmenities} = useOutletContext();

    useEffect(() => {
        const getPropertyAmenities = async () => {
            try {
                const data = await fethPropertyAmenities();
                setPropertyAmenities(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch property types:', error);
            }
        };

        getPropertyAmenities();
    }, []);

    const handleSelectAmenities = (typeId) => {
        setSelectedPropertyAmenities(prevSelectedTypes =>
            prevSelectedTypes.includes(typeId)
                ? prevSelectedTypes.filter(id=> id !== typeId)
                : [...prevSelectedTypes, typeId]
        );
    };

    if(!loading) {
        return(
            <div className="d-flex justify-content-center transition-fade-in">
                <div className='d-flex flex-direction-y gapl1'>
    
                    <div className="d-flex flex-direction-y gap1">
                        <div className="d-flex flex-direction-y gap1">
                            <div className="text-l1 fw-bold create-listing-cont">Tell us what amenities your property has.</div>
                            
                            <div className="create-listing-option-box-cont">
    
                                {propertyAmenities.map((amenity) => (
                                    <div 
                                        key={amenity.id}
                                        onClick={() => handleSelectAmenities(amenity.id)}
                                        className={`create-listing-option-box1 ${selectedPropertyAmenities.includes(amenity.id) ? 'active' : ''}`}
                                    >
                                        <img src={`/src/assets/media/icons/${amenity.icon}`} className='create-listing-option-box1-icon'/>
                                        <div className="text-m2">{amenity.amenity_name}</div>
                                    </div>
                                ))}
                            </div>                                                
                        </div>           
                    </div>
                    
                </div>
            </div>
        );
    }
}