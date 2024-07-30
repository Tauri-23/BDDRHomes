import AgentEditListingAddPhotoModal1 from "../components/Modals/agent_edit_listing_add_photos_modal1";
import { AgentEditListingDelAmenityModal1 } from "../components/Modals/agent_edit_listing_del_amenity_modal1";
import { AgentEditListingDelPhotoModal1 } from "../components/Modals/agent_edit_listing_del_photo_modal1";
import { AgentListingOptionModal1 } from "../components/Modals/agent_listing_option_modal1";
import { useModal } from "../contexts/ModalContext"

const ModalManager = () => {
    const {modalState, hideModal} = useModal();

    const renderModal = () => {
        switch(modalState.type) {
            case 'AgentListingOptionModal1':
                return <AgentListingOptionModal1 {...modalState.props} onClose={hideModal}/>
            case 'AgentEditListingDelAmenityModal1':
                return <AgentEditListingDelAmenityModal1 {...modalState.props} onClose={hideModal}/>
            case 'AgentEditListisngDelPhotoModal1':
                return <AgentEditListingDelPhotoModal1 {...modalState.props} onClose={hideModal}/>
            case 'AgentEditListingAddPhotoModal1' :
                return <AgentEditListingAddPhotoModal1 {...modalState.props} onClose={hideModal}/>
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