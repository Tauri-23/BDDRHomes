import { Outlet, useOutletContext } from "react-router-dom";
import '../../../assets/css/admin_teams.css';

export default function AdminTeamsDefault() {
    const {isSidenavOpen} = useOutletContext();

    return(
        <Outlet context={{isSidenavOpen}}/>
    );
}