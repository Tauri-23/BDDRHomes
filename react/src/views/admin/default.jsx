import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { ModalProvider } from "../../contexts/ModalContext";
import ModalManager from "../../Managers/ModalManager";
import axiosClient from "../../axios-client";
import { useEffect } from "react";
import { AdminNavbar1 } from "../../components/AdminComponents/admin_navbar1";
import { ToastContainer } from "react-toastify";

export default function AdminDefault() {
    const { user, setUserType, userType, token, setUser, setToken } = useStateContext();



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
    if (!token || userType !== 'admin') {
        return <Navigate to="/" />;
    }

    return(
        <ModalProvider>
            <div className="w-100 h-100 position-relative">
                <ModalManager/>

                {/* Navbar */}
                <AdminNavbar1 onLogout={onLogout}/>

                {/* Children */}
                <Outlet/>

                <ToastContainer/>
                
            </div>
        </ModalProvider>
    )
}