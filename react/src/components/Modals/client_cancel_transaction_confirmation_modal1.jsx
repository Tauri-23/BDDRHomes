import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const ClientCancelTransactionConfirmationModal1 = ({ transaction, handleCancelTransactionPost, onClose }) => {

    // useEffect(() => {console.log(transaction);}, [transaction]);
    

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Desc */}
                <div className="text-center mar-bottom-1 d-flex flex-direction-y gap3">
                    <div className="text-m1 fw-bold w-100">Cancel this Transaction?</div>
                    <div className="text-m2 w-50 m-auto">transaction for "{transaction.property.project_model}" will be cancelled</div>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <div 
                    onClick={() => {handleCancelTransactionPost(transaction.id); onClose();}} 
                    className="primary-btn-black1 text-center"
                    >
                        Cancel Transaction
                    </div>
                </div>
            </div>
        </div>
    );
};

ClientCancelTransactionConfirmationModal1.propTypes = {
    onClose: propTypes.func.isRequired,
    handleCancelTransactionPost: propTypes.func.isRequired
};