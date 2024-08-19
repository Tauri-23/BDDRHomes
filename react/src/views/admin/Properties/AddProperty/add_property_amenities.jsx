import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchPropertyAmenities } from "../../../../Services/AgentCreateListingService";

export default function AdminAddPropertyAmenities() {
    const [propertyAmenities, setPropertyAmenities] = useState([]);
    const [loading, setLoading] = useState(true);
    const {selectedPropertyAmenities, setSelectedPropertyAmenities} = useOutletContext();

    useEffect(() => {
        const getPropertyAmenities = async () => {
            try {
                const data = await fetchPropertyAmenities();
                setPropertyAmenities(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch property amenities:', error);
            }
        };

        getPropertyAmenities();
    }, []);

    const handleSelectAmenities = (amenityId) => {
        setSelectedPropertyAmenities(prevSelectedAmenities =>
            prevSelectedAmenities.includes(amenityId)
                ? prevSelectedAmenities.filter(id=> id !== amenityId)
                : [...prevSelectedAmenities, amenityId]
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
                                        onClick={() => handleSelectAmenities(amenity)}
                                        className={`create-listing-option-box1 ${selectedPropertyAmenities.some(element => element.id === amenity.id) ? 'active' : ''}`}
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