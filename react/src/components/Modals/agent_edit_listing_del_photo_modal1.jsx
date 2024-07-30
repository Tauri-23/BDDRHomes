import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const AgentEditListingDelPhotoModal1 = ({photo, removePhotoHandler, onClose }) => {

    useEffect(() => {console.log(photo);}, photo);
    

    return(
        <div className= {`modal1`}>
            <div className="modal-box3" key={photo.id}>
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Image */}
                    <div className="listing-option-modal-pic">
                        <img 
                            src={`/src/assets/media/properties/${photo[0].filename}`} 
                            alt={photo[0].id} 
                            />
                    </div>

                {/* Desc */}
                <div className="text-m1 fw-bold text-center mar-bottom-1">Do you want to remove this photo</div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <div 
                    onClick={() => {removePhotoHandler(); onClose();}} 
                    className="primary-btn-black1 text-center"
                    >
                        Remove
                    </div>
                    
                    <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    );
};

AgentEditListingDelPhotoModal1.propTypes = {
    onClose: propTypes.func.isRequired,
    removePhotoHandler: propTypes.func.isRequired,
    photo: propTypes.array.isRequired
};