import { Link, Outlet, useLocation, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";

export default function AdminAddPropertyDefault() {
    const location = useLocation();
    const {isSidenavOpen} = useOutletContext();
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


    // Links
    const backLinks = {
        '/BDDRAdmin/Properties/AddProperty': '/BDDRAdmin/Properties/',
        '/BDDRAdmin/Properties/AddProperty/PropertyType': '/BDDRAdmin/Properties/AddProperty',
        '/BDDRAdmin/Properties/AddProperty/NameAndLoc': 'PropertyType',
        '/BDDRAdmin/Properties/AddProperty/Floorplan': 'NameAndLoc',
        '/BDDRAdmin/Properties/AddProperty/Step2': 'Floorplan',
        '/BDDRAdmin/Properties/AddProperty/Amenities': 'Step2',
        '/BDDRAdmin/Properties/AddProperty/Photos': 'Amenities',
        '/BDDRAdmin/Properties/AddProperty/Step3': 'Photos',
        '/BDDRAdmin/Properties/AddProperty/Financing': 'Step3',
        '/BDDRAdmin/Properties/AddProperty/Price': 'Financing',
        '/BDDRAdmin/Properties/AddProperty/Finalize': 'Price',
    };
    const nextLinks = {
        '/BDDRAdmin/Properties/AddProperty': 'PropertyType',
        '/BDDRAdmin/Properties/AddProperty/PropertyType': '/BDDRAdmin/Properties/AddProperty/NameAndLoc',
        '/BDDRAdmin/Properties/AddProperty/NameAndLoc': 'Floorplan',
        '/BDDRAdmin/Properties/AddProperty/Floorplan': 'Step2',
        '/BDDRAdmin/Properties/AddProperty/Step2': 'Amenities',
        '/BDDRAdmin/Properties/AddProperty/Amenities': 'Photos',
        '/BDDRAdmin/Properties/AddProperty/Photos': 'Step3',
        '/BDDRAdmin/Properties/AddProperty/Step3': 'Financing',
        '/BDDRAdmin/Properties/AddProperty/Financing': 'Price',
        '/BDDRAdmin/Properties/AddProperty/Price': 'Finalize',
    };


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
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''} d-flex flex-direction-y justify-content-between position-relative`}>
            <div className="d-flex">
                <Link to={'/BDDRAdmin/Properties'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                    <Icon.ChevronLeft/>
                    Back
                </Link>  
            </div>
            <Outlet context={
                {
                    isSidenavOpen,
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