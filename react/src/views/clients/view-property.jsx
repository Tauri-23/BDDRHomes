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
            <div className="d-flex gap1 mar-top-1">
                    <div className="flex-grow-1">
                        {/* Property Name */}
                        <div className="text-l1 fw-bold">Anyana, Paris</div>
                        {/* Property Location */}
                        <div className="d-flex text-l3 gap3 align-items-center mar-top-3">
                            <Icon.GeoAlt/>
                            Mulawin Tanza 4108 Cavite, Philippines
                        </div>
                    </div>
                    <div className="action-box d-flex gap1 flex-direction-y">
                        {/* Price */}
                        <div className="text-l2">₱ 12,000,000.00</div>
                        <div className="d-flex flex-direction-y gap3">
                            <div className="primary-btn-blue1 text-l3 text-center">Contact Agent</div>
                            <div className="secondary-btn-blue1 text-l3 text-center color-blue1">Book A Tripping</div>
                        </div>
                    </div>
                </div>
        </div>
    )
};