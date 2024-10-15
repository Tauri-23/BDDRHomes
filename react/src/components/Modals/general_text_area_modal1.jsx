import * as Icon from "react-bootstrap-icons";
import propTypes from 'prop-types';
import { useState } from "react";
import { isEmptyOrSpaces } from "../../assets/js/utils";

const GeneralTextAreaModal1 = ({ title, label, positiveBtnText, handlePositiveBtnClick, onClose }) => {
    const [textArea, setTextArea] = useState('');

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="d-flex gap1 mar-bottom-l3 align-items-center position-relative">
                    <div className="circle-btn1 text-l1 position-absolute" onClick={onClose}>
                        <Icon.X/>
                    </div>
                    <div className="text-m1 fw-bold m-auto">{title}</div>
                </div>

                {/* Forms */}
                <label htmlFor="text-area" className="text-m2 mar-bottom-4">{label}</label>
                <textarea 
                className="edit-text-1 w-100" 
                style={{resize: 'none', height: '100px'}} 
                id="text-area"
                onInput={(e) => setTextArea(e.target.value)}
                value={textArea}
                ></textarea>

                {/* Btns */}
                <div className="d-flex flex-direction-y mar-top-1">
                        
                    <button 
                    disabled={isEmptyOrSpaces(textArea)}
                    onClick={() => {handlePositiveBtnClick(textArea)}}
                    className={`primary-btn-black1 text-center ${isEmptyOrSpaces(textArea) ? 'disabled' : ''}`}
                    >
                        {positiveBtnText}
                    </button>
                </div>  
            </div>
        </div>
    );
}

GeneralTextAreaModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};

export default GeneralTextAreaModal1;