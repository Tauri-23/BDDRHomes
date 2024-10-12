import * as Icon from "react-bootstrap-icons";
import propTypes from 'prop-types';
import { useState } from "react";
import { isEmptyOrSpaces } from "../../assets/js/utils";

const AgentAddTransactionTaskModal1 = ({ handleAddTaskPost, onClose }) => {
    const [requirement, setRequirement] = useState('');
    const [note, setNote] = useState('');

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="d-flex gap1 mar-bottom-l3 align-items-center position-relative">
                    <div className="circle-btn1 text-l1 position-absolute" onClick={onClose}>
                        <Icon.X/>
                    </div>
                    <div className="text-m1 fw-bold m-auto">Add Task</div>
                </div>

                {/* Forms */}
                <label htmlFor="requirement" className="text-m2 mar-bottom-4">Requirement:</label>
                <input 
                type="text" 
                id="requirement" 
                className="edit-text-1 w-100 mar-bottom-2" 
                onInput={(e) => setRequirement(e.target.value)}
                value={requirement}
                />

                <label htmlFor="note" className="text-m2 mar-bottom-4">Note:</label>
                <textarea 
                className="edit-text-1 w-100" 
                style={{resize: 'none', height: '100px'}} 
                id="note"
                onInput={(e) => setNote(e.target.value)}
                value={note}
                ></textarea>

                {/* Btns */}
                <div className="d-flex flex-direction-y mar-top-1">
                        
                    <button 
                    disabled={isEmptyOrSpaces(requirement) || isEmptyOrSpaces(note)}
                    onClick={() => {handleAddTaskPost(requirement, note); onClose();}}
                    className={`primary-btn-black1 text-center ${isEmptyOrSpaces(requirement) || isEmptyOrSpaces(note) ? 'disabled' : ''}`}
                    >
                        Add Tasks
                    </button>
                </div>  
            </div>
        </div>
    );
}

AgentAddTransactionTaskModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};

export default AgentAddTransactionTaskModal1;