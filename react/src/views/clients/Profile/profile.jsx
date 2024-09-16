import { useEffect, useState } from 'react';
import { formatDate, formatToPhilPeso } from '../../../assets/js/utils';
import { useStateContext } from '../../../contexts/ContextProvider';
import '/src/assets/css/client_profile.css';
import * as Icon from "react-bootstrap-icons";
import { fetchAllClientPreferedLoc } from '../../../Services/ClientPreferedLocService';
import { Link } from 'react-router-dom';

export default function ClientProfile() {
    const {user} = useStateContext();
    const [preferedLoc, setPreferedLoc] = useState(null);

    useEffect(() => {
        console.log(user);
        const getPreferedLoc = async() => {
            try {
                const data = await fetchAllClientPreferedLoc(user.id);
                setPreferedLoc(data);
            } catch(error) {console.error(error)}
        }

        getPreferedLoc();
    }, []);

    return (
        <div className="content3">
            <div className="client-profile-outer-cont">
                {/* Left Side */}
                <div className="client-profile-left-container">

                    {/* left side box 1 */}
                    <div className="client-profile-left-box1">
                        <div className="client-profile-pfp">
                            {user.pfp
                            ? (<img src={`/src/assets/media/clients/pfp/${user.pfp}`} alt="" />)
                            : (<div>{user.firstname[0]}</div>)}
                        </div>
                        <div className="d-flex flex-direction-y align-items-center">
                            <div className="text-l3">{user.firstname} {user.lastname}</div>
                            <div className="text-m3">@{user.username}</div>
                        </div>
                    </div>

                    {/* left side box 2 */}
                    <div className="client-profile-left-box2">
                        <div className="d-flex gap3 align-items-center w-100"><Icon.Cake/> {formatDate(user.bdate)}</div>
                        <div className="d-flex gap3 align-items-center w-100"><Icon.Mailbox/> {user.email}</div>
                        <div className="d-flex gap3 align-items-center w-100"><Icon.Phone/> {user.phone}</div>
                    </div>
                    
                </div>

                {/* Right side */}
                <div className="client-profile-right-container">
                    <div className="text-l1 fw-bold">About {user.firstname}</div>
                    <Link to={'/BDDRClient/EditProfile'} className="secondary-btn-black1 align-self-start mar-bottom-1 color-black1">Edit Profile</Link>

                    
                    <div className="d-flex flex-direction-y gap4 mar-bottom-2">
                        <div className="text-l3 fw-bold">Monthly Income</div>
                        <div className="text-m1">{user.monthly_income ? formatToPhilPeso(user.monthly_income) : "Not set"}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4 mar-bottom-2">
                        <div className="text-l3 fw-bold">Work</div>
                        <div className="text-m1">{user.work || "Not set"}</div>
                    </div>
                    
                    <div className="text-l3 fw-bold mar-bottom-3">Prefered Location</div>
                    <div className="client-profile-prefered-loc-cont">
                        {preferedLoc && preferedLoc.length > 0 && preferedLoc.map(prefLoc => (
                            <div key={prefLoc.id} className="prefered-loc-chip">{prefLoc.province.province}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};