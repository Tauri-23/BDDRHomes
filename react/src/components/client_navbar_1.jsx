import { useEffect, useRef, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { SideNavLink1 } from "./navlink1";

export const ClientNavbar1 = () => {
    const [navModal1Visible, setNavModal1Visibility] = useState(false);
    const navModalRef = useRef(null);

    const toggleNavModal1Visibility = (event) => {
        event.stopPropagation();
        setNavModal1Visibility(!navModal1Visible);
        console.log(navModal1Visible);
    }

    const handleClickOutside = (event) => {
        if (navModalRef.current && !navModalRef.current.contains(event.target)) {
            setNavModal1Visibility(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks on the window
        window.addEventListener('click', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const displayNavModal = navModal1Visible ? '' : 'd-none';

    return (
        <>
            <div className="navbar2">
                {/* Navbar Logo */}
                <Link to={'/BDDRClient'} className="text-decoration-none color-black2">
                    <div className="d-flex align-items-center gap3">
                        <img src="/src/assets/media/logos/logo1.png" className="navbar-1-logo-pic" alt="" />
                        <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                    </div>
                </Link>
                
                {/* Searchbar Only for Properties Page */}
                <div className={`position-relative d-flex align-items-center ${location.pathname !== '/BDDRClient' ? 'd-none' : ''}`}>
                    <input type="text" name="" id="" className="search-bar-1" placeholder="Search Properties, Locations, Agents, etc." />
                    
                    <div className="search-btn">
                        <Icon.Search/>
                    </div>
                </div>
                
                {/* Mini PFP and Burger */}
                <div className="navbar2-mini-profile" onClick={toggleNavModal1Visibility}>
                    <Icon.List className="text-l3 color-black1"/>

                    <div className="navbar-2-pfp">
                        <img src="/src/assets/media/clients/pfp/airich-pfp.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* Nav Modal where the links are there */}
            <div ref={navModalRef} className={`nav-modal1 ${displayNavModal}`}>
                <div className="nav-modal1-links text-m3">
                    <SideNavLink1 to="/BDDRClient" label="Properties" onClick={toggleNavModal1Visibility} />
                    <SideNavLink1 to="/BDDRClient/Likes" label="Wishlists" onClick={toggleNavModal1Visibility} />

                    <div className="nav-hr"></div>

                    <SideNavLink1 to="/BDDRClient/Messages" label="Messages" onClick={toggleNavModal1Visibility} />
                    <SideNavLink1 to="/BDDRClient/OngoingDeals" label="Trippings" onClick={toggleNavModal1Visibility} />
                    <SideNavLink1 to="/BDDRClient/OngoingDeals" label="Ongoing Deals" onClick={toggleNavModal1Visibility} />

                    <div className="nav-hr"></div>

                    <SideNavLink1 to="/BDDRClient/Agents" label="Agents" onClick={toggleNavModal1Visibility} />
                    <SideNavLink1 to="/BDDRClient/Agents" label="Profile" onClick={toggleNavModal1Visibility} />

                    <div className="nav-hr"></div>

                    <SideNavLink1 to="/logout" icon={Icon.Person} activeIcon={Icon.PersonFill} label="Logout" currentPath={location.pathname} />
                </div>
            </div>
        </>
    );
}