import * as Icon from 'react-bootstrap-icons';
import '/src/assets/css/messages.css';

export default function ClientMessages () {
    return (
        <>
            <div className="d-flex">
                {/* Messages List */}
                <div className="messages-lists">
                    {/* Messages List Header */}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-l3 fw-bold">Messages</div>
                        <div className="d-flex gap3">
                            <div className="circular-btn-1">
                                <Icon.Search className='text-l3'/>                            
                            </div>       
                            <div className="circular-btn-1">
                                <Icon.Sliders className='text-l3'/>                          
                            </div>  
                        </div>                    
                    </div>

                    {/* Messages List Body */}
                    <div className='mar-top-l1'>
                        <div className="d-flex w-100 align-items-center flex-direction-y gap3">
                            <img src="/src/assets/media/icons/chat1.svg" alt="" className='icon1' />
                            <div className="text-m2 fw-bold">You don't have any messages yet.</div>
                            <div className="text-m3">When you receive a new message, it will appear here.</div>
                        </div>
                    </div>
                </div>

                <div className="messages-content">

                </div>
            </div> 
        </>
    );
};