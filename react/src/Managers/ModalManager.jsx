import { AgentEditListingDelAmenityModal1 } from "../components/Modals/agent_edit_listing_del_amenity_modal1";
import { AgentListingOptionModal1 } from "../components/Modals/agent_listing_option_modal1";
import { useModal } from "../contexts/ModalContext"

const ModalManager = () => {
    const {modalState, hideModal} = useModal();

    const renderModal = () => {
        switch(modalState.type) {
            case 'AgentListingOptionModal1':
                return <AgentListingOptionModal1 {...modalState.props} onClose={hideModal}/>
                break;
            case 'AgentEditListingDelAmenityModal1':
                return <AgentEditListingDelAmenityModal1 {...modalState.props} onClose={hideModal}/>
                break;
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