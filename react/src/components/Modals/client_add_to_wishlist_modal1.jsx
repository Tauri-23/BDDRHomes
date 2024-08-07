import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axiosClient from '../../axios-client';
import { isEmptyOrSpaces, notify } from '../../assets/js/utils';

export const ClientAddToWishlistModal1 = ({ propId, wishlists, handleCreateWishlistAndAddPropToIt, handleAddPropToWishlist, onClose }) => {   

    const nameRef = useRef();

    const [isCreateListing, setCreateListing] = useState(wishlists.data.length < 1);

    // useEffect(() => {
    //     console.log(wishlists);
    // }, [])
    

    return(
        <div className= {`modal1`}>
            <div className="modal-box2">

                <div className="d-flex gap1 mar-bottom-l1 align-items-center position-relative">
                    <div className="circle-btn1 text-l1 position-absolute" onClick={onClose}>
                        <Icon.X/>
                    </div>

                    <div className="text-l3 fw-bold text-center w-100">{wishlists.length < 1 ? 'Create wishlist' : 'Add to Wishlist'}</div>
                </div>
                

                
                
                {isCreateListing 
                ?
                // Create Wishlist
                (<div className="d-flex flex-direction-y gap4 mar-bottom-l3">
                    <label htmlFor="wishlist_name">Name</label>
                    <input ref={nameRef} type='text' className="edit-text-1" id='wishlist_name'/>
                </div>)
                :

                // Select
                (<div className="wishlists-cont-modal mar-bottom-l1">
                    {wishlists.data.map(wishlist => (
                        <div
                        key={wishlist.id} 
                        className="wishlist-box"
                        onClick={() => {handleAddPropToWishlist(propId, wishlist.id, wishlist.name); onClose()}}>
                            <div className='wishlist-box-img-cont-modal'>
                                <div className={`wishlist-box-img`}>
                                    {wishlist.wishlist_properties.length > 0 ? (<img src="/src/assets/media/properties/anyana-paris-test.jpeg" alt="" />) : ''}
                                    
                                </div>                                
                            </div> 
                            {wishlist.name}
                        </div>                        
                    ))}
                        
                </div> )               
                }

                {/* Btns */}
                <div className={`d-flex flex-direction-y gap3 ${!isCreateListing ? 'd-none' : ''}`}>
                    <button 
                    onClick={() => {handleCreateWishlistAndAddPropToIt(nameRef.current?.value, propId); onClose();}}
                    disabled={isEmptyOrSpaces(String(nameRef.current?.value || ''))} 
                    className={`w-100 primary-btn-black1 text-center ${isEmptyOrSpaces(String(nameRef.current?.value || '')) ? 'disabled' : ''}`}
                    >
                        Create
                    </button>
                    
                    <div className={`secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center`} onClick={onClose}>
                        Cancel
                    </div>
                </div>

                <div className={`d-flex flex-direction-y gap3 ${!isCreateListing ? '' : 'd-none'}`}>
                    <button
                    className={`w-100 primary-btn-black1 text-center`}
                    onClick={() => setCreateListing(true)}
                    >
                        Create new listing
                    </button>
                </div>
            </div>
        </div>
    );
};

ClientAddToWishlistModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};