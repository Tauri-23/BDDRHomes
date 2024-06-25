import { Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";

export default function ClientDefault() {
    const {user, token} = useStateContext();
    const location = useLocation();

    if(!token) {
        return <Navigate to="/" />
    }

    return (
        <div className="w-100 h-100">
            <div className="navbar2">
                <div className="text-l3 fw-bold">
                    Properties
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
                    <div className="side-nav1-link active">
                        <Icon.HouseFill className="text-l3"/> Properties
                    </div>
                    <div className="side-nav1-link">
                        <Icon.Heart className="text-l3"/> Likes
                    </div>
                    <div className="side-nav1-link">
                        <Icon.FileEarmarkRichtext className="text-l3"/> Ongoing Deals
                    </div>
                    
                    <div className="side-nav1-link">
                    <Icon.Person className="text-l3"/> Agents
                    </div>
                    
                </div>
            </div>

            {/* Children Contents */}
            <Outlet/>
        </div>
    )
};