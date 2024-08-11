import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { fetchAllAgents } from '../../../Services/AdminAgentService';



export default function AdminAgentIndex() {
    const [agentDisplayType, setAgentDisplayType] = useState('Grid');
    const [agents, setAgents] = useState([]);



    useEffect(() => {
        const getAllAgents = async() => {
            try {
                const data = await fetchAllAgents();
                setAgents(data);
            } catch(error) {console.error(error)}
        }

        getAllAgents();
    }, []);



    useEffect(() => {
        console.log(agents);
    }, [agents])



    return(
        <div className="content1">

            {/* Option Bar */}
            <div className="admin-agent-nav mar-bottom-1">
                <div className="text-l1 fw-bold">Agents</div>

                <div className="d-flex align-items-center gap3">
                    <div className="circle-btn-1">
                        <Icon.Search className='text-m1'/>
                    </div>

                    <div 
                    className="circle-btn-1"
                    onClick={() => setAgentDisplayType(prev => {return prev === 'Grid' ? 'List' : 'Grid'})}
                    >
                        {agentDisplayType === 'Grid' 
                        ? <Icon.ViewStacked className='text-m1'/>
                        : <Icon.Grid className='text-m1'/>
                        }
                    </div>
                    
                    <Link to={'/BDDRAgent/CreateListing'} className='color-black1'>
                        <div className="circle-btn-1">
                            <Icon.PlusLg className='text-m1'/>
                        </div>
                    </Link>
                    
                </div>  
            </div>


            {/* Render */}
            <div className={`d-flex ${agentDisplayType === 'Grid' ? "flex-wrap" : "flex-direction-y"} gap2`}>
                {agents.length > 0
                ? agents.map(agent => (
                    <div key={agent.id} className={`agent-box ${agentDisplayType === 'Grid' ? 'grid' : 'list'}`}>
                        <div className="agent-box-pic-cont">
                            {agent.pfp
                            ? (<img src={`/src/assets/media/agents/pfp/${agent.pfp}`}/>) 
                            : (<div className="text-xl1 color-white1">{agent.firstname[0]}</div>)}
                        </div>

                        <div className="d-flex flex-direction-y text-center">
                            <div className="text-l3 fw-bold">{agent.firstname} {agent.lastname}</div>
                            <div className="text-m2">Agent</div>
                        </div>
                    </div>
                ))
                : ('load')
                }
            </div>



        </div>
    )
}