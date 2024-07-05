import { Link, Navigate, Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axiosClient from "../../axios-client";

export default function GuestDefault() {
    const {user, token, setUser, userType, setUserType, setToken} = useStateContext();
    const location = useLocation();

    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUserType(data.user_type);
                    setUser(data.user);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        setUserType(null);
                        setUser({});
                        setToken(null);
                    }
                });
        }
    }, [token, setUserType, setUser, setToken]);

    // Render logic based on userType
    if (token) {
        console.log(userType);
        if (userType === 'client') {
            return <Navigate to="/BDDRClient" />;
        } else if (userType === 'agent') {
            return <Navigate to="/BDDRAgent" />;
        }
    }

    // if(token) {
    //     // if(userType === 'client') {
    //     //     return <Navigate to="/BDDRClient"/>
    //     // }
    //     // else if(userType === 'agent') {
    //     //     return <Navigate to={"/BDDRAgent"}/>
    //     // }        
    // }
    

    return (
        <div className="w-100 h-100">
            {/* Navbar */}
            <div className="navbar1">
                <div className="navbar-1-logo">
                    <div className="d-flex align-items-center gap3">
                        <img src={"/src/assets/media/logos/logo1.png"} className="navbar-1-logo-pic" alt="" />
                        <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                    </div>
                </div>

                <div className="navbar1-links">
                    <Link to="/" className={`navbar1-link ${location.pathname == '/' ? 'active' : ''}`}><Icon.House/> Home</Link>
                    <Link to="/listings" className={`navbar1-link ${location.pathname == '/listings' ? 'active' : ''}`}><Icon.Shop/> Listings</Link>
                    <Link to="/" className={`navbar1-link ${location.pathname == '/about' ? 'active' : ''}`}><Icon.InfoSquare/> About</Link>
                </div>
                    
                <div className="navbar1-links">
                    <Link to="/signin" className="navbar1-link"><Icon.BoxArrowInRight/> Login</Link>
                </div>
            </div>

            {/* Children Contents */}
            <Outlet/>

            {/* Footer */}
            <div className="footer1">
                <div className="d-flex align-items-center gap3">
                    <img src={"/src/assets/media/logos/logo1.png"} className="navbar-1-logo-pic" alt="" />
                    <div className="text-l3 fw-bold color-white1">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                </div>
            </div>
        </div>
    )
};