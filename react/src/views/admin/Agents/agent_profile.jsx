import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAgentInfos } from "../../../Services/AdminAgentService";

export default function AdminAgentProfile() {
    const {id} = useParams();
    const [agent, setAgent] = useState(null);



    useEffect(() => {
        const getAgentInfos = async() => {
            try {
                const data = await fetchAgentInfos(id);
                setAgent(data);
            } catch (error) {console.log(error)}
        }

        getAgentInfos();
    }, []);



    useEffect(() => {
        console.log(agent);
    }, [agent])



    return(
        <div className="content4">
            {agent
            ? (
                <div className="agent-profile-cont-1">
                    <div className="agent-profile-pfp-cont">
                        {agent.pfp
                        ? (<img src={`/src/assets/media/agents/pfp/${agent.pfp}`}/>)
                        : (<div className="">{agent.firstname[0]}</div>)}
                    </div>

                    <div className="d-flex flex-direction-y">
                        <div className="text-xl2">{agent.firstname} {agent.lastname}</div>
                        <div className="text-l3">Agent</div>
                    </div>
                </div>
            )
            : (<div className="text-l3 center-absolute-xy">Loading...</div>)}
        </div>
    );
}