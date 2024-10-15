import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { ModalProvider } from "../../contexts/ModalContext";
import ModalManager from "../../Managers/ModalManager";
import axiosClient from "../../axios-client";
import { useEffect, useState } from "react";
import { AdminNavbar1 } from "../../components/AdminComponents/admin_navbar1";
import { ToastContainer } from "react-toastify";
import { AdminSidenav1 } from "../../components/AdminComponents/admin_sidenav1";

export default function AdminDefault() {
    const { user, setUserType, userType, token, setUser, setToken } = useStateContext();
    const [isSidenavOpen, setSidenavOpen] = useState(false);
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
                setUser({});
                setToken(null);
                setUserType(null);
            });
    };

    // Handle redirection in the component body
    if (!token || userType !== 'admin') {
        return <Navigate to="/" />;
    }



    /**
     * Render
     */
    return(
        <ModalProvider>
            <div className="w-100 h-100 position-relative">
                <ModalManager/>

                {/* Navbar */}
                <AdminSidenav1 isSidenavOpen={isSidenavOpen} setSidenavOpen={setSidenavOpen}/>
                <AdminNavbar1 isSidenavOpen={isSidenavOpen} onLogout={onLogout}/>
                

                {/* Children */}
                <Outlet context={{isSidenavOpen}}/>

                <ToastContainer/>
                
            </div>
        </ModalProvider>
    )
}