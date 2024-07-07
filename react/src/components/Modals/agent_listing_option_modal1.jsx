import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';

export const AgentListingOptionModal1 = ({listing, onClose }) => {

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Image */}
                <div className="listing-option-modal-pic">
                    <img src={`/src/assets/media/properties/${listing.image}`} alt={listing.title} />
                </div>

                {/* Desc */}
                <div className="text-m2 fw-bold text-center">{listing.title}</div>
                <div className="text-m3 text-center mar-bottom-1">{listing.address}</div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                    <div className="primary-btn-black1 text-center">Edit Listing</div>
                    <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center">
                        <Icon.Trash3Fill/>
                        Remove Listing
                    </div>
                </div>
            </div>
        </div>
    );
};

AgentListingOptionModal1.propTypes = {
    onClose: propTypes.func.isRequired,
    listing: propTypes.shape({
        image: propTypes.string,
        title: propTypes.string,
        address: propTypes.string
    }).isRequired
};