import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axiosClient from '../../axios-client';
import { isEmptyOrSpaces, notify } from '../../assets/js/utils';

export const ClientAddToWishlistModal1 = ({ wishlists, propertyId, clientId, setWishlists, onClose }) => {   
    
    const [wishlistName, setWishlistName] = useState(null);
    const nameRef = useRef();

    const handleCreateWishlits = () => {
        const formData = new FormData();
        formData.append('clientId', clientId);
        formData.append('wishlistName', wishlistName)
        formData.append('propertyId', propertyId)

        axiosClient.post('/client-create-wishlist-put-property', formData)
        .then(({data}) => {
            if(data.status === 200) {
                console.log(data.wishlist_property)
                setWishlists([...wishlists, data.wishlist_property]);
                notify('success', data.message, 3000);
            } else {
                notify('error',  data.message, 3000);
            }
        })
        .catch(error => {console.error(error)});
    }

    return(
        <div className= {`modal1`}>
            <div className="modal-box2">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                <div className="text-l3 fw-bold mar-bottom-1 text-center">Create wishlist</div>
                
                <div className="d-flex flex-direction-y gap4 mar-bottom-l3">
                    <label htmlFor="wishlist_name">Name</label>
                    <input ref={nameRef} type='text' className="edit-text-1" id='wishlist_name' onInput={() => setWishlistName(nameRef.current.value)}/>
                </div>

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                    <button 
                    onClick={() => {handleCreateWishlits(); onClose();}}
                    disabled={isEmptyOrSpaces(wishlistName)} 
                    className={`w-100 primary-btn-black1 text-center ${isEmptyOrSpaces(wishlistName) ? 'disabled' : ''}`}
                    >
                        Create
                    </button>
                    
                    <div className={`secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center`} onClick={onClose}>
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