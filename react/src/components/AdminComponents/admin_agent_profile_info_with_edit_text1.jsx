import { useRef } from "react";
import { isEmptyOrSpaces } from "../../assets/js/utils";
import * as Icon from 'react-bootstrap-icons';

export const AdminAgentProfileInfoWithEditText1 = ({editType, label, information, informationNew, setInformationNew, isEditInformation, setEditInformation, handleSaveInformation}) => {
    const informationRef = useRef();

    return(
        <div className="d-flex justify-content-between align-items-end">
            <div className="w-50">
                <div className="text-m3">{label}</div>
                <div className={`text-m1 ${isEditInformation ? 'd-none' : ''}`}>{information}</div>
                <input 
                ref={informationRef} 
                onInput={() => setInformationNew(informationRef.current.value)}
                type="text" 
                className={`text-m1 edit-text-1 ${isEditInformation ? '' : 'd-none'} w-100`} 
                value={informationNew || ''}
                />
            </div>
            <div className="d-flex align-items-center gap4">
                <button 
                disabled={isEmptyOrSpaces(String(informationNew)) || informationNew === information} 
                className={`primary-btn-black1 ${isEditInformation ? '' : 'd-none'} ${isEmptyOrSpaces(String(informationNew)) || informationNew === information ? 'disabled' : ''}`}
                onClick={() => {handleSaveInformation(informationNew, editType); setEditInformation(false)}}
                >
                    Save
                </button>
                <button className={`btn1-no-bg-border ${isEditInformation ? '' : 'd-none'}`} onClick={() => {setEditInformation(!isEditInformation); setInformationNew(information)}}>Cancel</button>
                <Icon.Pencil className={`text-l3 cursor-pointer ${isEditInformation ? 'd-none' : ''}`} onClick={() => {setEditInformation(!isEditInformation)}}/>
            </div>                                
        </div>
    )
}