import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const AdminPropertiesOptionModal1 = ({property, handleRemovePropertyConfirmation, onClose }) => {


    return(
        <div className= {`modal1`}>
            <div className="modal-box3" key={property.id}>
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Image */}
                <div className="listing-option-modal-pic">
                    <img src={`/src/assets/media/properties/${property.photos[0].filename}`} alt={property.name} />
                </div>

                {/* Desc */}
                <div className="text-m2 fw-bold text-center">{property.name}</div>
                <div className="text-m3 text-center mar-bottom-1">{property.address}</div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                    <Link to={`Properties/EditProperty/${property.id}/Photos`} className='text-decoration-none' onClick={onClose}>
                        <div className="primary-btn-black1 text-center">Edit Property</div>
                    </Link>
                    
                    <div onClick={() => handleRemovePropertyConfirmation(property)} className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center">
                        <Icon.Trash3Fill/>
                        Remove Listing
                    </div>
                </div>
            </div>
        </div>
    );
};

AdminPropertiesOptionModal1.propTypes = {
    onClose: propTypes.func.isRequired,
    property: propTypes.shape({
        image: propTypes.string,
        title: propTypes.string,
        address: propTypes.string
    }).isRequired
};