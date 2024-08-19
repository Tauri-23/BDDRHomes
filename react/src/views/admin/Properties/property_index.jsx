import { Link, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

export default function AdminPropertyIndex() {
    const {isSidenavOpen} = useOutletContext();

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {/* Option Bar */}
            <div className="admin-agent-nav mar-bottom-l1">
                <div className="text-l1 fw-bold">Properties</div>

                <div className="d-flex align-items-center gap3">
                    <div className="circle-btn-1">
                        <Icon.Search className='text-m1'/>
                    </div>

                    {/* <div 
                    className="circle-btn-1"
                    onClick={() => setAgentDisplayType(prev => {return prev === 'Grid' ? 'List' : 'Grid'})}
                    >
                        {agentDisplayType === 'Grid' 
                        ? <Icon.ViewStacked className='text-m1'/>
                        : <Icon.Grid className='text-m1'/>
                        }
                    </div> */}
                    
                    <Link to={'AddProperty'} className='color-black1'>
                        <div className="circle-btn-1">
                            <Icon.PlusLg className='text-m1'/>
                        </div>
                    </Link>
                    
                </div>  
            </div>
        </div>
    );
}