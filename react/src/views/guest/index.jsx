import { Outlet } from "react-router-dom";

export default function GuestDefault() {
    return (
        <div className="w-100 h-100">
            <div className="navbar1">
                <div className="navbar-1-logo">
                    <div className="d-flex align-items-center gap3">
                        <img src={"././assets/media/logos/logo1.png"} className="navbar-1-logo-pic" alt="" />
                        <div className="text-l3 fw-bold">BDDR Homes</div>
                    </div>
                </div>

                <div className="navbar1-links">
                    <a href="/" className="navbar1-link">Home</a>
                    <a href="/" className="navbar1-link">Listings</a>
                    <a href="/" className="navbar1-link">About</a>
                    <a href="/" className="navbar1-link">Contact</a>
                </div>
                    
                <div className="navbar1-links">
                    <a href="/signin" className="navbar1-link">Sign in</a>
                </div>
            </div>
            <Outlet/>
        </div>
    )
};