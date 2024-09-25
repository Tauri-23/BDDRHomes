import { Link, Outlet, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from "react";
import { isEmptyOrSpaces, notify } from "../../../../../assets/js/utils";
import axiosClient from "../../../../../axios-client";
import { fetchAllDevelopers } from "../../../../../Services/GeneralDeveloperPropertiesService";
import { calcMonthlyAmort } from "../../../../../Services/CalculationsService";

export default function AdminAddPropertyDefault() {
    const location = useLocation();
    const navigate = useNavigate();
    const {isSidenavOpen, project} = useOutletContext();
    const [nextBtnState, setNextBtnState] = useState(false);
    const [isPosting, setIsPosting] = useState(false);

    // Property Attributes
    // 1st (add_property_type)
    const [selectedTypes, setSelectedTypes] = useState(null);

    // 2nd (add_property_nameloc)
    const [projectModel, setProjectModel] = useState(null);
    const [propertyTurnover, setPropertyTurnover] = useState("RFO");

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

    const [TCP, setTCP] = useState(0);
    const [DPPercent, setDPPercent] = useState(0);
    const [termOfDP, setTermOfDP] = useState(0); //in months

    const [termOfBankFinancing, setTermOfBankFinancing] = useState([]);
    const [termsWithMABank, setTermsWithMABank] = useState();
    const [bankInterestRate, setBankInterestRate] = useState(0);

    //Required income = Monthly Amort / .35


    // Links
    const backLinks = {
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty`]: '/BDDRAdmin/Properties&Developers/ViewProject/${project.id}',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/PropertyType`]: `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty`,
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/NameAndLoc`]: 'PropertyType',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Floorplan`]: 'NameAndLoc',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Step2`]: 'Floorplan',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Amenities`]: 'Step2',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Photos`]: 'Amenities',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Step3`]: 'Photos',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Financing`]: 'Step3',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Price`]: 'Financing',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Finalize`]: 'Price',
    };
    const nextLinks = {
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty`]: 'PropertyType',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/PropertyType`]: `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/NameAndLoc`,
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/NameAndLoc`]: 'Floorplan',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Floorplan`]: 'Step2',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Step2`]: 'Amenities',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Amenities`]: 'Photos',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Photos`]: 'Step3',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Step3`]: 'Financing',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Financing`]: 'Price',
        [`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Price`]: 'Finalize',
    };


    // Activate/Disable Next Btn
    useEffect(() => {
        // Property Type Script
        if(location.pathname === '/BDDRAdmin/Properties&Developers/AddProperty' || location.pathname === '/BDDRAgent/CreateListing/Step2') {
            setNextBtnState(false);
        }

        // 1st (add_property_type)
        if(location.pathname === `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/PropertyType` && selectedTypes === null) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // 2nd (add_property_nameloc)
        if(location.pathname === `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/NameAndLoc` && (isEmptyOrSpaces(projectModel))
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // 3rd (add_property_floorplan)
        if(location.pathname === `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Floorplan`
            && ((isEmptyOrSpaces(lotArea) || lotArea < 1) || (isEmptyOrSpaces(floorArea) || floorArea < 1))
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // 4th (add_property_amenities)
        if(location.pathname === `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Amenities`
            && (selectedPropertyAmenities.length < 1)
        ) {
            setNextBtnState(true);
            return;
        }
        else {
            setNextBtnState(false);
        }

        // Photos Input
        if(location.pathname === `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Photos`
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
        projectModel,

        // 3rd (add_property_floorplan)
        floorArea, lotArea, 

        // 4th (add_property_amenities)
        selectedPropertyAmenities, 

        photos
    ]);


    // Upload the property to DB
    const handlePublishProperty = (event) => {
        const loanable = (TCP * (100 - DPPercent)) / 100;
        const reqIncomeMin = Number(calcMonthlyAmort(loanable, termOfBankFinancing[termOfBankFinancing.length - 1], 0, bankInterestRate) / .35).toFixed(2);
        const reqIncomeMax = Number(calcMonthlyAmort(loanable, termOfBankFinancing[0], 0, bankInterestRate) / .35).toFixed(2);

        const result = termOfBankFinancing.map(term => {
            return {term: term, ma: calcMonthlyAmort(loanable, term, 0, bankInterestRate)};
        });

        // console.log(reqIncomeMin);
        // console.log(reqIncomeMax);
        // console.log(termsWithMABank);
        event.preventDefault();
        setIsPosting(true);
        notify("default", "Publishing Property...", "bottom-left", 3000);

        const formData = new FormData();
        formData.append('projectId', project.id);
        formData.append('model', projectModel);
        formData.append('prov_den', project.province_denormalized);

        formData.append('city_den', project.city_denormalized);
        formData.append('projDev', project.developer.id);
        formData.append('bedroom', bedroom);
        formData.append('bath', bathroom);
        formData.append('carport', carport);
        formData.append('lot_area', lotArea);
        formData.append('floor_area', floorArea);

        formData.append('property_type', selectedTypes.id);
        formData.append('storey', storey);
        formData.append('tcp', TCP);

        formData.append('dp_percent', DPPercent);
        formData.append('dp_term_months', 16);
        formData.append('loanable_percent', 100 - DPPercent);
        formData.append('loan_interest_rate', bankInterestRate);
        formData.append('term_with_ma_bank', JSON.stringify(result));
        formData.append('req_income_min', reqIncomeMin);

        formData.append('req_income_max', reqIncomeMax);
        formData.append('turnover', propertyTurnover);

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
            setIsPosting(false);
            if(data.status === 200) {
                notify('default', data.message, "bottom-left", 3000);
                navigate(`/BDDRAdmin/Properties&Developers/ViewProject/${project.id}`);
            }
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        })
        .catch(error => {
            setIsPosting(false);
            const response = error.response;
            if(response) {
                console.log(response);
            }
        });
    }

    /*
    | Debug
    */
    useEffect(() => {
        console.log(termOfBankFinancing);
    }, [termOfBankFinancing]);

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
                    project,
                    projectModel, setProjectModel,
                    propertyTurnover, setPropertyTurnover,

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
                    TCP,
                    setTCP,
                    DPPercent,
                    setDPPercent,
                    termOfDP,
                    setTermOfDP,
                    termOfBankFinancing, 
                    setTermOfBankFinancing,
                    bankInterestRate, 
                    setBankInterestRate,
                    selectedPropertyFinancing,

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
                    disabled={isPosting} 
                    className={`primary-btn-black1 ${nextBtnState ? 'disabled' : ''} d-flex gap4 align-items-center ${location.pathname === `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Finalize` ? '' : 'd-none'} ${isPosting ? 'disabled' : ''}`}
                    onClick={handlePublishProperty}
                >
                    Publish                      
                    <Icon.ChevronRight/>
                </button>
                
                {/* Next Btn */}
                <Link to={nextLinks[location.pathname]} className={`text-decoration-none color-black1 ${location.pathname === `/BDDRAdmin/Properties&Developers/ViewProject/${project.id}/AddProperty/Finalize` ? 'd-none' : ''}`}>
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