import { Link, useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { fetchPropertyTypes } from "../../../Services/GeneralPropertiesService";
import { SkeletonAdminSettingsPropertyAttributes } from "../../../Skeletons/admin-settings-skeleton";

export default function AdminSettingsPropertyTypes() {
    const {isSidenavOpen} = useOutletContext();
    const [propertyTypes, setPropertyTypes] = useState();
    const [isEditMode, setEditMode] = useState(false);

    useEffect(() => {
        const getPropertyTypes = async() => {
            try {
                const data = await fetchPropertyTypes();
                setPropertyTypes(data);
            } catch(error) {console.log(error)}
        }

        getPropertyTypes();
    }, []);

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <div className="d-flex justify-content-start mar-bottom-1">
                <Link to={'/BDDRAdmin/Settings'} className="d-flex gap3 align-items-center text-m1 color-black1 text-decoration-none cursor-pointer">
                    <Icon.ChevronLeft/>
                    Back
                </Link>                
            </div>

            <div className="d-flex align-items-center justify-content-between mar-bottom-l1">
                <div className="text-l1 fw-bold">Property Types</div>
                <div className="d-flex gap3 align-items-center">
                    <div className="primary-btn-grey2 user-select-none" onClick={() => setEditMode(!isEditMode)}>{isEditMode ? 'Cancel edit' : 'Edit'}</div>
                    <div className="circle-btn-1">
                        <Icon.PlusLg className='text-m1'/>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-direction-y gap1">
                {propertyTypes?.length > 0 && propertyTypes.map(propertyType => (
                    <div key={propertyType.id} className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap3 align-items-center">
                            <img className="icon3" src={`/src/assets/media/icons/${propertyType.icon}`}/>
                            {propertyType.type_name}
                        </div>
                        <div className={`circle-btn-1 ${isEditMode ? '' : 'd-none'}`}><Icon.XLg/></div>
                        
                    </div>
                ))}

                {!propertyTypes && Array.from({length: 10}, (_, index) => index).map(x => (
                    <SkeletonAdminSettingsPropertyAttributes key={x}/>
                ))}
            </div>

        </div>
    );
}