import { Link, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { fetchPublishedProperties } from "../../../Services/GeneralPropertiesService";
import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/ModalContext";
import { AdminPropertyBox1 } from "../../../components/AdminComponents/admin_property_box1";
import { SkeletonPropertyBox } from "../../../Skeletons/property_skeletons";
import AdminPropertiesDevelopersNavbar from "../../../components/AdminComponents/admin_properties_developers_navbar";
import { fetchAllDevsWithProperties } from "../../../Services/GeneralDeveloperPropertiesService";
import AdminPropertiesDevelopersBox1 from "../../../components/AdminComponents/admin_properties_developers_box1";

export default function AdminPropertyIndex() {
    const {showModal} = useModal();
    const {isSidenavOpen} = useOutletContext();
    const [properties, setProperties] = useState(null);
    const [developers, setDevelopers] = useState(null);

    /**
     * 1 - Developers with Properties
     * 2 - Developers
     */
    const {viewAs, setViewAs} = useOutletContext();



    useEffect(() => {
        const getPublishedProperties = async () => {
            try {
                const data = await fetchPublishedProperties();
                setProperties(data);
            } catch (error) {
                console.error(error);
            }
        };

        const getDevelopersWithProperties = async() => {
            try {
                const data = await fetchAllDevsWithProperties();
                setDevelopers(data);
            } catch (error) {
                console.error(error);
            }
        }
        getDevelopersWithProperties();
        getPublishedProperties();    
    }, []);


    /* 
    | Debugging
    */
    useEffect(() => {
        console.log(developers);
    }, [developers])



    const handleRemovePropertyConfirmation = (listing) => {
        showModal('AgentDelListingConfirmationModal1', {listing, handleRemovePropertyPost});
    }

    const handleListingClick = (property) => {
        showModal('AdminPropertiesOptionModal1', { property, handleRemovePropertyConfirmation});
    };


    
    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {/* Option Bar */}
            <AdminPropertiesDevelopersNavbar viewAs={viewAs} setViewAS={setViewAs}/>

            {/* Listings */}
            <div className={`d-flex ${viewAs === 1 ? "flex-direction-y" : "flex-wrap"} gap1`}>

                {viewAs === 1 && developers && developers.map(developer => (
                    <AdminPropertiesDevelopersBox1 key={developer.id} developer={developer} setDevelopers={setDevelopers}/>
                ))}

                {/* {properties && (
                    properties.map(property => (
                    <AdminPropertyBox1 key={property.id} property={property} handleListingClick={handleListingClick} />
                )))}

                {!properties && Array.from({length:10}, (_, index) => index).map(x =>(
                    <SkeletonPropertyBox key={x}/>
                ))} */}
            </div>
        </div>
    );
}