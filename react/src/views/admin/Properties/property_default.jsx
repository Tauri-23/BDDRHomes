import { Outlet, useOutletContext } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";

export default function AdminPropertyDefault() {
    const {user} = useStateContext();
    const {isSidenavOpen} = useOutletContext();

    return(
        <>
            <Outlet context={{isSidenavOpen}}/>
        </>
    );
}