import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AgentListingDefault() {
    return(
        <>
            <Outlet/>
            <ToastContainer/>
        </>
    )
}