import { Link, Navigate, Outlet, redirect, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { isEmptyOrSpaces, notify } from "../../../../assets/js/utils";
import axiosClient from "../../../../axios-client";
import { ToastContainer } from "react-toastify";
import { useStateContext } from "../../../../contexts/ContextProvider";

export default function AgentCreateListingDefault() {
    const location = useLocation();
    const {user, userType, token} = useStateContext();

    // 
    const [selectedProperty, setSelectedProperty] = useState(null);

    // Links
    const backLinks = {
        '/BDDRAgent/CreateListing': '/BDDRAgent/Listings',
        '/BDDRAgent/CreateListing/Property': '/BDDRAgent/CreateListing',
    };
    const nextLinks = {
        '/BDDRAgent/CreateListing': 'Property',
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
        
    }, [location.pathname]);


    const handlePublishProperty = (event) => {
        //event.preventDefault();
        const formData = new FormData();
        formData.append('property_type', selectedTypes.id);
        formData.append('property_name', propertyName);
        formData.append('property_address', propertyAddress);
        formData.append('property_desc', propertyDesc);
        formData.append('bedroom', bedroom);
        formData.append('bathroom', bathroom);
        formData.append('carport', carport);
        formData.append('lot_area', lotArea);
        formData.append('floor_area', floorArea);
        formData.append('required_income', requiredIncome);
        formData.append('price', price);
        formData.append('agent_id', user.id);

        selectedPropertyAmenities.forEach((amenity, index) => {
            formData.append(`property_amenities[${index}]`, amenity.id);
        });

        selectedPropertyFinancing.forEach((financing, index) => {
            formData.append(`property_financing[${index}]`, financing.id);
        });

        photos.forEach((photo, index) => {
            formData.append(`photo[${index}]`, photo);
        });

        axiosClient.post('/publish-property', formData)
        .then(({data}) => {
            if(data.status === 200) {
                window.location.href = '/BDDRAgent/Listings';
            }
            else {
                notify('error', data.message, 'top-center', 3000);
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
                        selectedProperty
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