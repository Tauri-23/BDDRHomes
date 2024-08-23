import { Link, Navigate, Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { isEmptyOrSpaces, notify } from "../../../../assets/js/utils";
import axiosClient from "../../../../axios-client";
import { ToastContainer } from "react-toastify";
import { useStateContext } from "../../../../contexts/ContextProvider";
import '../../../../assets/css/agent-add-property-listing.css';

export default function AgentCreatePropertyListingDefault() {
    const location = useLocation();
    const navigate = useNavigate();
    const {user, userType, token} = useStateContext();

    // 
    const [selectedProperty, setSelectedProperty] = useState(null);

    // Links
    const backLinks = {
        '/BDDRAgent/CreateListing': '/BDDRAgent/Listings',
        '/BDDRAgent/CreateListing/Property': '/BDDRAgent/CreateListing',
        '/BDDRAgent/CreateListing/Finalize': '/BDDRAgent/CreateListing/Property',
    };
    const nextLinks = {
        '/BDDRAgent/CreateListing': 'Property',
        '/BDDRAgent/CreateListing/Property': 'Finalize',
    };

    const [nextBtnState, setNextBtnState] = useState(false);

    // UserTypeChecker
    // Handle redirection in the component body
    if (!token || userType !== 'agent') {
        return <Navigate to="/" />;
    }

    useEffect(() => {
        // Property Type Script
        if(location.pathname === '/BDDRAgent/CreateListing' || location.pathname === '/BDDRAgent/CreateListing/Step2') {
            setNextBtnState(false);
        }

        if(location.pathname === '/BDDRAgent/CreateListing/Property' && selectedProperty === null) {
            setNextBtnState(true);
            return
        }
        else {
            setNextBtnState(false);
        }
    }, [location.pathname, selectedProperty]);


    const handlePublishProperty = (event) => {
        //event.preventDefault();
        const formData = new FormData();
        formData.append('property', selectedProperty.id);
        formData.append('agent_id', user.id);

        console.log(`property: ${selectedProperty.id}, agent: ${user.id}`);

        axiosClient.post('/publish-property-listing', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                navigate('/BDDRAgent/Listings');
            }
            else {
                notify('error', data.message, 'bottom-left', 3000);
            }
        })
        .catch(error => {
            const response = error.response;
            if(response) {
                console.log(response);
            }
        });
    }


    return(
        <div className="h-100vh w-100 d-flex flex-direction-y justify-content-between position-relative">
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

                    {/* <div className="secondary-btn2-grey1 d-flex align-items-center">Save & Exit</div> */}

                </div>

            </div>

            <Outlet 
                context={
                    { 
                        selectedProperty, setSelectedProperty
                    }
                }/>

            <ToastContainer/>

            {/* Action Btns */}
            <div className="bot-navbar4">
                <Link to={backLinks[location.pathname]} className="text-decoration-none color-black1">
                    <button className="secondary-btn-black1 d-flex gap4 align-items-center">
                        <Icon.ChevronLeft/>
                        back
                    </button>
                </Link>


                {/* Publish Btn */}
                <button 
                    disabled={nextBtnState} 
                    className={`primary-btn-black1 ${nextBtnState ? 'disabled' : ''} d-flex gap4 align-items-center ${location.pathname === "/BDDRAgent/CreateListing/Finalize" ? '' : 'd-none'}`}
                    onClick={handlePublishProperty}
                >
                    Publish                      
                    <Icon.ChevronRight/>
                </button>
                
                {/* Next Btn */}
                <Link to={nextLinks[location.pathname]} className={`text-decoration-none color-black1 ${location.pathname === "/BDDRAgent/CreateListing/Finalize" ? 'd-none' : ''}`}>
                    <button 
                        disabled={nextBtnState} 
                        className={`primary-btn-black1 ${nextBtnState ? 'disabled' : ''} d-flex gap4 align-items-center`}
                    >
                        Next                     
                        <Icon.ChevronRight/>
                    </button>
                </Link>
            </div>            
        </div>
    );
}