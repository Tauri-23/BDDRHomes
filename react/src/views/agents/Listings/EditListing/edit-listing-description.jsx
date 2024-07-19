import { useOutletContext } from "react-router-dom";

export default function AgentEditListingDescription() {
    const {description, id} = useOutletContext();
    
    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div className="edit-listing-text-div text-m1" contentEditable="true">
                {description}
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center">
                <button disabled className="primary-btn-black1 disabled">Save</button>
            </div>
        </div>
        
    );
}