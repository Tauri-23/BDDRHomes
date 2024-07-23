import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchPropertyAmenities } from "../../../../Services/AgentCreateListingService";
import { SkeletonListingOptionBox } from "../../../../Skeletons/agent-listing-skeletons";
import * as Icon from 'react-bootstrap-icons';
import { useModal } from "../../../../contexts/ModalContext";
import axiosClient from "../../../../axios-client";
import { notify } from "../../../../assets/js/utils";

export default function AgentEditListingAmenities() {

    const {showModal} = useModal();
    const {
        propertyAmenities, 
        setPropertyAmenities, 
        setSideNavHidden, 
        isSidenavHidden,
        setAddAmenity,
        id
    } = useOutletContext();
    const [isEditMode, setEditMode] = useState(false);

    const handleEditMode = () => {
        setEditMode(!isEditMode);
    }

    const removeAmenityHandler = (amenityId) => {
        setPropertyAmenities(amenities => 
            amenities.filter(amenity => amenity.id !== amenityId)
        );

        const formData = new FormData();
        formData.append('id', amenityId);

        axiosClient.post('/remove-published-prop-amenity', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('success', data.message, 3000);
            }
            else {
                notify('error', data.message, 3000);
            }
        })
        .catch(error => {
            const response = error.response;
            if(response) {
                console.log(response);
            }
        });
    }

    const handleRemoveAmenity = (amenityId) => {
        const amenity = propertyAmenities.filter(amenity => amenity.id === amenityId)
        showModal('AgentEditListingDelAmenityModal1', {
            amenity, 
            removeAmenityHandler: () => removeAmenityHandler(amenityId)
        });
        
    }

    return(        

        <div className="d-flex w-100 h-100 flex-direction-y padding-bottom-1">
            <div className="d-flex justify-content-between align-items-center mar-bottom-l2">  
                <div className="d-flex gap1 align-items-center">
                    <div className={`circle-btn-1 ${!isSidenavHidden ? 'd-none' : ''}`} onClick={() => {setSideNavHidden(false); setAddAmenity(false)}}>
                        <Icon.ArrowLeft className='text-m1'/>
                    </div>
                    <div className="text-l1 fw-bold">Amenities</div>
                </div>                  
                

                <div className={`d-flex gap3 align-items-center ${isSidenavHidden ? 'd-none' : ''}`}>
                    <div className="primary-btn-grey2 color-black" onClick={handleEditMode}>
                        Edit
                    </div>
                    <div className="circle-btn-1" onClick={() => {setSideNavHidden(true); setAddAmenity(true)}}>
                        <Icon.PlusLg className='text-m1'/>
                    </div>
                </div>
            </div>


            {/* Amenities */}
            <div className={`edit-listing-prop-type-cont2 w-100 padding-bottom-1 ${isSidenavHidden ? 'mar-start-l1' : ''}`}>
                {propertyAmenities && propertyAmenities.map((amenity) => 
                (
                    <div
                    key={amenity.id} 
                    className="d-flex align-items-center gap1 padding-y-4"
                    >
                        <div 
                            onClick={() => handleRemoveAmenity(amenity.id)}
                            className={`secondary-circular-btn-black1 ${isEditMode ? '' : 'd-none'}`}>
                            <Icon.Dash className='text-m1'/>
                        </div>
                        <img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className={`create-listing-option-box1-icon ${isEditMode ? 'd-none' : ''}`} alt={amenity.amenity.type_name} />
                        <div className="text-m1">{amenity.amenity.amenity_name}</div>
                    </div>
                ))}

                {propertyAmenities == null && Array.from({length:8}).map(x =>
                    <SkeletonListingOptionBox key={x}/>
                )}
            </div>                
        </div>
    );
}