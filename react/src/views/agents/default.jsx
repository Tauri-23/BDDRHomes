import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { AgentNavbar1 } from "../../components/AgentComponents/agent_navbar_1";

import '/src/assets/css/agent-listings.css';
import { AgentListingOptionModal1 } from "../../components/Modals/agent_listing_option_modal1";
import { ModalProvider } from "../../contexts/ModalContext";
import ModalManager from "../../Managers/ModalManager";

export default function AgentDefault() {
    const { userType, setUserType, user, token, setUser, setToken } = useStateContext();
    const location = useLocation();

    /*
    |----------------------------------------
    | Token and UserType Checker 
    |----------------------------------------
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
        }
    }, []);

    const onLogout = (ev) => {
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
                setUserType(null);
            });
    };

    // Handle redirection in the component body
    if (!token || userType !== 'agent') {
        return <Navigate to="/" />;
    }




    
    return (
        <ModalProvider>
            <div className="w-100 h-100 position-relative">
                <ModalManager/>

                <AgentNavbar1 onLogout={onLogout}/>

                <Outlet/>

                
            </div>
        </ModalProvider>
    );
}
