import { Link } from "react-router-dom";
import { BDDRAgentNavLink1 } from "./bddr_agent_navlink1";
import * as Icon from "react-bootstrap-icons";
import { NavLink1 } from "../navlink1";
import { useEffect, useRef, useState } from "react";

export const AgentNavbar1 = ({agent, onLogout}) => {
    const [navModal1Visible, setNavModal1Visibility] = useState(false);
    const [notifVisible, setNotifVisibility] = useState(false);
    const navModalRef = useRef(null);
    const notifModalRef = useRef(null);

    const toggleNavModal1Visibility = (event) => {
        event.stopPropagation();
        setNavModal1Visibility(!navModal1Visible);
        setNotifVisibility(false);
    }

    const toggleNotifVisibility = (event) => {
        event.stopPropagation();
        setNotifVisibility(!notifVisible);
        setNavModal1Visibility(false);
    }

    const handleClickOutside = (event) => {
        if (navModalRef.current && !navModalRef.current.contains(event.target)) {
            setNavModal1Visibility(false);
        }

        if (notifModalRef.current && !notifModalRef.current.contains(event.target)) {
            setNotifVisibility(false);
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

    const displayNavModal = navModal1Visible ? '' : 'd-none';
    const displayNotifBox = notifVisible ? '' : 'd-none';
    const notifBtnActive = notifVisible ? 'active' : '';

    return(
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
                    <BDDRAgentNavLink1 to="/BDDRAgent" label="Home" activeLoc={["/home"]} />
                    {/* <BDDRAgentNavLink1 to="/BDDRAgent/Listings" label="Listings" activeLoc={["Listings", "Listings/EditListing"]} /> */}
                    <BDDRAgentNavLink1 to="/BDDRAgent/Messages" label="Messages" activeLoc={["Messages"]} />
                    <BDDRAgentNavLink1 to="/BDDRAgent/Performance" label="Performance" activeLoc={["Performance"]} />

                </div>

                {/* Notif and PFP */}
                <div className="d-flex align-items-center gap2">

                    {/* Notif */}
                    <div className={`navbar-3-circle ${notifBtnActive}`} onClick={toggleNotifVisibility}>
                        <Icon.Bell className="text-m1"/>
                    </div>

                    {/* PFP */}
                    <div className="navbar-3-pfp" onClick={toggleNavModal1Visibility}>
                        {/* If pfp is null use the first letter of fname instead */}
                        {agent.pfp
                        ? (<img src={`/src/assets/media/clients/pfp/${agent.pfp}`} alt="" />)
                        : (<div className="text-l3 color-white1">{agent.firstname[0]}</div>)}
                        
                        
                    </div>

                </div>

            </div>

            {/* Nav Modal */}
            <div ref={navModalRef} className={`nav-modal1 ${displayNavModal}`}>
                <div className="nav-modal1-links text-m3">
                    <NavLink1 to="/BDDRAgent" label="Profile" onClick={toggleNavModal1Visibility} />
                    <NavLink1 to="/BDDRAgent" label="Account" onClick={toggleNavModal1Visibility} />

                    <NavLink1 to="/BDDRAgent" label="Help Center" onClick={toggleNavModal1Visibility} />

                    <div className="nav-hr"></div>

                    <div className="nav-modal1-link" onClick={onLogout}>Logout</div>
                </div>
            </div>

            <div ref={notifModalRef} className={`nav-notif1 ${displayNotifBox}`}>
                <div className="text-m1 fw-bold">Notifications</div>
                <div className="notifications">
                    <div className="center-absolute-xy d-flex flex-direction-y gap2 align-items-center">
                        <Icon.Bell className="text-l2"/>
                        <div className="text-m2">No Notifications yet</div>
                    </div>
                </div>
            </div>

        </>
    );
}