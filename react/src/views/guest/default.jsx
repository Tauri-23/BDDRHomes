import { Link, Navigate, Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axiosClient from "../../axios-client";
import { ModalProvider } from "../../contexts/ModalContext";
import ModalManager from "../../Managers/ModalManager";
import { GuestNavbar1 } from "../../components/gues_navbar1";

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
    }, []);

    // Render logic based on userType
    if (token) {
        // console.log(userType);
        if (userType === 'client') {
            return <Navigate to="/BDDRClient" />;
        } else if (userType === 'agent') {
            return <Navigate to="/BDDRAgent" />;
        } else if (userType === 'admin') {
            return <Navigate to="/BDDRAdmin" />;
        }
    }
    

    return (
        <ModalProvider>            
            <div className="w-100 h-100">
            <ModalManager/>

            {/* Navbar */}
            <GuestNavbar1/>

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
        </ModalProvider>
    )
};