import { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link, useOutletContext } from 'react-router-dom';
import { fetchAllAgents } from '../../../Services/AdminAgentService';
import { SkeletonAgentBox } from '../../../Skeletons/admin-team-agent-skeleton';
import AdminAgentBox1 from '../../../components/AdminComponents/admin_agent_box1';



export default function AdminAgentIndex() {
    const [agentDisplayType, setAgentDisplayType] = useState('Grid');
    const [agents, setAgents] = useState([]);
    const {isSidenavOpen} = useOutletContext();


    useEffect(() => {
        const getAllAgents = async() => {
            try {
                const data = await fetchAllAgents();
                setAgents(data);
            } catch(error) {console.error(error)}
        }

        getAllAgents();
    }, []);



    // useEffect(() => {
    //     console.log(agents);
    // }, [agents])



    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>

            {/* Option Bar */}
            <div className="admin-agent-nav mar-bottom-l1">
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
                    
                    <Link to={'AddAgent'} className='color-black1'>
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
                    <AdminAgentBox1 key={agent.id} agent={agent} agentDisplayType={agentDisplayType}/>
                ))
                : Array.from({length: 10}, (_, index) => index).map(x => (
                    <SkeletonAgentBox key={x}/>
                ))
                }
            </div>



        </div>
    )
}