import { Outlet, useOutletContext } from "react-router-dom";

export default function AdminProfileDefault() {
    const {isSidenavOpen} = useOutletContext();

    return(
        <>
            <Outlet context={{isSidenavOpen}}/>
        </>
    );
}