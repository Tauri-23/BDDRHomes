import { useEffect } from "react";
import AgentEditListingAddPhotoModal1 from "../components/Modals/agent_edit_listing_add_photos_modal1";
import { AgentEditListingDelAmenityModal1 } from "../components/Modals/agent_edit_listing_del_amenity_modal1";
import { AgentEditListingDelPhotoModal1 } from "../components/Modals/agent_edit_listing_del_photo_modal1";
import { AgentListingOptionModal1 } from "../components/Modals/agent_listing_option_modal1";
import { ViewPropertyShowAllPhotosModal2 } from "../components/Modals/view_property_show_all_photos_modal2";
import { useModal } from "../contexts/ModalContext"
import { ClientAddToWishlistModal1 } from "../components/Modals/client_add_to_wishlist_modal1";
import { ClientDelWishlistModal1 } from "../components/Modals/client_del_wishlist_modal1";
import { AgentDelListingConfirmationModal1 } from "../components/Modals/agent_del_listing_confirmation_modal1";
import { AdminDelAgentConfirmation } from "../components/Modals/admin_del_agent_confirmation";

const ModalManager = () => {
    const {modalState, hideModal} = useModal();

    const renderModal = () => {
        switch(modalState.type) {
            /*
            |   AGENT
            */
            // Listings
            case 'AgentListingOptionModal1':
                return <AgentListingOptionModal1 {...modalState.props} onClose={hideModal}/>
            case 'AgentDelListingConfirmationModal1':
                return <AgentDelListingConfirmationModal1 {...modalState.props} onClose={hideModal}/>
            
            // Edit Listing
            case 'AgentEditListingDelAmenityModal1':
                return <AgentEditListingDelAmenityModal1 {...modalState.props} onClose={hideModal}/>
            case 'AgentEditListisngDelPhotoModal1':
                return <AgentEditListingDelPhotoModal1 {...modalState.props} onClose={hideModal}/>
            case 'AgentEditListingAddPhotoModal1' :
                return <AgentEditListingAddPhotoModal1 {...modalState.props} onClose={hideModal}/>
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
            |   CLIENT
            */
            // Agents
            case 'AdminDelAgentConfirmationModal1' :
                return <AdminDelAgentConfirmation {...modalState.props} onClose={hideModal}/>
            



                
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