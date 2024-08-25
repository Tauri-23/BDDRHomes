import { Outlet, useOutletContext } from "react-router-dom";

export default function AdminSettingsDefault() {
    const {isSidenavOpen} = useOutletContext();

    return(
        <>
            <Outlet context={{isSidenavOpen}}/>
        </>
    );
}