import { Link } from "react-router-dom"
import { NavLink2 } from "../navlink2"
import * as Icon from 'react-bootstrap-icons';

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
                    <NavLink2 to="/BDDRAdmin" label="Dashboard" activeLoc="/BDDRAdmin" />
                    <NavLink2 to="/BDDRAdmin/Agents" label="Agents" activeLoc="/BDDRAdmin/Agents" />
                    <NavLink2 to="" label="Listings" activeLoc="/BDDRAdmin/Messages" />

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