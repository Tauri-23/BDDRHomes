import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const ClientAddToWishlistModal1 = ({ wishlists, propertyId, onClose }) => {   

    return(
        <div className= {`modal1`}>
            <div className="modal-box2">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                <div className="text-l3 fw-bold mar-bottom-1 text-center">Create wishlist</div>
                
                <div className="d-flex flex-direction-y gap4 mar-bottom-l3">
                    <label htmlFor="wishlist_name">Name</label>
                    <input type='text' className="edit-text-1" id='wishlist_name'/>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                    <div className='text-decoration-none' onClick={onClose}>
                        <div className="primary-btn-black1 text-center">Create</div>
                    </div>
                    
                    <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </div>
                </div>
            </div>
        </div>
    );
};

ClientAddToWishlistModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};