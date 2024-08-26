import { Navigate, useNavigate } from "react-router-dom";

const AdminAgentBox1 = ({agent, agentDisplayType}) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`AgentProfile/${agent.id}`);
    }

    return(
        <div onClick={handleRedirect} className={`agent-box ${agentDisplayType === 'Grid' ? 'grid' : 'list'}`}>
            <div className="agent-box-pic-cont">
                {agent.pfp
                ? (<img src={`/src/assets/media/agents/pfp/${agent.pfp}`}/>) 
                : (<div className="text-xl1 color-white1">{agent.firstname[0]}</div>)}
            </div>

            <div className="d-flex flex-direction-y text-center">
                <div className="text-l3 fw-bold">{agent.firstname} {agent.lastname}</div>
                <div className="text-m2">{agent.position}</div>
            </div>
        </div>
    );
}

export default AdminAgentBox1;