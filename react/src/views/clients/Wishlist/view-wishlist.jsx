import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { fetchSpecificWishlistById } from "../../../Services/ClientWishlistService";
import { ClientSkeletonListingBox } from "../../../Skeletons/client-listing-skeletons";
import { PropertyBox1 } from "../../../components/property_box1";
import axiosClient from "../../../axios-client";
import { notify } from "../../../assets/js/utils";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../../contexts/ContextProvider";

export default function ClientViewWishlist() {
    const {user} = useStateContext();
    const {wishlistId} = useParams();
    const [wishlist, setWishlist] = useState([]);


    useEffect(() => {
        const getWishlistData = async() => {
            try {
                const data = await fetchSpecificWishlistById(wishlistId);
                setWishlist(data);
            } catch(error) {console.error(error);}
        }

        getWishlistData();
    }, [])


    /*
    | Debugging
    */
    useEffect(() => {
        console.log(wishlist);
    }, [wishlist])



    /*
    |   On Heart Press
    */
    const handleRemovePropFromWishlist = (propId) => {
        const formData = new FormData();
        formData.append('clientId',  user.id);
        formData.append('propId', propId);

        setWishlist(prevWishlist => {
            const updatedProperties = prevWishlist.wishlist_properties.filter(
                wishlistProp => String(wishlistProp.property.id) !== String(propId)
            );

            return {
                ...prevWishlist,
                wishlist_properties: updatedProperties
            };
        });

        axiosClient.post('/client-remove-property-from-wishlist', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
            }
            else {
                notify('error', data.message, 'top-center', 3000);
                console.error(data.message);
            }
        }).catch(error => console.error(error));        
    };


    
    return(
        <div className="content2">
            <Link to={'/BDDRClient/Wishlists'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none mar-bottom-1">
                <Icon.ChevronLeft/>
                Back
            </Link>
            {wishlist && (
                <>
                    <div className="text-l1 fw-bold mar-bottom-1">{wishlist.name}</div>
                </>
            )}
            {/* Properties Container */}
            <div className="properties-cont">


                {/* Render Property boxes */}
                {wishlist && wishlist.wishlist_properties
                ?
                
                wishlist.wishlist_properties.map(prop => {
                    return (
                        <PropertyBox1
                            key={prop.id}
                            wishlists={wishlist}
                            property={prop.property}
                            propId={prop.property.id}
                            isInWishlist={true}
                            handleRemovePropFromWishlist={handleRemovePropFromWishlist}
                        />
                    );
                })
                : Array.from({length:10}, (_, index) => index).map((x) => (
                    <ClientSkeletonListingBox key={x}/>
                ))}

                


            </div>
        </div>
    )
}