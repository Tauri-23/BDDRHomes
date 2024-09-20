import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';

export const AgentGetTransactionConfirmationModal1 = ({ transaction, handleGetTransactionPost, onClose }) => {

    // useEffect(() => {console.log(wishlist);}, wishlist);
    

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Desc */}
                <div className="text-center mar-bottom-1 d-flex flex-direction-y gap3">
                    <div className="text-m1 fw-bold w-100">Get this transaction?</div>
                    <div className="text-m2 w-50 m-auto">"{transaction}" will be assigned to you</div>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <div 
                    onClick={() => {handleGetTransactionPost(transaction); onClose();}} 
                    className="primary-btn-black1 text-center"
                    >
                        Get Transaction
                    </div>
                    
                    <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    );
};

AgentGetTransactionConfirmationModal1.propTypes = {
    onClose: propTypes.func.isRequired
};