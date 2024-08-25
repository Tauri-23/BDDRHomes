import { useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { AdminSettingsPropAttr } from "../../../components/AdminComponents/admin_settings_components";

export default function AdminSettingsIndex() {
    const {isSidenavOpen} = useOutletContext();

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <div className="text-l1 fw-bold">Settings</div>

            <div className="hr-line1 mar-y-1"></div>

            <div className="d-flex flex-direction-y gap1">
                
                <div className=" mar-bottom-3">
                    <div className="text-l2 fw-bold mar-bottom-3">Property Attributes</div>
                    <div className="text-m2 fst-italic color-black3">This is the attributes available when adding a property.</div>
                </div>                

                <AdminSettingsPropAttr to={'PropertyTypes'} label={'Property Types'}/>

                <AdminSettingsPropAttr to={'Amenities'} label={'Amenities'}/>

                <AdminSettingsPropAttr to={'Financings'} label={'Financings'}/>
            </div>
            
            
            <div className="hr-line1 mar-y-1"></div>
        </div>
    );
}