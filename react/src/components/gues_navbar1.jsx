import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

export const GuestNavbar1 = () => {
    return (
        <div className="navbar1">
            <div className="navbar-1-logo">
                <div className="d-flex align-items-center gap3">
                    <img src={"/src/assets/media/logos/logo1.png"} className="navbar-1-logo-pic" alt="" />
                    <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                </div>
            </div>

            <div className="navbar1-links">
                <Link to="/" className={`navbar1-link ${location.pathname == '/' ? 'active' : ''}`}> Home</Link>
                <Link to="/listings" className={`navbar1-link ${location.pathname == '/listings' ? 'active' : ''}`}> Listings</Link>
                <Link to="/" className={`navbar1-link ${location.pathname == '/about' ? 'active' : ''}`}> About</Link>
            </div>
                
            <div className="navbar1-links">
                <Link to="/signin" className="navbar1-link"><Icon.BoxArrowInRight/> Login</Link>
            </div>
        </div>
    );
}