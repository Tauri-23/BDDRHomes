import { useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';

export const ClientWishlistBox1 = ({wishlist, handleRemoveWishlist}) => {
    // useEffect(() => {
    //     console.log(wishlist);
    // }, [wishlist]);

    const handleWishlistClick = (event) => {
        event.stopPropagation();
        window.location.href =  `/BDDRClient/ViewWishlist/${wishlist.id}`
    }

    const handleWishlistXBtn = (event) => {
        event.stopPropagation();
        handleRemoveWishlist({id: wishlist.id, name: wishlist.name});
    }

    return (
        <div className="wishlist-box" onClick={handleWishlistClick}>
            <div onClick={handleWishlistXBtn} className="remove-wishlist-btn">
                <Icon.X/>
            </div>
            <div className="wishlist-box-img-cont">
                <div className="wishlist-box-img">
                    {wishlist.wishlist_properties?.length > 0 
                    ? (<img src={`/src/assets/media/properties/${wishlist.wishlist_properties[0].property_listing.property.photos[0].filename}`} alt="" />)
                    : ''}
                </div>
            </div>
                    
                    
            <div className="">
                <div className="text-m2 fw-bold">{wishlist.name}</div>
                <div className="text-m3">Today</div>
            </div>
        </div>
    );
}