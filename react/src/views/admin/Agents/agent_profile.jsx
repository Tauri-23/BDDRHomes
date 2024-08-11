import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAgentInfos } from "../../../Services/AdminAgentService";

export default function AdminAgentProfile() {
    const {id} = useParams();
    const [agent, setAgent] = useState([]);



    useEffect(() => {
        const getAgentInfos = async() => {
            try {
                const data = await fetchAgentInfos(id);
                setAgent(data);
            } catch (error) {console.log(error)}
        }

        getAgentInfos();
    }, []);



    return(
        <div className="content1">
            {agent.length > 0 
            ? (
                <div></div>
            )
            : (<div className="text-l3 center-absolute-xy">Loading...</div>)}
        </div>
    );
}