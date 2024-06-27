import { Navigate, Outlet, useLocation } from "react-router-dom";
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

    return (
        <div className="w-100 h-100">
            <div className="navbar2">
                <div className="text-l3 fw-bold">
                    {navTitle}
                </div>
                
                <div className={`position-relative d-flex align-items-center ${location.pathname !== '/BDDRClient' ? 'd-none' : ''}`}>
                    <Icon.Search className="position-absolute right2"/>
                    <input type="text" name="" id="" className="search-bar-1" placeholder="Search Properties, Locations, Agents, etc." />
                </div>
                

                <div className="navbar2-mini-profile">
                    <div className="navbar-2-pfp">
                        <img src="/src/assets/media/clients/pfp/airich-pfp.jpg" alt="" />
                    </div>

                    <div className="text-m2 d-flex gap3 align-items-center">
                        Airich Jay
                        <Icon.ChevronDown/>
                    </div>
                    {/* <a href="/logout" className="navbar1-link"><Icon.BoxArrowInRight/> Logout</a> */}
                </div>
            </div>

            {/* Client Sidenav */}
            <div className="side-nav1">
                <div className="d-flex align-items-center gap3 w-100 ">
                    <img src="/src/assets/media/logos/logo1.png" className="navbar-1-logo-pic" alt="" />
                    <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                </div>

                <div className="side-nav1-links mar-top-1">
                    <SideNavLink1 to="/BDDRClient" icon={Icon.House} activeIcon={Icon.HouseFill} label="Properties" currentPath={location.pathname} />
                    <SideNavLink1 to="/BDDRClient/Likes" icon={Icon.Heart} activeIcon={Icon.HeartFill} label="Likes" currentPath={location.pathname} />
                    <SideNavLink1 to="/BDDRClient/OngoingDeals" icon={Icon.FileEarmarkRichtext} activeIcon={Icon.FileEarmarkRichtextFill} label="Ongoing Deals" currentPath={location.pathname} />
                    <SideNavLink1 to="/BDDRClient/Agents" icon={Icon.Person} activeIcon={Icon.PersonFill} label="Agents" currentPath={location.pathname} />
                </div>
            </div>

            {/* Children Contents */}
            <Outlet/>
        </div>
    )
};