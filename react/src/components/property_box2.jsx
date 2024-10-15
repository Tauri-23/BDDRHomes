import * as Icon from "react-bootstrap-icons";
import { formatToPhilPeso } from "../assets/js/utils";
import { useNavigate } from "react-router-dom";

export const PropertyBox2 = ({ propId, property, viewAs}) => { //TODO::put parameters]
    const navigate = useNavigate();

    const handleViewProperty = (event) => {
        navigate(`/viewProperty/${property.id}`);
    }


    return (
        <div className="property-box-4" onClick={handleViewProperty}>
            <div>
                <div className="property-box-pic">
                    <div className="property-box-pic-tag">
                        {property.turnover}
                    </div>
                    
                    <img src={`/src/assets/media/properties/${property.photos[0].filename}`} alt="" />
                    
                </div>

                <div className="property-box-desc">
                        <div className="text-l3 fw-bold">{property.project_model}</div>
                        <div className="d-flex gap4 align-items-center text-m2 w-100">
                            <Icon.GeoAlt/>
                            <div className="listing-property-address">
                                {property.city.city} {property.province.province}
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

                            <div className={`listing-box-specs-box ${property.carport > 0 ? '' : 'd-none'}`}>
                                <img src="/src/assets/media/icons/garages.svg" alt="" />
                                {property.carport}
                            </div>

                            <div className="listing-box-specs-box">
                                {/* <img src="/src/assets/media/icons/area.svg" alt="" /> */}
                                <div>LA: {property.lot_area}sqm</div>
                            </div>

                            <div className="listing-box-specs-box">
                                {/* <img src="/src/assets/media/icons/area.svg" alt="" /> */}
                                <div>FA: {property.floor_area}sqm</div>
                            </div>

                            {/* <div className="listing-box-specs-box">
                                <Icon.House/>
                                Single Detached
                            </div> */}
                        </div>

                        {/* Price */}
                        <div className="text-start mar-top-3 text-m2 fw-bold">
                            {viewAs == 1 
                            ? <div className="d-flex align-items-center gap3 fw-bold">{formatToPhilPeso(property.loan_term_ma[property.loan_term_ma.length -1].ma)} - {formatToPhilPeso(property.loan_term_ma[0].ma)} <div className="text-m4 fst-italic">Monthly Amortization</div></div>
                            : (viewAs == 2 ? <div className="d-flex align-items-center gap3 fw-bold">{formatToPhilPeso(property.tcp)} <div className="text-m4 fst-italic">TCP</div></div> 
                                : <div className="d-flex align-items-center gap3 fw-bold">{formatToPhilPeso(property.required_income_min)} - {formatToPhilPeso(property.required_income_max)} <div className="text-m4 fst-italic">required income</div></div>)}
                        </div>

                        
                </div>
            </div>
        </div>        
    );
}