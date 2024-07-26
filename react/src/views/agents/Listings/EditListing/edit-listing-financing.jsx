import { useOutletContext } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import * as Icon from 'react-bootstrap-icons';
import { useState } from "react";
import axiosClient from "../../../../axios-client";
import { notify } from "../../../../assets/js/utils";

export default function AgentEditListingFinancing() {

    // States
    const {showModal} = useModal();
    const {
        id,
        propertyFinancings,
        setPropertyFinancings,
        isSidenavHidden,
        setSideNavHidden,
        setAddFinancing
    } = useOutletContext();
    const [isEditMode, setEditMode] = useState(false);





    // Handlers
    const handleRemoveFinancing = (financingId) => {
        if(propertyFinancings.length < 2) {
            notify('error', 'Financings cannot be less that one.', 3000);
            return;
        }

        const formData = new FormData();
        formData.append('id', financingId);

        axiosClient.post('/remove-published-prop-financing', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('success', data.message, 3000);
                setPropertyFinancings(financings => 
                    financings.filter(financing => financing.id !== financingId)
                );
            }
            else {
                notify('error', data.message, 3000);
            }
        })
    }
    



    // Render 
    return(
        <div className="d-flex w-100 h-100 flex-direction-y padding-bottom-1">
            {/* Upper Part */}
            <div className="d-flex justify-content-between align-items-center mar-bottom-l2">  
                <div className="d-flex gap1 align-items-center">
                    <div className={`circle-btn-1 ${!isSidenavHidden ? 'd-none' : ''}`} onClick={() => {setSideNavHidden(false); setAddFinancing(false)}}>
                        <Icon.ArrowLeft className='text-m1'/>
                    </div>
                    <div className="text-l1 fw-bold">Financings</div>
                </div>                  
                

                <div className={`d-flex gap3 align-items-center ${isSidenavHidden ? 'd-none' : ''}`}>
                    <div className="primary-btn-grey2 color-black" onClick={() => setEditMode(!isEditMode)}>
                        Edit
                    </div>
                    <div className="circle-btn-1" onClick={() => {setSideNavHidden(true); setAddFinancing(true); setEditMode(false);}}>
                        <Icon.PlusLg className='text-m1'/>
                    </div>
                </div>
            </div>

            {/* Financings */}
            <div className={`edit-listing-prop-type-cont-2 w-100 padding-bottom-1 ${isSidenavHidden ? 'mar-start-l1' : ''}`}>
                {propertyFinancings && propertyFinancings.map((financing) => (
                    <div
                    key={financing.id}
                    className="d-flex align-items-center gap1 padding-y-4"
                    >
                        <div 
                            onClick={() => handleRemoveFinancing(financing.id)}
                            className={`secondary-circular-btn-black1 ${isEditMode ? '' : 'd-none'}`}>
                            <Icon.Dash className='text-m1'/>
                        </div>
                        <img src={`/src/assets/media/icons/${financing.financing.icon}`} className={`create-listing-option-box1-icon ${isEditMode ? 'd-none' : ''}`} alt={financing.financing.financing_type} />
                        <div className="text-m1">{financing.financing.financing_type}</div>
                    </div>
                ))}

            </div>

        </div>        
    );
}