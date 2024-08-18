import { Outlet, useOutletContext } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import '../../../assets/css/admin-agents.css';
import { useEffect } from "react";

export default function AdminAgentDefault() {
    const {user} = useStateContext();
    const {isSidenavOpen} = useOutletContext();

    return(
        <>
            <Outlet context={{isSidenavOpen}}/>
        </>
    );
}