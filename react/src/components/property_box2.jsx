import * as Icon from "react-bootstrap-icons";
import { formatToPhilPeso } from "../assets/js/utils";
import { useNavigate } from "react-router-dom";

export const PropertyBox2 = ({ property}) => { //TODO::put parameters]
    const navigate = useNavigate();

    const handleViewProperty = (event) => {
        navigate(`/viewProperty/${property.id}`);
    }


    return (
        <div className="text-decoration-none property-box color-black2" onClick={handleViewProperty}>
            <div>
                <div className="property-box-pic">
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