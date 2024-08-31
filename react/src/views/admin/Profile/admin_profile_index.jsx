import { useOutletContext } from "react-router-dom";
import "../../../assets/css/admin_profile.css";
import { useEffect, useState } from "react";
import { fetchAdminInfo } from "../../../Services/AdminService";
import { useStateContext } from "../../../contexts/ContextProvider";
import * as Icon from "react-bootstrap-icons";
import { formatDateTime } from "../../../assets/js/utils";

export default function AdminProfileIndex() {
    const {isSidenavOpen} = useOutletContext();
    const {user} = useStateContext();
    const [adminInfo, setAdmin] = useState(null);

    useEffect(() => {
        const getAdminInfo = async(userId) => {
            try {
                const data = await fetchAdminInfo(userId);
                setAdmin(data);
            } catch(error) {console.error(error)}
        }

        getAdminInfo(user.id);
    }, []);

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {adminInfo 
            ? (
                <>
                    <div className="text-l1 fw-bold mar-bottom-1">Profile</div>

                    <div className="admin_profle_cont">
                        <div className="admin_profile_left_container">
                            <div className="admin_profile_cont1">
                                <div className="admin_profile_pfp">
                                    {adminInfo.pfp
                                    ? (<img src={`/src/assets/media/admins/pfp/${adminInfo.pfp}`}/>)
                                    : (<div className="text-xl1 color-white1">{adminInfo.firstname[0]}</div>)}
                                </div>
                                <div className="d-flex flex-direction-y text-center">
                                    <div className="text-m1">{adminInfo.firstname} {adminInfo.middlename} {adminInfo.lastname}</div>
                                    <div className="text-m2">Super Admin</div>
                                </div>
                            </div>

                            <div className="admin_profile_cont1">
                                <div className="d-flex flex-direction-y gap2">
                                    <div className="d-flex align-items-center gap3">
                                        <Icon.Envelope className="text-m1"/>
                                        <div className="text-m2">{adminInfo.email}</div>
                                    </div>
                                    <div className="d-flex align-items-center gap3">
                                    <Icon.Calendar3 className="text-m1"/>
                                    <div className="text-m2">{formatDateTime(adminInfo.created_at)}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </>
            ) 
            : (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}
        </div>
    );
}