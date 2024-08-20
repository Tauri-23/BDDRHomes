import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { array } from "prop-types";
import { SkeletonListingOptionBox } from "../../../../Skeletons/agent-listing-skeletons";
import axiosClient from "../../../../axios-client";
import { notify } from "../../../../assets/js/utils";
import { fetchPropertyTypes } from "../../../../Services/GeneralPropertiesService";

export default function AdminEditPropertyType() {
    const {type, setListing, id} = useOutletContext();

    const [propertyTypes, setPropertyTypes] = useState(null);
    const [selectedType, setSelectedType] = useState({id: type, name: ''});





    useEffect(() => {
        const getPropertyTypes = async() => {
            try {
                const data = await fetchPropertyTypes();
                setPropertyTypes(data);
            } catch (error) {
                console.error('Failed to fetch property types:', error);
            }
        };

        getPropertyTypes();
    }, []);





    /**
     * 
     * @param {number} propertyTypeId 
     * @param {string} propertyTypeName 
     */
    const handleSaveBtn = (propertyTypeId, propertyTypeName) => {       

        const formData = new FormData();
        formData.append('propertyId', id);
        formData.append('propertyType', propertyTypeId);

        axiosClient.post('/general-update-published-property-type', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('success', data.message, 'top-center', 3000);

                setListing((propType) => {
                    const updatedPropType = {...propType};
                    updatedPropType[0].property_type.id = propertyTypeId;
                    updatedPropType[0].property_type.type_name = propertyTypeName;
                    return updatedPropType;
                });
            }
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        });
    }



    

    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div>
                <div className="text-l1 mar-bottom-l2 fw-bold">Property Type</div>
                <div className="edit-listing-prop-type-cont">
                    {propertyTypes && propertyTypes.map((propType) => (
                        <div 
                        key={propType.id} 
                        onClick={() => setSelectedType({ id: propType.id, name: propType.type_name })}
                        className={`create-listing-option-box1 ${selectedType.id === propType.id ? 'active' : ''}`}                                
                        >
                            <img src={`/src/assets/media/icons/${propType.icon}`} className="create-listing-option-box1-icon" alt={propType.type_name} />
                            <div className="text-m1">{propType.type_name}</div>
                        </div>
                    ))}
                    {propertyTypes == null && Array.from({length:8}, (_, index) => index).map(x =>
                        <SkeletonListingOptionBox key={x}/>
                    )}
                </div>
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center" onClick={() => handleSaveBtn(selectedType.id, selectedType.name)}>
                <button disabled={type === selectedType.id} className={`primary-btn-black1 ${type === selectedType.id ? 'disabled' : ''}`}>Save</button>
            </div>
        </div>
        
    );
}