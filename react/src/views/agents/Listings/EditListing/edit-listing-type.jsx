import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchPropertyTypes } from "../../../../Services/AgentCreateListingService";
import { array } from "prop-types";
import { SkeletonListingOptionBox } from "../../../../Skeletons/agent-listing-skeletons";

export default function AgentEditListingType() {
    const {type, id} = useOutletContext();

    const [propertyTypes, setPropertyTypes] = useState(null);
    const [selectedType, setSelectedType] = useState(type);

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

    const handleSelectedType = (typeId) => {
        setSelectedType(typeId);
    }


    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div>
                <div className="text-l1 mar-bottom-l2">Property Type</div>
                <div className="edit-listing-prop-type-cont">
                    {propertyTypes && propertyTypes.map((propType) => (
                        <div 
                        key={propType.id} 
                        onClick={() => handleSelectedType(propType.id)}
                        className={`create-listing-option-box1 ${selectedType === propType.id ? 'active' : ''}`}                                
                        >
                            <img src={`/src/assets/media/icons/${propType.icon}`} className="create-listing-option-box1-icon" alt={propType.type_name} />
                            <div className="text-m1">{propType.type_name}</div>
                        </div>
                    ))}
                    {propertyTypes == null && Array.from({length:8}).map(x =>
                        <SkeletonListingOptionBox key={x}/>
                    )}
                </div>
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center">
                <button disabled={type === selectedType} className={`primary-btn-black1 ${type === selectedType ? 'disabled' : ''}`}>Save</button>
            </div>
        </div>
        
    );
}