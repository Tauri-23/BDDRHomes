import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export const PropertyBox1 = ({}) => { //TODO::put parameters
    return (
        <Link to={'/BDDRClient/ViewProperty'} className="text-decoration-none property-box color-black2">
            <div>
                    <div className="property-box-pic">
                        <img src="/src/assets/media/properties/anyana-paris-test.jpeg" alt="" />
                    </div>

                    <div className="property-box-desc">
                        <div className="text-l3">Property Name</div>
                        <div className="text-m2 d-flex align-items-center gap4">
                            <Icon.GeoAlt/>
                            Address
                        </div>

                        <div className="text-m2 d-flex gap4 align-items-center mar-top-3">
                            <div className="property-box-agent-pfp">
                                <img src="/src/assets/media/agents/pfp/melissa-pfp.jpeg" alt="" />
                            </div>
                            Melissa Diawan
                        </div>

                        {/* Specs Preview */}
                        <div className="d-flex gap3 mar-top-3">
                            <div className="listing-box-specs-box">
                                <img src="/src/assets/media/icons/bed.svg" alt="" />
                                4
                            </div>

                            <div className="listing-box-specs-box">
                                <img src="/src/assets/media/icons/bathtub.svg" alt="" />
                                2
                            </div>

                            <div className="listing-box-specs-box">
                                <img src="/src/assets/media/icons/garages.svg" alt="" />
                                2
                            </div>

                            {/* <div className="listing-box-specs-box">
                                <Icon.House/>
                                Single Detached
                            </div> */}
                        </div>

                        {/* Price */}
                        <div className="text-end mar-top-3">
                            ₱ 12,000,000.00
                        </div>

                        
                    </div>
                </div>
        </Link>        
    );
}