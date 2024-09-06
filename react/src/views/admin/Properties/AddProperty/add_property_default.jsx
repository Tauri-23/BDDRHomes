import { Link, Outlet, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { isEmptyOrSpaces } from "../../../../assets/js/utils";
import axiosClient from "../../../../axios-client";

export default function AdminAddPropertyDefault() {
    const location = useLocation();
    const navigate = useNavigate();
    const {isSidenavOpen} = useOutletContext();
    const [nextBtnState, setNextBtnState] = useState(false);

    // Property Attributes
    // 1st (add_property_type)
    const [selectedTypes, setSelectedTypes] = useState(null);

    // 2nd (add_property_nameloc)
    const [projectName, setProjectName] = useState(null);
    const [projectModel, setProjectModel] = useState(null);
    const [propertyProvince, setPropertyProvince] = useState(null);
    const [propertyCity, setPropertyCity] = useState(null);

    // 3rd (add_property_floorplan)
    const [bedroom, setBedroom] = useState(1);
    const [bathroom, setBathroom] = useState(1);
    const [carport, setCarport] = useState(0);
    const [storey, setStorey] = useState(1);
    const [lotArea, setLotArea] = useState(null);
    const [floorArea, setFloorArea] = useState(null);

    // 4th (add_property_amenities)
    const [selectedPropertyAmenities, setSelectedPropertyAmenities] = useState([]);

    // 
    const [photos, setPhotos] = useState([]);

    // 
    const [selectedPropertyFinancing, setSelectedPropertyFinancing] = useState([]);
    const [monthlyAmortization, setMonthlyAmortization] = useState(0);
    const [requiredIncome, setRequiredIncome] = useState(0);


    // Links
    const backLinks = {
        '/BDDRAdmin/Properties&Developers/AddProperty': '/BDDRAdmin/Properties&Developers',
        '/BDDRAdmin/Properties&Developers/AddProperty/PropertyType': '/BDDRAdmin/Properties&Developers/AddProperty',
        '/BDDRAdmin/Properties&Developers/AddProperty/NameAndLoc': 'PropertyType',
        '/BDDRAdmin/Properties&Developers/AddProperty/Floorplan': 'NameAndLoc',
        '/BDDRAdmin/Properties&Developers/AddProperty/Step2': 'Floorplan',
        '/BDDRAdmin/Properties&Developers/AddProperty/Amenities': 'Step2',
        '/BDDRAdmin/Properties&Developers/AddProperty/Photos': 'Amenities',
        '/BDDRAdmin/Properties&Developers/AddProperty/Step3': 'Photos',
        '/BDDRAdmin/Properties&Developers/AddProperty/Financing': 'Step3',
        '/BDDRAdmin/Properties&Developers/AddProperty/Price': 'Financing',
        '/BDDRAdmin/Properties&Developers/AddProperty/Finalize': 'Price',
    };
    const nextLinks = {
        '/BDDRAdmin/Properties&Developers/AddProperty': 'PropertyType',
        '/BDDRAdmin/Properties&Developers/AddProperty/PropertyType': '/BDDRAdmin/Properties&Developers/AddProperty/NameAndLoc',
        '/BDDRAdmin/Properties&Developers/AddProperty/NameAndLoc': 'Floorplan',
        '/BDDRAdmin/Properties&Developers/AddProperty/Floorplan': 'Step2',
        '/BDDRAdmin/Properties&Developers/AddProperty/Step2': 'Amenities',
        '/BDDRAdmin/Properties&Developers/AddProperty/Amenities': 'Photos',
        '/BDDRAdmin/Properties&Developers/AddProperty/Photos': 'Step3',
        '/BDDRAdmin/Properties&Developers/AddProperty/Step3': 'Financing',
        '/BDDRAdmin/Properties&Developers/AddProperty/Financing': 'Price',
        '/BDDRAdmin/Properties&Developers/AddProperty/Price': 'Finalize',
    };


    useEffect(() => {
        // Property Type Script
        if(location.pathname === '/BDDRAdmin/Properties/AddProperty' || location.pathname === '/BDDRAgent/CreateListing/Step2') {
            setNextBtnState(false);
        }

        // 1st (add_property_type)
        if(location.pathname === '/BDDRAdmin/Properties/AddProperty/PropertyType' && selectedTypes === null) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // 2nd (add_property_nameloc)
        if(location.pathname === '/BDDRAdmin/Properties/AddProperty/NameAndLoc'
            && (isEmptyOrSpaces(projectName) || isEmptyOrSpaces(propertyProvince) || isEmptyOrSpaces(propertyCity))
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // 3rd (add_property_floorplan)
        if(location.pathname === '/BDDRAdmin/Properties/AddProperty/Floorplan'
            && ((isEmptyOrSpaces(lotArea) || lotArea < 1) || (isEmptyOrSpaces(floorArea) || floorArea < 1))
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // 4th (add_property_amenities)
        if(location.pathname === '/BDDRAdmin/Properties/AddProperty/Amenities'
            && (selectedPropertyAmenities.length < 1)
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // Photos Input
        if(location.pathname === '/BDDRAdmin/Properties/AddProperty/Photos'
            && (photos.length < 1 || photos.length < 5)
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }
        
    }, [
        location.pathname, 

        // 1st (add_property_type)
        selectedTypes, 

        // 2nd (add_property_nameloc)
        projectName, propertyProvince, propertyCity,

        // 3rd (add_property_floorplan)
        floorArea, lotArea, 

        // 4th (add_property_amenities)
        selectedPropertyAmenities, 

        photos
    ]);


    // TODO::update it
    const handlePublishProperty = (event) => {
        //event.preventDefault();
        const formData = new FormData();
        formData.append('property_type', selectedTypes.id);
        formData.append('property_name', projectName);
        formData.append('property_address', propertyProvince);
        formData.append('bedroom', bedroom);
        formData.append('bathroom', bathroom);
        formData.append('carport', carport);
        formData.append('lot_area', lotArea);
        formData.append('floor_area', floorArea);
        formData.append('required_income', requiredIncome);
        formData.append('price', monthlyAmortization);

        selectedPropertyAmenities.forEach((amenity, index) => {
            formData.append(`property_amenities[${index}]`, amenity.id);
        });

        selectedPropertyFinancing.forEach((financing, index) => {
            formData.append(`property_financing[${index}]`, financing.id);
        });

        photos.forEach((photo, index) => {
            formData.append(`photo[${index}]`, photo);
        });

        axiosClient.post('/general-publish-property-post', formData)
        .then(({data}) => {
            if(data.status === 200) {
                navigate()
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
                <Link to={'/BDDRAdmin/Properties&Developers'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                    <Icon.ChevronLeft/>
                    Back
                </Link>  
            </div>
            <Outlet context={
                {
                    isSidenavOpen,
                    // 1st (add_property_type)
                    selectedTypes, setSelectedTypes,

                    // 2nd (add_property_nameloc)
                    projectName, setProjectName,
                    projectModel, setProjectModel,
                    propertyProvince, setPropertyProvince,
                    propertyCity, setPropertyCity,

                    // 3rd (add_property_floorplan)
                    bedroom, setBedroom,
                    bathroom, setBathroom,
                    carport, setCarport,
                    storey, setStorey,
                    lotArea, setLotArea,
                    floorArea, setFloorArea,

                    // 4th (add_property_amenities)
                    selectedPropertyAmenities, 
                    setSelectedPropertyAmenities,

                    // 5th
                    photos, 
                    setPhotos,

                    // 6th
                    selectedPropertyFinancing, 
                    setSelectedPropertyFinancing,
                    
                    // 7th (add_property_price_req_income)
                    monthlyAmortization,
                    setMonthlyAmortization,
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
                    className={`primary-btn-black1 ${nextBtnState ? 'disabled' : ''} d-flex gap4 align-items-center ${location.pathname === "/BDDRAdmin/Properties/AddProperty/Finalize" ? '' : 'd-none'}`}
                    onClick={handlePublishProperty}
                >
                    Publish                      
                    <Icon.ChevronRight/>
                </button>
                
                {/* Next Btn */}
                <Link to={nextLinks[location.pathname]} className={`text-decoration-none color-black1 ${location.pathname === "/BDDRAdmin/Properties/AddProperty/Finalize" ? 'd-none' : ''}`}>
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