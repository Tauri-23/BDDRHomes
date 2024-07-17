import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '/src/assets/css/agent-edit-listing.css';
import { fetchAgentSpecificPropertyFull } from "../../../../Services/AgentListingService";

export default function AgentEditListingDefault() {
    const {id, page} = useParams();
    const [listing, setListing] = useState([]);

    useEffect(() => {
        const getListingFull = async() => {
            try {
                const data = await fetchAgentSpecificPropertyFull(id);
                setListing(data);
            } catch (error) {
                console.error(error);
            }
        };

        getListingFull();

        
    }, []);

    console.log(listing.data);

    return (
        <div className="edit-listing-content">                

            {listing.data && (
                <div className="d-flex">
                    <div className="edit-listing-sidenav">
                        <div className="edit-listing-sidenav-box active">
                            <div className="text-m2 fw-bold">Photos</div>
                            <div className="edit-listing-sidenav-box-prop-pic-cont">
                                {listing.data[0].photos.slice(0,5).map(photo =>
                                    <div key={photo.id} className="edit-listing-sidenav-box-prop-pic">
                                        <img src={`/src/assets/media/properties/${photo.filename}`} alt="" />
                                    </div>
                                )}
                                
                            </div>
                        </div>

                        <div className="edit-listing-sidenav-box">
                            <div className="text-m2 fw-bold">Name</div>
                            <div className="text-l3">{listing.data[0].name}</div>
                        </div>

                        <div className="edit-listing-sidenav-box">
                            <div className="text-m2 fw-bold">Property Type</div>
                            <div className="text-l3">{listing.data[0].property_type.type_name}</div>
                        </div>

                        <div className="edit-listing-sidenav-box">
                            <div className="text-m2 fw-bold">Description</div>
                            <div className="line-clamp-3">{listing.data[0].description}</div>
                        </div>

                        <div className="edit-listing-sidenav-box">
                            <div className="text-m2 fw-bold mar-bottom-3">Floorplan</div>
                            <div className="listing-spec-box3"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/>Bedroom: {listing.data[0].bedroom}</div>
                            <div className="listing-spec-box3"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/>Bath: {listing.data[0].bath}</div>
                            <div className="listing-spec-box3"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/>Carport: {listing.data[0].carport}</div>
                            <div className="text-m2 mar-top-3 text-decoration-underline">See more...</div>
                        </div>

                        <div className="edit-listing-sidenav-box">
                            <div className="text-m2 fw-bold mar-bottom-3">Amenities</div>
                            {listing.data[0].amenities.slice(0,3).map(amenity =>
                                <div key={amenity.amenity.id} className="listing-spec-box3"><img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className="listing-spec-box-icon"/>{amenity.amenity.amenity_name}</div>
                            )}
                            <div className="text-m2 mar-top-3 text-decoration-underline">See more...</div>
                        </div>

                        <div className="edit-listing-sidenav-box">
                            <div className="text-m2 fw-bold mar-bottom-3">Financing</div>
                            {listing.data[0].financings.slice(0,3).map(financing => 
                                <div key={financing.financing.id} className="listing-spec-box3"><img src={`/src/assets/media/icons/${financing.financing.icon}`} className="listing-spec-box-icon"/>{financing.financing.financing_type}</div>
                            )}

                        </div>
                    </div>
                    
                </div>
            )}

            {!listing.data && (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}

                    
        </div>
    );
}