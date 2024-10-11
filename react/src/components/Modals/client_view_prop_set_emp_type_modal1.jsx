import * as Icon from "react-bootstrap-icons";
import propTypes from 'prop-types';
import { useState } from "react";
import { isEmptyOrSpaces } from "../../assets/js/utils";

const ClientViewPropSetEmpTypeModal1 = ({ empTypes, handleSetEmploymentRTypePost, onClose }) => {
    const [selectedEmpType, setSelectedEmpType] = useState('');

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="d-flex gap1 mar-bottom-l3 align-items-center position-relative">
                    <div className="circle-btn1 text-l1 position-absolute" onClick={onClose}>
                        <Icon.X/>
                    </div>
                    <div className="text-m1 fw-bold m-auto">Set your employment type</div>
                </div>

                {/* pfp */}
                <label htmlFor="emp-type" className="text-m2 mar-bottom-3">Employment type</label>
                <select className="edit-text-1 w-100" id="emp-type" onChange={(e) => setSelectedEmpType(e.target.value)} value={selectedEmpType}>
                    <option value="">select employment type</option>
                    {empTypes.map(empType => (
                        <option key={empType.id} value={empType.id}>{empType.type}</option>
                    ))}
                </select>

                {/* Btns */}
                <div className="d-flex flex-direction-y mar-top-1">
                        
                    <button 
                    disabled={isEmptyOrSpaces(selectedEmpType)}
                    onClick={() => {handleSetEmploymentRTypePost(selectedEmpType); onClose();}}
                    className={`primary-btn-black1 text-center ${isEmptyOrSpaces(selectedEmpType) ? 'disabled' : ''}`}
                    >
                        Set to profile
                    </button>
                </div>  
            </div>
        </div>
    );
}

ClientViewPropSetEmpTypeModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};

export default ClientViewPropSetEmpTypeModal1;