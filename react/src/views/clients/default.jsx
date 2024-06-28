import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { ClientNavbar1 } from "../../components/client_navbar_1";

export default function ClientDefault() {
    const {user, token} = useStateContext();
    const location = useLocation();

    if(!token) {
        return <Navigate to="/" />
    }

    /*
    |----------------------------------------
    | Toggle Nav Modal 
    |----------------------------------------
    */
    


    return (
        <div className="w-100 h-100 position-relative">          

            {/* Navbar */}
            <ClientNavbar1/>

            {/* Children Contents */}
            <Outlet/> 
        </div>
    )
};