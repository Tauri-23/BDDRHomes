import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { isEmptyOrSpaces, notify } from "../../../../assets/js/utils";
import axiosClient from "../../../../axios-client";

export default function AgentEditListingName() {
    const {name, setListing, id} = useOutletContext();
    const [_name, _setName] = useState(name);
    const [isSaveBtnDisabled, setSaveBtnDisabled] = useState(true);

    const nameRef = useRef();



    useEffect(() => {
        if(name !== _name && !isEmptyOrSpaces(_name)) {
            setSaveBtnDisabled(false);
        }
        else {
            setSaveBtnDisabled(true);
        }
    });



    const handleSaveBtn = () => {

        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', _name);

        axiosClient.post('/update-published-prop-name', formData)
        .then(({data}) => {
            if(data.status === 200){
                notify('success', data.message, 3000);
                setListing((propName) => {
                    const updatePropName = {...propName};
                    updatePropName.data[0].name = _name;
                    return updatePropName;
                });
            }
            else {
                notify('error', data.message, 3000);
            }
        })
        .catch((error) => {
            console.error(error);
        });
        
    }
    
    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div ref={nameRef} className="edit-listing-text-div text-xl2" contentEditable="true" onInput={() => _setName(nameRef.current.innerText)} suppressContentEditableWarning={true}>
                {name}
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center">
                <button 
                disabled={isSaveBtnDisabled} 
                className={`primary-btn-black1 ${isSaveBtnDisabled ? 'disabled' : ''}`}
                onClick={() =>handleSaveBtn()}
                >
                    Save
                </button>
            </div>
        </div>
        
    );
}