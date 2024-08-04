import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { formatToPhilPeso } from "../assets/js/utils";
import { useEffect } from "react";
import { useModal } from "../contexts/ModalContext";

export const PropertyBox1 = ({ wishlists, property}) => { //TODO::put parameters]
    const {showModal} = useModal();

    const handleViewProperty = (event) => {
        window.location.href = `/BDDRClient/ViewProperty/${property.id}`;
    }

    const handleAddToWishlist = (event) => {
        event.stopPropagation();
        showModal('ClientAddToWishlistModal1', { propertyId: property.id, wishlists});
    }


    return (
        <div className="text-decoration-none property-box color-black2" onClick={handleViewProperty}>
            <div>
                <div className="property-box-pic">
                    <div className="property-box-pic-icons" onClick={handleAddToWishlist}>
                        <Icon.Heart className="property-box-pic-icon1"/>
                        <Icon.HeartFill className="property-box-pic-icon2"/>
                    </div>
                    <img src={`/src/assets/media/properties/${property.photos[0].filename}`} alt="" />
                </div>

                <div className="property-box-desc">
                        <div className="text-l3">{property.name}</div>
                        <div className="d-flex gap4 align-items-center text-m2 w-100">
                            <Icon.GeoAlt/>
                            <div className="listing-property-address">
                                {property.address}
                            </div>                            
                        </div>

                        <div className="text-m2 d-flex gap4 align-items-center mar-top-3">
                            <div className="property-box-agent-pfp">
                                {property.agent.pfp 
                                ? (<img src={`/src/assets/media/agents/pfp/${property.agent.pfp}`} alt="" />)
                                : property.agent.firstname[0]}
                                
                            </div>
                            {property.agent.firstname} {property.agent.lastname}
                        </div>

                        {/* Specs Preview */}
                        <div className="d-flex gap3 mar-top-3">
                            <div className="listing-box-specs-box">
                                <img src="/src/assets/media/icons/bed.svg" alt="" />
                                {property.bedroom}
                            </div>

                            <div className="listing-box-specs-box">
                                <img src="/src/assets/media/icons/bathtub.svg" alt="" />
                                {property.bath}
                            </div>

                            <div className="listing-box-specs-box">
                                <img src="/src/assets/media/icons/garages.svg" alt="" />
                                {property.carport}
                            </div>

                            {/* <div className="listing-box-specs-box">
                                <Icon.House/>
                                Single Detached
                            </div> */}
                        </div>

                        {/* Price */}
                        <div className="text-start mar-top-3">
                            {formatToPhilPeso(property.price)}
                        </div>

                        
                </div>
            </div>
        </div>        
    );
}