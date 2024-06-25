import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";

export default function ClientIndex() {

    return (
        <div className="content1 compressed">
            {/* Property Types Category-btns */}
            <div className="d-flex gap3 mar-bottom-1">
                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/house.svg" className='category-icon1' alt=""/>
                    House and Lot
                </div>
                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/building.svg" className='category-icon1' alt=""/>
                    Condos
                </div>
                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/land.svg" className='category-icon1' alt=""/>
                    Lot Only
                </div>

                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/rowhouse.svg" className='category-icon1' alt=""/>
                    Row House
                </div>

                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                    Bungalow
                </div>
            </div>

            {/* Properties Container */}
            <div className="properties-cont">


                {/* Render Property boxes */}
                <div className="property-box">
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

                <div className="property-box">
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

                <div className="property-box">
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

                <div className="property-box">
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

                <div className="property-box">
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

                <div className="property-box">
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


            </div>
        </div>
    )
};