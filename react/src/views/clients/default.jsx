import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { SideNavLink1 } from "../../components/navlink1";

export default function ClientDefault() {
    const {user, token} = useStateContext();
    const location = useLocation();
    const navTitles = {
        '/BDDRClient' : 'Properties',
        '/BDDRClient/ViewProperty' : 'View Property',
        '/BDDRClient/Likes' : 'Likes',
        '/BDDRClient/OngoingDeals' : 'Ongoing Deals',
        '/BDDRClient/Agents' : 'Agents'
    };

    if(!token) {
        return <Navigate to="/" />
    }

    const navTitle = navTitles[location.pathname];


    // Toggle Nav Modal
    function toggleNavModal() {
        
    }

    return (
        <div className="w-100 h-100 position-relative">          

            <div className="navbar2">
                {/* <div className="text-l3 fw-bold">
                    {navTitle}
                </div> */}
                <Link to={'/BDDRClient'} className="text-decoration-none color-black2">
                    <div className="d-flex align-items-center gap3">
                        <img src="/src/assets/media/logos/logo1.png" className="navbar-1-logo-pic" alt="" />
                        <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                    </div>
                </Link>
                
                
                <div className={`position-relative d-flex align-items-center ${location.pathname !== '/BDDRClient' ? 'd-none' : ''}`}>
                    <input type="text" name="" id="" className="search-bar-1" placeholder="Search Properties, Locations, Agents, etc." />
                    
                    <div className="search-btn">
                        <Icon.Search/>
                    </div>
                </div>
                

                <div className="navbar2-mini-profile" onClick={toggleNavModal}>
                    <Icon.List className="text-l3 color-black1"/>

                    <div className="navbar-2-pfp">
                        <img src="/src/assets/media/clients/pfp/airich-pfp.jpg" alt="" />
                    </div>

                    {/* <div className="text-m2 d-flex gap3 align-items-center">
                        Airich Jay
                        <Icon.List/>
                    </div> */}
                    {/* <a href="/logout" className="navbar1-link"><Icon.BoxArrowInRight/> Logout</a> */}
                </div>
            </div>

            <div className="nav-modal1">
                <div className="nav-modal1-links d-none">
                    <SideNavLink1 to="/BDDRClient" label="Properties" />
                    <SideNavLink1 to="/BDDRClient/Likes" label="Wishlists" />
                    <SideNavLink1 to="/BDDRClient/OngoingDeals" label="Trippings" />
                    <SideNavLink1 to="/BDDRClient/OngoingDeals" label="Ongoing Deals" />
                    <SideNavLink1 to="/BDDRClient/Agents" label="Agents" />
                    <SideNavLink1 to="/BDDRClient/Agents" label="Profile" />

                    <div className="nav-hr"></div>

                    <SideNavLink1 to="/logout" icon={Icon.Person} activeIcon={Icon.PersonFill} label="Logout" currentPath={location.pathname} />
                </div>
            </div>

            {/* Children Contents */}
            <Outlet/>        
        </div>
    )
};