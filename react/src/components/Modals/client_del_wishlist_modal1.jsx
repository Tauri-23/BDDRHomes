import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const ClientDelWishlistModal1 = ({ wishlist, handleRemoveWishlistPost, onClose }) => {

    // useEffect(() => {console.log(wishlist);}, wishlist);
    

    return(
        <div className= {`modal1`}>
            <div className="modal-box3">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Desc */}
                <div className="text-center mar-bottom-1 d-flex flex-direction-y gap3">
                    <div className="text-m1 fw-bold w-100">Delete this wishlist?</div>
                    <div className="text-m2 w-50 m-auto">"{wishlist.name}" will be permanently deleted</div>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <div 
                    onClick={() => {handleRemoveWishlistPost(wishlist.id); onClose();}} 
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

ClientDelWishlistModal1.propTypes = {
    onClose: propTypes.func.isRequired,
    handleRemoveWishlistPost: propTypes.func.isRequired
};