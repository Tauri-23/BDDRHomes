import { Link } from "react-router-dom"
import * as Icon from 'react-bootstrap-icons';
import { AdminNavLink1 } from "./admin_navlink1";
import { useEffect, useRef, useState } from "react";
import { NavLink1 } from "../navlink1";

export const AdminNavbar1 = ({onLogout}) => {
    const [displayNavModal, setDisplayNavModal] = useState(false);
    const [displayNotifBox, setDisplayNotifBox] = useState(false);

    const navModalRef = useRef(null);
    const notifModalRef = useRef(null);

    const toggleNavModal1Visibility = (event) => {
        event.stopPropagation();
        setDisplayNavModal(!displayNavModal);
        setDisplayNotifBox(false);
    }

    const toggleNotifVisibility =  (event) => {
        event.stopPropagation();
        setDisplayNotifBox(!displayNotifBox);
        setDisplayNavModal(false);
    }

    const handleClickOutside = (event) => {
        if (navModalRef.current && !navModalRef.current.contains(event.target)) {
            setDisplayNavModal(false);
        }

        if (notifModalRef.current && !notifModalRef.current.contains(event.target)) {
            setDisplayNotifBox(false);
        }
    }

    useEffect(() => {
        // Add event listener for clicks on the window
        window.addEventListener('click', handleClickOutside);

        // cleanup event listener on component unmount
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, []);

    return (
        <>
            <div className="navbar3">
                <Link to={'/BDDRAgent'} className="text-decoration-none color-black2">
                        <div className="d-flex align-items-center gap3">
                            <img src="/src/assets/media/logos/logo1.png" className="navbar-1-logo-pic" alt="" />
                            {/* <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div> */}
                        </div>
                </Link>

                {/* Nav Links */}
                <div className="nav3-links">
                    <AdminNavLink1 to="/BDDRAdmin" label="Dashboard" activeLoc={['/home']} />
                    <AdminNavLink1 to="/BDDRAdmin/Agents" label="Agents" activeLoc={['Agents']} />
                    <AdminNavLink1 to="" label="Listings" activeLoc={['Messages']} />

                </div>

                {/* Notif and PFP */}
                <div className="d-flex align-items-center gap2">

                    {/* Notif */}
                    <div 
                    className={`navbar-3-circle ${displayNotifBox ? 'active' : ''}`}
                    onClick={toggleNotifVisibility}
                    >
                        <Icon.Bell className="text-m1"/>
                    </div>

                    {/* PFP */}
                    <div 
                    className="navbar-3-pfp" 
                    onClick={toggleNavModal1Visibility}
                    >
                        {/* If pfp is null use the first letter of fname instead */}
                        <div className="text-l3 color-white1">M</div>
                        {/* <img src="/src/assets/media/clients/pfp/airich-pfp.jpg" alt="" /> */}
                    </div>

                </div>

            </div>

            {/* Nav Modal */}
            <div ref={navModalRef} className={`nav-modal1 ${displayNavModal ? '' : 'd-none'}`}>
                <div className="nav-modal1-links text-m3">
                    <NavLink1 to="/BDDRAdmin" label="Profile" onClick={toggleNavModal1Visibility} />
                    <NavLink1 to="/BDDRAdmin" label="Account" onClick={toggleNavModal1Visibility} />

                    <NavLink1 to="/BDDRAdmin" label="Help Center" onClick={toggleNavModal1Visibility} />

                    <div className="nav-hr"></div>

                    <div className="nav-modal1-link" onClick={onLogout}>Logout</div>
                </div>
            </div>

            <div ref={notifModalRef} className={`nav-notif1 ${displayNotifBox ? '' : 'd-none'}`}>
                <div className="text-m1 fw-bold">Notifications</div>
                <div className="notifications">
                    <div className="center-absolute-xy d-flex flex-direction-y gap2 align-items-center">
                        <Icon.Bell className="text-l2"/>
                        <div className="text-m2">No Notifications yet</div>
                    </div>
                </div>
            </div>
        </>
    )
}