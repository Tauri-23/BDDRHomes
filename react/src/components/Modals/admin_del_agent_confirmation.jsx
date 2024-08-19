import propTypes from 'prop-types';
import { useRef, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

export const AdminDelAgentConfirmation = ({agent, handleDeleteAgentPost, onClose}) => {
    const [confirmationText, setConfirmationText] = useState(null);
    const [confirm, setConfirm] = useState(false);

    const confirmationRef = useRef(null);

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Desc */}
                <div className="text-center mar-bottom-1 d-flex flex-direction-y gap3">
                    <div className="text-m1 fw-bold w-100">Delete agent?</div>
                    <div className="text-m2 w-100 m-auto">"{agent.firstname} {agent.lastname}" will be permanently deleted</div>
                    <div className="text-m2 w-100 m-auto">To confirm please input "I CONFIRM"</div>
                </div>

                <div className="d-flex flex-direction-y gap3 mar-bottom-1">
                    <input ref={confirmationRef} onInput={() => setConfirmationText(confirmationRef.current.value)} type="text" name="del-agent-confirmation" id="del-agent-confirmation" className="edit-text-2 w-100" />
                    <div className="d-flex align-items-center gap4">
                        <input onChange={() => setConfirm(!confirm)} type="checkbox" name="confirm" id="confirm" /> <label htmlFor="confirm" className='text-m3'>I understand that deleting agent is irreversible.</label>
                    </div>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <button 
                    disabled={!(confirmationText === 'I CONFIRM' && confirm)}
                    onClick={() => {
                        handleDeleteAgentPost();
                        onClose();
                    }} 
                    className={`primary-btn-red2 ${confirmationText === 'I CONFIRM' && confirm ? '' : 'disabled'} text-center`}
                    >
                        Delete Agent
                    </button>
                    
                    {/* <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </div> */}
                </div>
            </div>
        </div>
    );
}

AdminDelAgentConfirmation.propTypes = {
    onClose: propTypes.func.isRequired,
    handleDeleteAgentPost: propTypes.func.isRequired
};