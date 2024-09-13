import * as Icon from "react-bootstrap-icons";
import propTypes from 'prop-types';

const ClientEditPfpModal1 = ({ pfp, handleChangePfp, onClose }) => {
    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="d-flex gap1 mar-bottom-l1 align-items-center position-relative">
                    <div className="circle-btn1 text-l1 position-absolute" onClick={onClose}>
                        <Icon.X/>
                    </div>
                    <div className="text-l3 fw-bold m-auto">Edit Profile Picture</div>
                </div>

                {/* pfp */}
                <div className="client-edit-profile-pfp mar-bottom-l1 m-start-auto m-end-auto">
                    <img className="position-absolute h-100" src={URL.createObjectURL(pfp)} alt="new pfp"/>
                </div>

                {/* Btns */}
                <div className="d-flex justify-content-between">
                        
                    <button 
                    onClick={() => {handleChangePfp(); onClose();}}
                    className={`primary-btn-black1 text-center`}
                    >
                        Save
                    </button>
                    
                    <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </div>
                </div>  
            </div>
        </div>
    );
}

ClientEditPfpModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};

export default ClientEditPfpModal1;