import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import '/src/assets/css/view-listing.css';

export default function ClientViewProperty() {

    return (
        <div className="content1 compressed">
            <div className="property-pictures">
                <div className="property-picture large">

                </div>

                {/* Property Pics */}
                <div className="d-flex flex-wrap gap3 h-100 flex-grow-1">
                    <div className="property-picture small">

                    </div>

                    <div className="property-picture small">

                    </div>

                    <div className="property-picture small">

                    </div>

                    <div className="property-picture small">

                    </div>
                </div>
            </div>

            {/* Property Infos */}
            <div className="property-infos mar-top-1">
                    <div className="flex-grow-1">
                        {/* Property Name */}
                        <div className="text-l1 fw-bold">Anyana, Paris</div>
                        {/* Property Location */}
                        <div className="d-flex text-l3 gap3 align-items-center mar-top-3">
                            <Icon.GeoAlt/>
                            Antero Soriano Highway in Tanza, Cavite, 4108
                        </div>

                        {/* Specs */}
                        <div className="mar-top-l1 d-flex flex-direction-y gap2">
                            <div className="text-l2">Specs</div>

                            <div className="d-flex flex-wrap gap3">
                                <div className="listing-spec-box">Bedrooms: 4</div>
                                <div className="listing-spec-box">Bathrooms: 4</div>
                                <div className="listing-spec-box">Car port: 2</div>
                                <div className="listing-spec-box">Lot area: 150sqm</div>
                                <div className="listing-spec-box">Floor area: 187.32sqm</div>
                                <div className="listing-spec-box">House Type: Single Detached</div>
                            </div>
                        </div>

                        {/* Features and Amenities */}
                        <div className="mar-top-l1 d-flex flex-direction-y gap2">
                            <div className="text-l2">What this place offer</div>

                            <div className="d-flex flex-wrap gap3">
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/club1.svg" className="listing-spec-box-icon"/>Clubhouse</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/court.svg" className="listing-spec-box-icon"/> Basketball Court</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/swing.svg" className="listing-spec-box-icon"/>Playground</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/dumbbell.svg" className="listing-spec-box-icon"/>Gym</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/security1.svg" className="listing-spec-box-icon"/>24 Hour Securty</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/park2.svg" className="listing-spec-box-icon"/>Jogging Path</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/internet1.svg" className="listing-spec-box-icon"/>Internet Service</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/pool.svg" className="listing-spec-box-icon"/>Swimming Pool</div>
                                <div className="listing-spec-box"><img src="/src/assets/media/icons/park2.svg" className="listing-spec-box-icon"/>Park</div>
                            </div>
                        </div>


                        {/* Map */}
                        <div className="mar-top-l1 d-flex flex-direction-y gap2">
                            <div className="text-l2">Property Map</div>

                            <div className="property-map-cont">
                            </div>
                        </div>
                    </div>



                    {/* Actions */}
                    <div className="action-box d-flex gap1 flex-direction-y">
                        {/* Price */}
                        <div className="text-l2">₱ 12,411,975.86</div>
                        <div className="d-flex flex-direction-y gap3">
                            <div className="text-l3">Listed By:</div>
                            <div className="d-flex gap3 align-items-center">
                                <div className="listed-by-pfp">
                                    <img src="/src/assets/media/agents/pfp/melissa-pfp.jpeg" alt="" />
                                </div>
                                <div className="">
                                    <div className="text-l3">Melissa Diawan</div>
                                    <div className="text-m3">Agent / Team Leader</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="d-flex flex-direction-y gap3">
                            <div className="primary-btn-blue1 text-l3 text-center">Contact Agent</div>
                            <div className="secondary-btn-blue1 text-l3 text-center color-blue1">Book A Tripping</div>
                        </div>
                    </div>
                </div>
        </div>
    )
};