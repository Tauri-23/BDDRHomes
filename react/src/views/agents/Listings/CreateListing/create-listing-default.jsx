import { Link, Outlet, redirect, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { fetchPropertyTypes } from "../../../../Services/AgentCreateListingService";
import { isEmptyOrSpaces, notify } from "../../../../assets/js/utils";
import axiosClient from "../../../../axios-client";
import { ToastContainer } from "react-toastify";
import { useStateContext } from "../../../../contexts/ContextProvider";

export default function AgentCreateListingDefault() {
    const location = useLocation();
    const {user} = useStateContext();

    // Links
    const backLinks = {
        '/BDDRAgent/CreateListing': '/BDDRAgent/Listings',
        '/BDDRAgent/CreateListing/PropertyType': '/BDDRAgent/CreateListing',
        '/BDDRAgent/CreateListing/NameAndLoc': 'PropertyType',
        '/BDDRAgent/CreateListing/Floorplan': 'NameAndLoc',
        '/BDDRAgent/CreateListing/Step2': 'Floorplan',
        '/BDDRAgent/CreateListing/Amenities': 'Step2',
        '/BDDRAgent/CreateListing/Photos': 'Amenities',
        '/BDDRAgent/CreateListing/Step3': 'Photos',
        '/BDDRAgent/CreateListing/Financing': 'Step3',
        '/BDDRAgent/CreateListing/Price': 'Financing',
        '/BDDRAgent/CreateListing/Finalize': 'Price',
    };
    const nextLinks = {
        '/BDDRAgent/CreateListing': 'PropertyType',
        '/BDDRAgent/CreateListing/PropertyType': 'NameAndLoc',
        '/BDDRAgent/CreateListing/NameAndLoc': 'Floorplan',
        '/BDDRAgent/CreateListing/Floorplan': 'Step2',
        '/BDDRAgent/CreateListing/Step2': 'Amenities',
        '/BDDRAgent/CreateListing/Amenities': 'Photos',
        '/BDDRAgent/CreateListing/Photos': 'Step3',
        '/BDDRAgent/CreateListing/Step3': 'Financing',
        '/BDDRAgent/CreateListing/Financing': 'Price',
        '/BDDRAgent/CreateListing/Price': 'Finalize',
    };

    const [nextBtnState, setNextBtnState] = useState(false);

    // Property Attributes
    const [selectedTypes, setSelectedTypes] = useState(null);
    const [propertyName, setPropertyName] = useState(null);
    const [propertyAddress, setPropertyAddress] = useState(null);
    const [propertyDesc, setPropertyDesc] = useState(null);
    const [bedroom, setBedroom] = useState(1);
    const [bathroom, setBathroom] = useState(1);
    const [carport, setCarport] = useState(0);
    const [lotArea, setLotArea] = useState(null);
    const [floorArea, setFloorArea] = useState(null);
    const [selectedPropertyAmenities, setSelectedPropertyAmenities] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [selectedPropertyFinancing, setSelectedPropertyFinancing] = useState([]);
    const [price, setPrice] = useState(0);
    const [requiredIncome, setRequiredIncome] = useState(0);

    useEffect(() => {
        // Property Type Script
        if(location.pathname === '/BDDRAgent/CreateListing' || location.pathname === '/BDDRAgent/CreateListing/Step2') {
            setNextBtnState(false);
        }

        // Property Type Inputs
        if(location.pathname === '/BDDRAgent/CreateListing/PropertyType' && selectedTypes === null) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // Property Name and Location Input
        if(location.pathname === '/BDDRAgent/CreateListing/NameAndLoc'
            && (isEmptyOrSpaces(propertyName) || isEmptyOrSpaces(propertyAddress) || isEmptyOrSpaces(propertyDesc))
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // Property Floor plan inputs
        if(location.pathname === '/BDDRAgent/CreateListing/Floorplan'
            && ((isEmptyOrSpaces(lotArea) || lotArea < 1) || (isEmptyOrSpaces(floorArea) || floorArea < 1))
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // Amenities Inputs
        if(location.pathname === '/BDDRAgent/CreateListing/Amenities'
            && (selectedPropertyAmenities.length < 1)
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // Photos Input
        if(location.pathname === '/BDDRAgent/CreateListing/Photos'
            && (photos.length < 1 || photos.length < 5)
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }
        
    }, [location.pathname, selectedTypes, propertyName, propertyAddress, propertyDesc, floorArea, lotArea, selectedPropertyAmenities, photos]);


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
        formData.append('agent_id', user.user.id);

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
                notify('error', data.message, 3000);
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

                    <div className="secondary-btn2-grey1 d-flex align-items-center">Save & Exit</div>

                </div>

            </div>

            <Outlet 
                context={
                    { 
                        selectedTypes, setSelectedTypes,
                        propertyName, setPropertyName, 
                        propertyAddress, setPropertyAddress, 
                        propertyDesc, setPropertyDesc,
                        bedroom, setBedroom,
                        bathroom, setBathroom,
                        carport, setCarport,
                        lotArea, setLotArea,
                        floorArea, setFloorArea,
                        selectedPropertyAmenities, 
                        setSelectedPropertyAmenities,
                        selectedPropertyFinancing, 
                        setSelectedPropertyFinancing,
                        photos, 
                        setPhotos,
                        price,
                        setPrice,
                        requiredIncome,
                        setRequiredIncome
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