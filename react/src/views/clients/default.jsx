import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { ClientNavbar1 } from "../../components/ClientComponents/client_navbar_1";
import { Footer1 } from "../../components/footer1";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { ModalProvider } from "../../contexts/ModalContext";
import ModalManager from "../../Managers/ModalManager";
import { ToastContainer } from "react-toastify";
import { auth } from "../../firebase-cofig";
import { signOut } from "firebase/auth";

export default function ClientDefault() {
    const { user, userType, token, setUserType, setUser, setToken } = useStateContext();
    const location = useLocation();

    const [searchValue, setSearchValue] = useState("");



    /**
     * Scroll up every change location
     */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);



    /**
     * For protected access
     */
    useEffect(() => {
        if (token) {            
            axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data.user);
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.status === 401) {
                    setUser(null);
                    setToken(null);
                }
            });
        } else {setUser(null); setUserType(null)}
    }, []);

    const onLogout = (ev) => {
        axiosClient.post('/logout')
            .then(() => {
                setUser(null);
                setToken(null);
                setUserType(null);
                signOut(auth);
            });
    };

    // Handle redirection in the component body
    if (!token || userType !== 'client') {
        return <Navigate to="/" />;
    }



    /**
     * Handlers
     */
    const handleSearchBtnClick = (value) => {
        setSearchValue(value);
    }



    /**
     * Render
     */
    if(user) {
        return (
            <ModalProvider>
                <div className="w-100 h-100 position-relative">
                    <ModalManager/>
                    
                    {/* Navbar */}
                    <ClientNavbar1 client={user} handleSearchBtnClick={handleSearchBtnClick} onLogout={onLogout} />
    
                    {/* Children Contents */}
                    <Outlet context={{searchValue, setSearchValue}}/>
    
                    <ToastContainer/>
    
                    {/* Footer */}
                    <Footer1/>
                </div>
            </ModalProvider>
            
        );
    }
}
