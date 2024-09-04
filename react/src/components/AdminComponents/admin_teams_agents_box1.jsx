import * as Icon from "react-bootstrap-icons";
import { formatDateTime, formatToPhilPeso } from "../../assets/js/utils";
import { useNavigate } from "react-router-dom";

const AdminTeamsAgentsBox1 = ({team}) => {
    const navigate = useNavigate();

    const handleViewAgentProfile = (agentId) => {
        navigate(`AgentProfile/${agentId}`);
    }

    return (
        <div className="team-box-2">
            <div className="team-box-2-head">
                <div className="d-flex gap3 align-items-center">
                    <img src={`/src/assets/media/teams/${team.logo}`} className="team-box2-logo" />
                    {team.name}
                </div>
                <div>
                    <Icon.ThreeDots/>
                </div>
            </div>
            <table className={`team-box2-table ${team.agents.length > 0 ? '' : 'd-none'}`}>
                <thead className="team-box2-table-head">
                    <tr>
                        <th>Name</th>
                        <th>Date hired</th>
                        <th>Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {team.agents.map(agent => (
                        <tr onClick={() => handleViewAgentProfile(agent.id)} key={agent.id} className="team-box2-member">
                            <td className="d-flex align-items-center gap3">
                                <div className="team-box2-member-pfp">
                                    {agent.pfp 
                                    ? (<img src={`/src/assets/media/properties/${agent.pfp}`} alt="" />)
                                    : (<div className="text-m1 color-white1">{agent.firstname[0]}</div>)}
                                    
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
            <div className={`w-100 text-center ${team.agents.length > 0 ? 'd-none' : ''} padding2`}>
                No Agents
            </div>
        </div>
    );
}

export default AdminTeamsAgentsBox1;