import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import AdminTeamBox1 from "../../../components/AdminComponents/admin_team_box1";
import { SkeletonAgentBox } from "../../../Skeletons/admin-agent-skeleton";
import { fetchAllTeams } from "../../../Services/GeneralTeamsService";
import AdminTeamsAgentsNavbar from "../../../components/AdminComponents/admin_teams_agents_navbar";
import { formatDateTime, formatToPhilPeso } from "../../../assets/js/utils";

export default function AdminTeamsIndex() {
    const {isSidenavOpen} = useOutletContext();
    const [teamDisplayType, setTeamDisplayType] = useState('Grid');
    const [teams, setTeams] = useState(null);

    /**
     * 1 - Team with Agents
     * 2 - Teams
     */
    const [viewAs, setViewAs] = useState(1);

    useEffect(() => {
        const getAllTeams = async() => {
            try {
                const data = await fetchAllTeams();
                setTeams(data);
            } catch(error) {console.error(error)}
        }

        getAllTeams();
    }, []);

    /*
    * Debugging
    */
    useEffect(() => {
        console.log(teams);
    }, [teams]);

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <AdminTeamsAgentsNavbar viewAs={viewAs} setViewAs={setViewAs}/>

            {/* Render */}
            <div className={`d-flex ${viewAs === 1 ? "flex-direction-y" : "flex-wrap"} gap2`}>
                    
                    {/* For View as Teams and Agents */}
                    {viewAs == 1 && teams?.length > 0 && teams.map(team => (
                        <div key={team.id} className="team-box-2">
                            <div className="team-box-2-head">
                                <img src={`/src/assets/media/teams/${team.logo}`} className="team-box2-logo" />
                                {team.name}
                            </div>
                            <table className="team-box2-table">
                                <thead className="team-box2-table-head">
                                    <tr>
                                        <th>Name</th>
                                        <th>Date hired</th>
                                        <th>Sale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {team.agents.map(agent => (
                                        <tr key={agent.id} className="team-box2-member">
                                            <td className="d-flex align-items-center gap3">
                                                <div className="team-box2-member-pfp">
                                                    <img src={`/src/assets/media/properties/${agent.pfp}`} alt="" />
                                                </div>
                                                <div>
                                                    {agent.firstname} {agent.lastname}
                                                </div>
                                            </td>
                                            <td>{formatDateTime(agent.created_at)}</td>
                                            <td>{formatToPhilPeso(0)}</td>
                                        </tr>                                        
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}


                    {/* For View as Teams */}
                    {viewAs == 2 && teams?.length > 0 && teams.map(team => (
                        <AdminTeamBox1 key={team.id} team={team}/>
                    ))}

                    {viewAs == 2 && !teams && 
                    Array.from({length: 10}, (_, index) => index).map(x => (
                        <SkeletonAgentBox key={x}/>
                    ))}
            </div>
        </div>
    );
}