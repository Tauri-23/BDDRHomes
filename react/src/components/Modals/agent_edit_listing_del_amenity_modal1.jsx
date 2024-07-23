import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const AgentEditListingDelAmenityModal1 = ({amenity, removeAmenityHandler, onClose }) => {
    return(
        <div className= {`modal1`}>
            <div className="modal-box3" key={amenity.id}>
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Image */}
                    <div className="mar-y-1 d-flex justify-content-center">
                        <img 
                            className="icon-l"
                            src={`/src/assets/media/icons/${amenity[0].amenity.icon}`} 
                            alt={amenity[0].amenity.amenity_name} 
                            />
                    </div>

                {/* Desc */}
                <div className="text-m1 fw-bold text-center mar-bottom-1">Do you want to remove this amenity: {amenity[0].amenity.amenity_name}</div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <div onClick={() => {removeAmenityHandler(); onClose();}} className="primary-btn-black1 text-center">Remove</div>
                    
                    <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    );
};

AgentEditListingDelAmenityModal1.propTypes = {
    onClose: propTypes.func.isRequired,
    removeAmenityHandler: propTypes.func.isRequired,
    amenity: propTypes.array.isRequired
};