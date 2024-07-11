import { useOutletContext } from "react-router-dom";
import { fetchPropertyFinancing } from "../../../../Services/AgentCreateListingService";
import { useEffect, useState } from "react";

export default function AgentCreateListingFinancing() {

    const [propertyFinancing, setPropertyFinancing] = useState([]);
    const [loading, setLoading] = useState(true);

    const {selectedPropertyFinancing, setSelectedPropertyFinancing} = useOutletContext();

    useEffect(() => {
        const getPropertyAmenities = async () => {
            try {
                const data = await fetchPropertyFinancing();
                setPropertyFinancing(data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch property types:', error);
            }
        };

        getPropertyAmenities();
    }, []);


    return(
        <div className="d-flex justify-content-center transition-fade-in">
            <div className='d-flex flex-direction-y gapl1'>
    
                <div className="d-flex flex-direction-y gap1">
                    <div className="d-flex flex-direction-y gap1">
                        <div className="text-l1 fw-bold create-listing-cont">Available Financing for the property.</div>
                        
                        <div className="create-listing-option-box-cont">
    
                            {propertyFinancing.map((financing) => (
                                <div 
                                    key={financing.id}
                                    // onClick={() => handleSelectAmenities(financing.id)}
                                    className={`create-listing-option-box1 ${selectedPropertyFinancing.includes(financing.id) ? 'active' : ''}`}
                                >
                                    <img src={`/src/assets/media/icons/${financing.icon}`} className='create-listing-option-box1-icon'/>
                                    <div className="text-m2">{financing.financing_name}</div>
                                </div>
                            ))}
                        </div>                                                
                    </div>           
                </div>
                
            </div>
        </div>
    );
}