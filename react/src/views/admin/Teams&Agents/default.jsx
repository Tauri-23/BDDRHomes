import { Outlet, useOutletContext } from "react-router-dom";
import '../../../assets/css/admin_teams_agents.css';
import { useEffect, useState } from "react";

export default function AdminTeamsDefault() {
    const {isSidenavOpen} = useOutletContext();

    /**
     * 1 - Team with Agents
     * 2 - Teams
     */
    const [viewAs, setViewAs] = useState();

    useEffect(() => {
        setViewAs(1);
    }, []);

    return(
        <Outlet context={{
            isSidenavOpen,
            viewAs,
            setViewAs,
        }}/>
    );
}