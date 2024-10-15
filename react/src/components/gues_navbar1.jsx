import { Link, useNavigate } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

export const GuestNavbar1 = () => {
    const navigate = useNavigate()
    return (
        <div className="navbar1">
            <div className="navbar-1-logo">
                <div className="d-flex align-items-center gap3 cursor-pointer user-select-none" onClick={() => navigate('/')}>
                    <img src={"/src/assets/media/logos/logo1.png"} className="navbar-1-logo-pic" alt="" />
                    <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                </div>
            </div>
                
            <div className="navbar1-links">
                <Link to="/signin" className="navbar1-link"><Icon.BoxArrowInRight/> Login</Link>
            </div>
        </div>
    );
}