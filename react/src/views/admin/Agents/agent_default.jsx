import { Outlet } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import '../../../assets/css/admin-agents.css';

export default function AdminAgentDefault() {
    const {user} = useStateContext();

    return(
        <>
            <Outlet/>
        </>
    );
}