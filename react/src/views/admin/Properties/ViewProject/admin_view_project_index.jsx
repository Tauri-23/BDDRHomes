import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { fetchAllProjectsFull, fetchProjectInfoFullById } from "../../../../Services/ProjectsService";
import * as Icon from "react-bootstrap-icons";
import AdminViewProjectNavbar from "../../../../components/AdminComponents/admin_view_project_navbar";
import { AdminPropertyBox1 } from "../../../../components/AdminComponents/admin_property_box1";
import { fetchPublishedProperties } from "../../../../Services/GeneralPropertiesService";
import { useModal } from "../../../../contexts/ModalContext";

export default function AdminViewProjectIndex() {
    const {showModal} = useModal();
    const {isSidenavOpen, project} = useOutletContext();
    const [properties, setProperties] = useState(null);

    useEffect(() => {
        const getAllPropertiesFull = async() => {
            try {
                const data = await fetchPublishedProperties();
                setProperties(data);
            } catch(error) {console.error(error)}
        }

        getAllPropertiesFull();
    }, []);

    /* 
    | Debugging 
    */
    useEffect(() => {
        console.log(properties)
    }, [properties]);

    const handleRemovePropertyConfirmation = (listing) => {
        showModal('AgentDelListingConfirmationModal1', {listing, handleRemovePropertyPost});
    }

    const handleListingClick = (property) => {
        showModal('AdminPropertiesOptionModal1', { property, handleRemovePropertyConfirmation});
    };

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {project && (
                <>
                    <AdminViewProjectNavbar title={project.project_name}/>

                    <div className="w-100 d-flex flex-wrap gap1">
                        {properties?.length > 0 && properties.map(property => (
                            <AdminPropertyBox1 key={property.id} property={property} handleListingClick={handleListingClick}/>
                        ))}
                        
                    </div>
                </>
            )}
            {!project && (<div className="text-l3 center-absolute-xy">Loading...</div>)}
        </div>
    );
}