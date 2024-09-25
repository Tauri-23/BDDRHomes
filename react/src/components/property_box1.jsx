import { Link, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { formatToPhilPeso } from "../assets/js/utils";
import { useEffect } from "react";
import { useModal } from "../contexts/ModalContext";

export const PropertyBox1 = ({ wishlists, propId, property, viewAs, isInWishlist, handleCreateWishlistAndAddPropToIt, handleRemovePropFromWishlist, handleAddPropToWishlist}) => { //TODO::put parameters]
    const {showModal} = useModal();
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(`${property}`);
    // }, []);

    const handleViewProperty = (event) => {
        navigate(`/BDDRClient/ViewProperty/${propId}`);
    }

    const handleHeartPressed = (event) => {
        event.stopPropagation();
        if(isInWishlist) {
            handleRemovePropFromWishlist(propId);
        }
        else {
            showModal('ClientAddToWishlistModal1', { propId, wishlists, handleCreateWishlistAndAddPropToIt, handleAddPropToWishlist});
        }        
    }


    return (
        <div className="property-box-4" onClick={handleViewProperty}>
            <div>
                <div className="property-box-pic">
                    <div className="property-box-pic-tag">
                        {property.turnover}
                    </div>
                    <div className="property-box-pic-icons" onClick={handleHeartPressed}>
                        {isInWishlist ? (<Icon.HeartFill className="property-box-pic-icon1 fill"/>): (<Icon.Heart className="property-box-pic-icon1"/>)}
                    </div>
                    
                    <img src={`/src/assets/media/properties/${property.photos[0].filename}`} alt="" />
                    
                </div>

                <div className="property-box-desc">
                        <div className="text-l3 fw-bold">{property.project.project_name}, {property.project_model}</div>
                        <div className="d-flex gap4 align-items-center text-m2 w-100">
                            <Icon.GeoAlt/>
                            <div className="listing-property-address">
                                {property.city} {property.province}
                            </div>                            
                        </div>

                        <div className="text-m2 d-flex gap4 align-items-center mar-top-3">
                            <div className="property-box-agent-pfp">
                                {property?.developer?.logo 
                                ? (<img src={`/src/assets/media/developers/${property.developer.logo}`} alt="" />)
                                : property.developer.name[0]}
                            </div>
                            {property.developer.name}
                        </div>

                        {/* Specs Preview */}
                        <div className="d-flex flex-wrap gap3 mar-top-3">
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

                            <div className="listing-box-specs-box">
                                <img src="/src/assets/media/icons/area.svg" alt="" />
                                {property.lot_area}
                            </div>

                            {/* <div className="listing-box-specs-box">
                                <Icon.House/>
                                Single Detached
                            </div> */}
                        </div>

                        {/* Price */}
                        <div className="text-start mar-top-3 text-m1 fw-bold">
                            {viewAs == 1 
                            ? <>{formatToPhilPeso(property.monthly_amortization_min)} - {formatToPhilPeso(property.monthly_amortization_max)}</>
                            : (viewAs == 2 ? formatToPhilPeso(property.tcp) 
                                : <>{formatToPhilPeso(property.required_income_min)} - {formatToPhilPeso(property.required_income_max)}</>)}
                        </div>

                        
                </div>
            </div>
        </div>        
    );
}