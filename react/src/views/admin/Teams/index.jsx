import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import AdminTeamBox1 from "../../../components/AdminComponents/admin_team_box1";
import { SkeletonAgentBox } from "../../../Skeletons/admin-agent-skeleton";
import { fetchAllTeams } from "../../../Services/GeneralTeamsService";

export default function AdminTeamsIndex() {
    const {isSidenavOpen} = useOutletContext();
    const [teamDisplayType, setTeamDisplayType] = useState('Grid');
    const [teams, setTeams] = useState(null);

    useEffect(() => {
        const getAllTeams = async() => {
            try {
                const data = await fetchAllTeams();
                setTeams(data);
            } catch(error) {console.error(error)}
        }

        getAllTeams();
    }, []);

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <div className="admin-team-nav mar-bottom-l1">
                <div className="text-l1 fw-bold">Teams</div>

                <div className="d-flex align-items-center gap3">
                    <div className="circle-btn-1">
                        <Icon.Search className='text-m1'/>
                    </div>

                    <div 
                    className="circle-btn-1"
                    onClick={() => setTeamDisplayType(prev => {return prev === 'Grid' ? 'List' : 'Grid'})}
                    >
                        {teamDisplayType === 'Grid' 
                        ? <Icon.ViewStacked className='text-m1'/>
                        : <Icon.Grid className='text-m1'/>
                        }
                    </div>
                    
                    <Link to={'AddTeam'} className='color-black1'>
                        <div className="circle-btn-1">
                            <Icon.PlusLg className='text-m1'/>
                        </div>
                    </Link>
                    
                </div>
            </div>

            {/* Render */}
            <div className={`d-flex ${teamDisplayType === 'Grid' ? "flex-wrap" : "flex-direction-y"} gap2`}>
                    {teams?.length > 0 && teams.map(team => (
                        <AdminTeamBox1 key={team.id} team={team}/>
                    ))}

                    {!teams && 
                    Array.from({length: 10}, (_, index) => index).map(x => (
                        <SkeletonAgentBox key={x}/>
                    ))}
                </div>
        </div>
    );
}