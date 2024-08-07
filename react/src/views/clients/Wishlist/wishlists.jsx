import { useEffect, useState } from 'react';
import '/src/assets/css/wishlist.css';
import { Link, useOutletContext } from "react-router-dom";
import { fetchAllClientWishlists } from '../../../Services/ClientWishlistService';

export default function ClientWishLists() {

    const {user} = useOutletContext();
    const [wishlists, setWishlists] = useState([]);
    


    useEffect(() => {
        const getAllWishlists = async() => {
            try {
                const data = await fetchAllClientWishlists(user.id);
                setWishlists(data);
            }
            catch(error) {
                console.error(error);
            }
        };

        getAllWishlists();
    }, []);



    useEffect(() => {
        console.log(wishlists);
    }, [wishlists]);
    

    return (
        <div className="content2">
            <div className="text-l1 fw-bold">Wishlists</div>

            <div className="wishlist-cont">
                {wishlists.data?.length > 1 && (
                    <div className="wishlist-box">
                        <div className="wishlist-box-img-cont">
                            <div className="wishlist-box-img">
                                <img src={`/src/assets/media/properties/anyana-paris-test.jpeg`} alt="" />
                            </div>
                        </div>
                        
                        
                        <div className="">
                            <div className="text-m2 fw-bold">Recently Viewed</div>
                            <div className="text-m3">Today</div>
                        </div>
                    </div>
                )}
                

                {wishlists.data?.length > 1 && wishlists.data.map(wishlist => (
                    <div key={wishlist.id} className="wishlist-box">
                        <div className="wishlist-box-img-cont">
                            <div className="wishlist-box-img">
                                {wishlist.wishlist_properties.length > 0 
                                ? (<img src={`/src/assets/media/properties/${wishlist.wishlist_properties[0].property.photos[0].filename}`} alt="" />)
                                : ''}
                            </div>
                        </div>
                        
                        
                        <div className="">
                            <div className="text-m2 fw-bold">{wishlist.name}</div>
                            <div className="text-m3">Today</div>
                        </div>
                    </div>
                ))}
                

                
            </div>
        </div>
    )
};