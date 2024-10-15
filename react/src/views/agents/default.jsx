import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { AgentNavbar1 } from "../../components/AgentComponents/agent_navbar_1";

import '/src/assets/css/agent-listings.css';
import { ModalProvider } from "../../contexts/ModalContext";
import ModalManager from "../../Managers/ModalManager";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-cofig";
import { ToastContainer } from "react-toastify";

export default function AgentDefault() {
    const { userType, setUserType, user, token, setUser, setToken } = useStateContext();
    const location = useLocation();



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
                if (error.response && error.response.status === 401) {
                    setUser({});
                    setToken(null);
                }
            });
        } else {setUser(null); setUserType(null)}
    }, []);

    const onLogout = (ev) => {
        axiosClient.post('/logout')
            .then(() => {
                signOut(auth);
                setUser({});
                setToken(null);
                setUserType(null);
            });
    };

    // Handle redirection in the component body
    if (!token || userType !== 'agent') {
        return <Navigate to="/" />;
    }



    /**
     * Render
     */
    return (
        <ModalProvider>
            <div className="w-100 h-100 position-relative">
                <ModalManager/>

                <AgentNavbar1 agent={user} onLogout={onLogout}/>

                <Outlet/>

                <ToastContainer/>
            </div>
        </ModalProvider>
    );
}
