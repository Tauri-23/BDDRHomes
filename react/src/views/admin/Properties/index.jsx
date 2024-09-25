import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/ModalContext";
import AdminPropertiesDevelopersNavbar from "../../../components/AdminComponents/admin_properties_developers_navbar";
import { fetchAllDevsWithProjects } from "../../../Services/GeneralDeveloperPropertiesService";
import AdminPropertiesDevelopersBox1 from "../../../components/AdminComponents/admin_properties_developers_box1";

export default function AdminPropertyIndex() {
    const {showModal} = useModal();
    const {isSidenavOpen} = useOutletContext();
    const [developers, setDevelopers] = useState(null);

    /**
     * 1 - Developers with Properties
     * 2 - Developers
     */
    const {viewAs, setViewAs} = useOutletContext();



    useEffect(() => {
        const getDevelopersWithProjects = async() => {
            try {
                const data = await fetchAllDevsWithProjects();
                setDevelopers(data);
            } catch (error) {
                console.error(error);
            }
        }

        getDevelopersWithProjects();
    }, []);


    /* 
    | Debugging
    */
    // useEffect(() => {
    //     console.log(developers);
    // }, [developers]);

    
    
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