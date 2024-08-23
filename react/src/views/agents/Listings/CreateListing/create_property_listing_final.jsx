import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { formatToPhilPeso } from "../../../../assets/js/utils";

export default function AgentCreatePropertyListingFinal() {
    const {selectedProperty} = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(selectedProperty === null) {
            navigate('/BDDRAgent/CreateListing/Property');
        }
    }, []);
    
    

    if(selectedProperty){
        // Divide the amenities into two halves
        const middleIndex = Math.ceil(selectedProperty.amenities.length / 2);
        const firstHalfAmenities = selectedProperty.amenities.slice(0, middleIndex);
        const secondHalfAmenities = selectedProperty.amenities.slice(middleIndex);

        return(
            <div className="d-flex justify-content-center">
                <div className="create-listing-cont d-flex flex-direction-y gapl1 padding-y-1">
                    <div className="d-flex flex-direction-y gap2">
                        <div className="text-m1 fw-bold">Final Step</div>
                        <div className="text-xl2 fw-bold">You've finally filled out the form; the only thing to do is publish your listing.</div>
                        <div className="text-l3">Please check the preview below, and if you're happy with the information, you can click the publish button.</div>
                    </div>
    
                    <div className="h-line-general-grey1"></div>               
    
    
                    <div className="d-flex flex-direction-y gap1">
                        <div className="d-flex flex-direction-y gap4">
                            <div className="text-m1">Property Name: </div>
                            <div className="text-l3 fw-bold">{selectedProperty.name}</div>
                        </div>
    
                        <div className="d-flex flex-direction-y gap4">
                            <div className="text-m1">Property Address: </div>
                            <div className="text-l3 fw-bold">{selectedProperty.address}</div>
                        </div>
    
                        <div className="d-flex flex-direction-y gap4">
                            <div className="text-m1">Property Description: </div>
                            <div className="text-l3 about-content">{selectedProperty.description}</div>
                        </div>
    
                        {/* Basic Specs */}
                        <div className="d-flex flex-direction-y gap3 mar-top-1">
                            <div className="text-l3 fw-bold mar-bottom-3">Basic Specs: </div>
                            
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-direction-y gap3">
                                    <div className="listing-spec-box2">
                                        <img src="/src/assets/media/icons/bed.svg" className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">Bedroom: {selectedProperty.bedroom}</div>
                                    </div>
                                    <div className="listing-spec-box2">
                                        <img src="/src/assets/media/icons/bathtub.svg" className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">Bath: {selectedProperty.bathroom}</div>
                                    </div>
    
                                    <div className="listing-spec-box2">
                                        <img src="/src/assets/media/icons/garages.svg" className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">Carport: {selectedProperty.carport}</div>
                                    </div>
                                </div>
    
                                <div className="d-flex flex-direction-y gap3">
                                    <div className="listing-spec-box2">
                                        <img src="/src/assets/media/icons/area.svg" className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">Lot area: {selectedProperty.lotArea}sqm</div>
                                    </div>
                                    <div className="listing-spec-box2">
                                        <img src="/src/assets/media/icons/area.svg" className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">Floor area: {selectedProperty.floorArea}sqm</div>
                                    </div>
    
                                    <div className="listing-spec-box2">
                                        <img src="/src/assets/media/icons/house.svg" className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">House type: {selectedProperty.property_type}</div>
                                    </div>
                                </div>                           
                            </div>
                        </div>
    
                        {/* Amenities */}
                        <div className="d-flex flex-direction-y gap3 mar-top-1">
                            <div className="text-l3 fw-bold mar-bottom-3">Amenities: </div>
                            
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-direction-y gap3">
                                    {firstHalfAmenities.map((amenity) => (
                                        <div key={amenity.amenity.id} className="listing-spec-box2">
                                            <img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className="icon-s" alt="Bedroom"/>
                                            <div className="text-m1">{amenity.amenity.amenity_name}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="d-flex flex-direction-y gap3">
                                    {secondHalfAmenities.map((amenity) => (
                                        <div key={amenity.amenity.id} className="listing-spec-box2">
                                            <img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className="icon-s" alt="Bedroom"/>
                                            <div className="text-m1">{amenity.amenity.amenity_name}</div>
                                        </div>
                                    ))}
                                </div>                      
                            </div>
                        </div>
    
                        {/* Photos */}
                        <div className="d-flex flex-direction-y gap3 mar-top-1">
                            <div className="text-l3 fw-bold mar-bottom-3">Photos: </div>
                            
                            <div className="d-flex w-100 flex-wrap gap3">
                                {selectedProperty.photos.map((photo, index) => (
                                    <div key={index} className="photos-preview-box">
                                        <img 
                                        src={`/src/assets/media/properties/${photo.filename}`} 
                                        alt={`Photo ${index + 1}`} 
                                        className="photo-preview"
                                        />
                                    </div>          
                                ))}
                            </div>
                        </div>
    
                        {/* Financings */}
                        <div className="d-flex flex-direction-y gap3 mar-top-1">
                            <div className="text-l3 fw-bold mar-bottom-3">Financing: </div>
                            
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-direction-y gap3">
                                    {selectedProperty.financings.map((financing) => (
                                        <div key={financing.financing.id} className="listing-spec-box2">
                                            <img src={`/src/assets/media/icons/${financing.financing.icon}`} className="icon-s" alt="Bedroom"/>
                                            <div className="text-m1">{financing.financing.financing_type}</div>
                                        </div>
                                    ))}
                                </div>                 
                            </div>
                        </div>
    
                        {/* <div className="d-flex flex-direction-y gap3 mar-top-1">
                            <div className="text-l3 fw-bold mar-bottom-3">Price: </div>
                            <div className="text-l3 about-content">{propertyDesc}</div>
                        </div> */}
                        <div className="d-flex flex-direction-y gap4">
                            <div className="text-m1">Price: </div>
                            <div className="text-l3 fw-bold">{formatToPhilPeso(selectedProperty.price)}</div>
                        </div>
    
                        <div className="d-flex flex-direction-y gap4">
                            <div className="text-m1">Required Income: </div>
                            <div className="text-l3 fw-bold">{formatToPhilPeso(selectedProperty.required_income)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}