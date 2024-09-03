import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AdminTeamsAgentsNavbar = ({viewAs, setViewAs}) => {
    
    return(
        <div className="mar-bottom-l1 d-flex flex-direction-y gap2 position-relative">
            <div className="admin-team-nav">
                <div className="text-l1 fw-bold">Teams & Agents</div>
                <div className="d-flex align-items-center gap3">
                    <div className="circle-btn-1">
                        <Icon.Search className='text-m1'/>
                    </div>

                    {/* <div 
                    className="circle-btn-1"
                    onClick={() => setTeamDisplayType(prev => {return prev === 'Grid' ? 'List' : 'Grid'})}
                    >
                        {teamDisplayType === 'Grid' 
                        ? <Icon.ViewStacked className='text-m1'/>
                        : <Icon.Grid className='text-m1'/>
                        }
                    </div> */}
                    
                    <Link to={'AddTeam'} className='color-black1'>
                        <div className="circle-btn-1">
                            <Icon.PlusLg className='text-m1'/>
                        </div>
                    </Link>
                </div>
            </div>

            <select className="primary-btn-grey2 d-flex gap3 align-items-center align-self-end" value={viewAs} onChange={(e) => setViewAs(e.target.value)}>
                <option value={1}>View as Teams and Agents</option>
                <option value={2}>View as Teams</option>
            </select>
        </div>
    );
}

export default AdminTeamsAgentsNavbar;