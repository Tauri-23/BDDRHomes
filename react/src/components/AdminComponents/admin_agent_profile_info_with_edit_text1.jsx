import { useEffect, useRef, useState } from "react";
import { formatPhoneNumber, isEmptyOrSpaces } from "../../assets/js/utils";
import * as Icon from 'react-bootstrap-icons';

export const AdminAgentProfileInfoWithEditText1 = ({editType, label, information, informationNew, setInformationNew, isEditInformation, setEditInformation, teamsDb, handleSaveInformation}) => {
    const informationRef = useRef();
    const [isSaveBtnDisabled, setSaveBtnDisabled] = useState(true);

    const handleInputChange = (event) => {
        switch(editType) {
            case "phone" :
                const formattedPhoneNumber = formatPhoneNumber(event.target.value);
                event.target.value = formattedPhoneNumber;             
                setSaveBtnDisabled(isEmptyOrSpaces(String(informationRef.current.value)) || informationRef.current.value === information ||  (editType === 'phone' && event.target.value.length < 10))
                
                setInformationNew(informationRef.current.value);
                break;
            case "team":
                setSaveBtnDisabled(isEmptyOrSpaces(String(informationRef.current.value)) || String(informationRef.current.value) === String(information?.id));
                setInformationNew(teamsDb.filter(team => String(team.id) === String(informationRef.current.value))[0]);
                break;
            default:
                setSaveBtnDisabled(isEmptyOrSpaces(String(informationRef.current.value)) || informationRef.current.value === information);
                setInformationNew(informationRef.current.value);
                break;
        }
        
    };


    if(teamsDb) {
        return(
            <div className="d-flex justify-content-between align-items-end">
                {editType !== 'team' && (
                    <div className="w-50">
                        <div className="text-m3">{label}</div>
                        <div className={`text-m1 ${isEditInformation ? 'd-none' : ''}`}>{information}</div>
                        <input 
                        ref={informationRef} 
                        onInput={handleInputChange}
                        type="text" 
                        className={`text-m1 edit-text-1 ${isEditInformation ? '' : 'd-none'} w-100`} 
                        value={informationNew || ''}
                        maxLength={editType === 'phone' ? 10 : 50}
                        />
                    </div>
                )}
    
                {/* dropdowns */}
                {editType === 'team' && (
                    <div className="w-50">
                        <div className="text-m3">{label}</div>
                        <div className={`text-m1 ${isEditInformation ? 'd-none' : ''}`}>{information?.name || 'Not in a team'}</div>
    
                        <select 
                        ref={informationRef} 
                        className={`text-m1 edit-text-1 ${isEditInformation ? '' : 'd-none'} w-100`} 
                        onChange={handleInputChange} 
                        defaultValue={information?.id || ''}
                        >
                        <option value=''>---Select a team---</option>
                            {teamsDb?.map(teamDb => (
                                <option key={teamDb.id} value={teamDb.id}>{teamDb.name}</option>
                            ))}
                        </select>
                    </div>
                )}
    
    
                <div className="d-flex align-items-center gap4">
                    <button 
                    disabled={isSaveBtnDisabled} 
                    className={`primary-btn-black1 ${isEditInformation ? '' : 'd-none'} ${isSaveBtnDisabled ? 'disabled' : ''}`}
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
    
}