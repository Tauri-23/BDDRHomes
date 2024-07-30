import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axiosClient from "../../../../axios-client";
import { notify } from "../../../../assets/js/utils";

export default function AgentEditListingDescription() {
    const {description, setListing, id} = useOutletContext();
    const [_description, _setDescription] = useState(description);
    const [isSaveBtnDisabled, setSaveBtnDisabled] = useState(true);

    const descriptionRef = useRef();





    useEffect(() => {
        if(description !== _description) {
            setSaveBtnDisabled(false);
        }
        else {
            setSaveBtnDisabled(true);
        }
    });





    const handleSaveBtn = () => {
        const formData = new FormData();
        formData.append('id', id);
        formData.append('description', _description);

        axiosClient.post('/update-published-prop-desc', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setListing((propDesc) => {
                    const updatedDescription = {...propDesc};
                    updatedDescription.data[0].description = _description;
                    return updatedDescription;
                });
                notify('success', data.message, 3000);
            }
            else {
                notify('error', data.message, 3000);
            }
        })
        .catch((error) => console.error(error));       
    }
    




    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div 
            ref={descriptionRef} 
            className="edit-listing-text-div text-m1" 
            contentEditable="true" 
            suppressContentEditableWarning={true}
            onInput={() => _setDescription(descriptionRef.current.innerText)}
            >
                {description}
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center">
                <button 
                disabled={isSaveBtnDisabled}
                className={`primary-btn-black1 ${isSaveBtnDisabled ? 'disabled' : ''}`}
                onClick={handleSaveBtn}
                >
                    Save
                </button>
            </div>
        </div>
        
    );
}