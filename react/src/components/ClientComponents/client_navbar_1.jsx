import { useEffect, useRef, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { NavLink1 } from "../navlink1";

export const ClientNavbar1 = ({client, onLogout}) => {
    const [navModal1Visible, setNavModal1Visibility] = useState(false);
    const navModalRef = useRef(null);

    const toggleNavModal1Visibility = (event) => {
        event.stopPropagation();
        setNavModal1Visibility(!navModal1Visible);
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
                        {client.pfp
                        ? (<img src={`/src/assets/media/clients/pfp/${client.pfp}`} alt="" />)
                        : (<div className="text-l3 color-white1">{client.firstname[0]}</div>)}
                    </div>
                </div>
            </div>

            {/* Nav Modal where the links are there */}
            <div ref={navModalRef} className={`nav-modal1 ${displayNavModal}`}>
                <div className="nav-modal1-links text-m3">
                    <NavLink1 to="/BDDRClient" label="Properties" onClick={toggleNavModal1Visibility} />
                    <NavLink1 to="/BDDRClient/Wishlists" label="Wishlists" onClick={toggleNavModal1Visibility} />

                    <NavLink1 to="/BDDRClient/Messages" label="Messages" onClick={toggleNavModal1Visibility} />
                    <NavLink1 to="/BDDRClient/Trippings" label="Trippings" onClick={toggleNavModal1Visibility} />
                    <NavLink1 to="/BDDRClient/Transactions" label="Transactions" onClick={toggleNavModal1Visibility} />

                    <div className="nav-hr"></div>

                    <NavLink1 to="/BDDRClient/Agents" label="Agents" onClick={toggleNavModal1Visibility} />
                    <NavLink1 to="/BDDRClient/Profile" label="Profile" onClick={toggleNavModal1Visibility} />

                    <div className="nav-hr"></div>

                    <div className="nav-modal1-link" onClick={onLogout}>Logout</div>
                </div>
            </div>
        </>
    );
}