import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { ClientNavbar1 } from "../../components/client_navbar_1";
import { useEffect } from "react";
import axiosClient from "../../axios-client";

export default function ClientDefault() {
    const { user, token, setUser, setToken } = useStateContext();
    const location = useLocation();

    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser(data);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        setUser({});
                        setToken(null);
                    }
                });
        }
    }, [token, setUser, setToken]);

    const onLogout = (ev) => {
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            });
    };

    // Handle redirection in the component body
    if (!token) {
        return <Navigate to="/" />;
    }

    return (
        <div className="w-100 h-100 position-relative">
            {/* Navbar */}
            <ClientNavbar1 onLogout={onLogout} />

            {/* Children Contents */}
            <Outlet />
        </div>
    );
}
