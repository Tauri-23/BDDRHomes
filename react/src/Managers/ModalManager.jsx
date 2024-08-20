import { useEffect } from "react";
import { AdminEditPropertyDelAmenityModal1 } from "../components/Modals/admin_edit_property_del_amenity_modal1";
import { AdminEditPropertyDelPhotoModal1 } from "../components/Modals/admin_edit_property_del_photo_modal1";
import { ViewPropertyShowAllPhotosModal2 } from "../components/Modals/view_property_show_all_photos_modal2";
import { useModal } from "../contexts/ModalContext"
import { ClientAddToWishlistModal1 } from "../components/Modals/client_add_to_wishlist_modal1";
import { ClientDelWishlistModal1 } from "../components/Modals/client_del_wishlist_modal1";
import { AgentDelListingConfirmationModal1 } from "../components/Modals/agent_del_listing_confirmation_modal1";
import { AdminDelAgentConfirmation } from "../components/Modals/admin_del_agent_confirmation";
import { AdminPropertiesOptionModal1 } from "../components/Modals/admin_properties_option_modal1";
import AdminEditPropertyAddPhotoModal1 from "../components/Modals/admin_edit_property_add_photos_modal1";

const ModalManager = () => {
    const {modalState, hideModal} = useModal();

    const renderModal = () => {
        switch(modalState.type) {
            /*
            |   AGENT
            */
            // Listings
            case 'AgentDelListingConfirmationModal1':
                return <AgentDelListingConfirmationModal1 {...modalState.props} onClose={hideModal}/>
            
            // Edit Listing
            case 'ViewPropertyShowAllPhotosModal2' :
                return <ViewPropertyShowAllPhotosModal2 {...modalState.props} onClose={hideModal}/>





            /*
            |   CLIENT
            */
            // Wishlist
            case 'ClientAddToWishlistModal1' :
                return <ClientAddToWishlistModal1 {...modalState.props} onClose={hideModal}/>
            case 'ClientDelWishlistModal1' :
                return <ClientDelWishlistModal1 {...modalState.props} onClose={hideModal}/>





            /*
            |   ADMIN
            */
            // Agents
            case 'AdminDelAgentConfirmationModal1' :
                return <AdminDelAgentConfirmation {...modalState.props} onClose={hideModal}/>
            
            // Properties
            case 'AdminPropertiesOptionModal1':
                return <AdminPropertiesOptionModal1 {...modalState.props} onClose={hideModal}/>
                
            // Edit Property
            case 'AdminEditPropertyAddPhotoModal1' :
                return <AdminEditPropertyAddPhotoModal1 {...modalState.props} onClose={hideModal}/>
            case 'AdminEditPropertyDelPhotoModal1':
                return <AdminEditPropertyDelPhotoModal1 {...modalState.props} onClose={hideModal}/>
            case 'AdminEditPropertyDelAmenityModal1':
                return <AdminEditPropertyDelAmenityModal1 {...modalState.props} onClose={hideModal}/>    
            



                
            /*
            |   DEFAULT
            */
            default:
                return null;
        }
    };

    return(
        <>
            {renderModal()}
        </>
    )
}

export default ModalManager