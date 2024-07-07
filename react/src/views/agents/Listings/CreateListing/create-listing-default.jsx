import { Link, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

export default function AgentCreateListingDefault() {
    const location = useLocation();
    console.log(location.pathname);
    const backLinks = {
        '/BDDRAgent/CreateListing': '/BDDRAgent/Listings',
        '/BDDRAgent/CreateListing/PropertyType': '/BDDRAgent/CreateListing',
        '/BDDRAgent/CreateListing/NameAndLoc': '/BDDRAgent/CreateListing/PropertyType',
        '/BDDRAgent/CreateListing/Floorplan': '/BDDRAgent/CreateListing/NameAndLoc',
        '/BDDRAgent/CreateListing/Step2': '/BDDRAgent/CreateListing/Floorplan',
        '/BDDRAgent/CreateListing/Amenities': '/BDDRAgent/CreateListing/Step2',
    };

    const nextLinks = {
        '/BDDRAgent/CreateListing': 'PropertyType',
        '/BDDRAgent/CreateListing/PropertyType': 'NameAndLoc',
        '/BDDRAgent/CreateListing/NameAndLoc': 'Floorplan',
        '/BDDRAgent/CreateListing/NameAndLoc': 'Step2',
        '/BDDRAgent/CreateListing/Step2': 'Amenities',
        '/BDDRAgent/CreateListing/Amenities': 'Photos',
    }


    return(
        <div className="h-100vh w-100 d-flex flex-direction-y justify-content-between">
            {/* Navbar */}
            <div className="navbar4">
                <Link to={'/BDDRAgent'} className="text-decoration-none color-black2">
                        <div className="d-flex align-items-center gap3">
                            <img src="/src/assets/media/logos/logo1.png" className="navbar-1-logo-pic" alt="" />
                            {/* <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div> */}
                        </div>
                </Link>

                {/* Notif and PFP */}
                <div className="d-flex align-items-center gap2">

                    <div className="secondary-btn2-grey1 d-flex align-items-center">Save & Exit</div>

                </div>

            </div>

            <Outlet/>

            {/* Action Btns */}
            <div className="bot-navbar4">
                <Link to={backLinks[location.pathname]} className="text-decoration-none color-black1">
                    <div className="secondary-btn-black1 d-flex gap4 align-items-center">
                        <Icon.ChevronLeft/>
                        back
                    </div>
                </Link>
                <Link to={nextLinks[location.pathname]} className="text-decoration-none color-black1">
                    <div className="primary-btn-black1 d-flex gap4 align-items-center">
                        Next
                        <Icon.ChevronRight/>
                    </div>
                </Link>
            </div>
        </div>
    );
}