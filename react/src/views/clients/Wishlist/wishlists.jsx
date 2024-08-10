import { useEffect, useState } from 'react';
import '/src/assets/css/wishlist.css';
import { Link, useOutletContext } from "react-router-dom";
import { fetchAllClientWishlists } from '../../../Services/ClientWishlistService';
import * as Icon from 'react-bootstrap-icons';
import axiosClient from '../../../axios-client';
import { notify } from '../../../assets/js/utils';
import { useModal } from '../../../contexts/ModalContext';
import { ClientSkeletonWishlistBox } from '../../../Skeletons/client-wishlist-skeletons';
import { ClientWishlistBox1 } from '../../../components/client_wishlist_box1';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function ClientWishLists() {

    const {user} = useStateContext();
    const {showModal} = useModal();
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
        if(user) {
            
    
            getAllWishlists();
        }
    }, []);

    /*
    |   Debug
    */
    // useEffect(() => {
    //     console.log(wishlists);
    // }, [wishlists]);



    const handleRemoveWishlist = (wishlist) => {
        showModal('ClientDelWishlistModal1', {wishlist, handleRemoveWishlistPost});
    }

    const handleRemoveWishlistPost = (wishlistId) => {
        
        const formData = new FormData();

        formData.append('wishlistId', wishlistId);

        axiosClient.post('/client-del-wishlist', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                setWishlists(prevWislist => {
                    return {data: prevWislist.data.filter(wishlist => String(wishlist.id) !== String(wishlistId))};
                });
            }
        })
    }
    

    return (
        <div className="content2">
            <div className="text-l1 fw-bold">Wishlists</div>

            <div className="wishlist-cont">
                {wishlists.data && (
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
                
                {/* Render Wishlists */}
                {wishlists.data?.length > 0 && wishlists.data.map(wishlist => (
                    <ClientWishlistBox1 key={wishlist.id} wishlist={wishlist} handleRemoveWishlist={handleRemoveWishlist}/>
                ))}


                {/* Wishlists Skeleton */}
                {!wishlists.data && Array.from({length: 10}, (_, index) => index).map(x => (
                    <ClientSkeletonWishlistBox key={x}/>
                ))}
                

                
            </div>
        </div>
    )
};