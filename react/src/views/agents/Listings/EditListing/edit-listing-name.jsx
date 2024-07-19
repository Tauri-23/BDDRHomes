import { useOutletContext } from "react-router-dom";

export default function AgentEditListingName() {
    const {name, id} = useOutletContext();
    
    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div className="edit-listing-text-div text-xl2" contentEditable="true">
                {name}
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center">
                <button disabled className="primary-btn-black1 disabled">Save</button>
            </div>
        </div>
        
    );
}