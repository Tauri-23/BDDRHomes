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
import ClientEditPfpModal1 from "../components/Modals/client_edit_pfp_modal1";
import PropertySellingFilterModal1 from "../components/Modals/property_selling_filter_modal1";
import { AgentGetTransactionConfirmationModal1 } from "../components/Modals/agent_get_transaction_confirmation_modal1";
import { ClientCancelTransactionConfirmationModal1 } from "../components/Modals/client_cancel_transaction_confirmation_modal1";
import ClientViewPropSetEmpTypeModal1 from "../components/Modals/client_view_prop_set_emp_type_modal1";

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
            // Properties
            case 'PropertySellingFilterModal1' :
                return <PropertySellingFilterModal1 {...modalState.props} onClose={hideModal}/>


            // View property
            case 'ClientViewPropSetEmpTypeModal1':
                return <ClientViewPropSetEmpTypeModal1 {...modalState.props} onClose={hideModal}/>


            // Wishlist
            case 'ClientAddToWishlistModal1' :
                return <ClientAddToWishlistModal1 {...modalState.props} onClose={hideModal}/>
            case 'ClientDelWishlistModal1' :
                return <ClientDelWishlistModal1 {...modalState.props} onClose={hideModal}/>


            // Profile
            case 'ClientEditPfpModal1' :
                return <ClientEditPfpModal1 {...modalState.props} onClose={hideModal}/>
            

            // Profile
            case 'ClientCancelTransactionConfirmationModal1' :
                return <ClientCancelTransactionConfirmationModal1 {...modalState.props} onClose={hideModal}/>





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
            |   Agent
            */
            // Transactions
            case 'AgentGetTransactionConfirmationModal1' :
                return <AgentGetTransactionConfirmationModal1 {...modalState.props} onClose={hideModal}/>
            
            




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