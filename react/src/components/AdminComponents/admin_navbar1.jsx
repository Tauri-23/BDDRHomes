import { Link } from "react-router-dom"
import * as Icon from 'react-bootstrap-icons';
import { AdminNavLink1 } from "./admin_navlink1";

export const AdminNavbar1 = ({onLogout}) => {
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
                    className={`navbar-3-circle `} /*${notifBtnActive}*/
                    //onClick={toggleNotifVisibility}
                    >
                        <Icon.Bell className="text-m1"/>
                    </div>

                    {/* PFP */}
                    <div 
                    className="navbar-3-pfp" 
                    //onClick={toggleNavModal1Visibility}
                    >
                        {/* If pfp is null use the first letter of fname instead */}
                        <div className="text-l3 color-white1">M</div>
                        {/* <img src="/src/assets/media/clients/pfp/airich-pfp.jpg" alt="" /> */}
                    </div>

                </div>

            </div>
        </>
    )
}