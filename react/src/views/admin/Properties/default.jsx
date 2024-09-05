import { Outlet, useOutletContext } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import "../../../assets/css/admin_properties_developers.css";

export default function AdminPropertyDefault() {
    const {user} = useStateContext();
    const {isSidenavOpen} = useOutletContext();
    const [viewAs, setViewAs] = useState();

    useEffect(() => {
        setViewAs(1);
    },[])

    return(
        <>
            <Outlet context={{
                isSidenavOpen,
                viewAs, 
                setViewAs
            }}/>
        </>
    );
}