import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const GeneralConfirmationModal1 = ({ title, note, positiveBtnText, handlePositiveBtnClick, onClose }) => {

    // useEffect(() => {console.log(transaction);}, [transaction]);
    

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Desc */}
                <div className="text-center mar-bottom-1 d-flex flex-direction-y gap3">
                    <div className="text-m1 fw-bold w-100">{title}</div>
                    <div className="text-m2 w-50 m-auto">{note}</div>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <div 
                    onClick={() => {handlePositiveBtnClick(); onClose();}} 
                    className="primary-btn-black1 text-center"
                    >
                        {positiveBtnText}
                    </div>
                </div>
            </div>
        </div>
    );
};

GeneralConfirmationModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};