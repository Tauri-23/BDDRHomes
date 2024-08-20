import { Outlet, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { PropertyBox1 } from "../../components/property_box1";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { fetchAllProperties } from "../../Services/ClientListingService";
import { ClientSkeletonListingBox } from "../../Skeletons/client-listing-skeletons";
import { fetchAllClientWishlists } from "../../Services/ClientWishlistService";
import { notify } from "../../assets/js/utils";
import { string } from "prop-types";
import { useStateContext } from "../../contexts/ContextProvider";

export default function ClientIndex() {
    const {user} = useStateContext();
    const [properties, setProperties] = useState([]);
    const [wishlists, setWishlists] = useState([]);
    const [propTypes, setPropTypes] = useState([]);



    /*
    |    Get all necessary datas from db
    */
    useEffect(() => {
        const getListedProperties = async() => {
            try {
                //const data = await fetchAllProperties();
                //setProperties(data);                
            } catch (error) {
                console.error(error);
            }
        }

        const getAllClientWishlists = async(id) => {
            try {
                const data = await fetchAllClientWishlists(id);
                setWishlists(data);
            } catch (error) {
                console.error(error);
            }

        }

        const getAllPropTypes = async() => {
            try {
                const data = await fetchPropertyTypes();
                setPropTypes(data);
            } catch (error) {
                console.error(error);
            }
        }
        
        if(user) {
            getListedProperties();
            getAllClientWishlists(user.id);
            getAllPropTypes();
        }
    }, []);



    /* 
    |   Checkers
    */
    const isInWishlist = (propId) => {
        if (wishlists.data && Array.isArray(wishlists.data)) {
            // Ensure propId is treated as a string for comparison
            const propIdStr = String(propId);
    
            // Check if any wishlist contains the propertyId
            return wishlists.data.some(wishlist =>
                wishlist.wishlist_properties &&
                wishlist.wishlist_properties.some(wishlistProp => 
                    String(wishlistProp.property.id) === propIdStr
                )
            );
        }
        return false;
    }
    
    

    /*
    |   On Heart Press
    */
    const handleCreateWishlistAndAddPropToIt = (wishlistName, propId) => {
        const formData = new FormData();
        formData.append('clientId', user.id);
        formData.append('wishlistName', wishlistName)
        formData.append('propertyId',propId)

        axiosClient.post('/client-create-wishlist-put-property', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setWishlists(prevWishlists => ({
                    data: [...prevWishlists.data, data.wishlist]
                }));
                notify('default', data.message, 'bottom-left', 3000);
            } else {
                notify('error', data.message, 'top-center', 3000);
            }
        })
        .catch(error => {console.error(error)});
    }

    const handleRemovePropFromWishlist = (propId) => {
        const formData = new FormData();
        formData.append('clientId',  user.id);
        formData.append('propId', propId);

        setWishlists(prevWishlists => {
            const updatedWishlists = prevWishlists.data.map(prevWishlist => {
                const updatedProperties = prevWishlist.wishlist_properties.filter(
                    wishlistProp => String(wishlistProp.property.id) !== String(propId)
                );
    
                return {
                    ...prevWishlist,
                    wishlist_properties: updatedProperties
                };
            });
    
            // Return the updated state object
            return {
                data: updatedWishlists
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

    const handleAddPropToWishlist = (propId, wishlistId, wishlistName) => {
        // setWishlists(prevWishlist => {
        //     const updatedWishlists = prevWishlist.data.map(prevWishlist => {                            
        //         if(String(prevWishlist.id) === String(wishlistId)) {
        //             return {
        //                 ...prevWishlist,
        //                 wishlist_properties: [
        //                     ...prevWishlist.wishlist_properties,
        //                     {id: 123, wishlist: String(wishlistId), property: String(propId)}
        //                 ]
        //             };
        //         }
        //         return prevWishlist;
        //     });

        //     return {data: updatedWishlists};
        // })

        const formData = new FormData();
        formData.append('wishlistId', wishlistId);
        formData.append('wishlistName', wishlistName);
        formData.append('propId', propId);

        axiosClient.post('/client-add-property-to-wishlist', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                setWishlists(prevWishlist => {
                    const updatedWishlists = prevWishlist.data.map(prevWishlist => {                            
                        if(String(prevWishlist.id) === String(wishlistId)) {
                            return {
                                ...prevWishlist,
                                wishlist_properties: [
                                    ...prevWishlist.wishlist_properties,
                                    {id: data.id, wishlist: String(wishlistId), property: {id: String(propId)}}
                                ]
                            };
                        }
                        return prevWishlist;
                    });
        
                    return {data: updatedWishlists};
                })                
            }
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        })
    }
    
    
    
    // useEffect(() => {
    //     console.log(properties);
    // }, [properties.data]);

    // useEffect(() => {
    //     console.log(wishlists);
    // }, [wishlists]);

    // useEffect(() => {
    //     console.log(propTypes);
    // }, [propTypes]);

    return (
        <>
            {/* Property Types Category-btns */}
            <div className="listing-category-nav">

                {/* Categories */}
                <div className="listing-category-cont">
                    {propTypes.length > 0 && (
                        <div className="category-btn-blue1 active">
                            <Icon.Grid className='text-l2'/>
                            <div className="category-btn-text">All</div>
                        </div>
                    )}
                    {propTypes.length > 0 && propTypes.map(propType => (
                        <div key={propType.id} className="category-btn-blue1">
                            <img src={`/src/assets/media/icons/${propType.icon}`} className='category-icon1' alt=""/>
                            
                            <div className="category-btn-text">{propType.type_name}</div>
                        </div>
                    ))}
                </div>
                <div className="secondary-btn-black2 gap3 d-flex align-items-center"><Icon.Sliders/>Filter</div>
            </div>

            <div className="content1">
                {/* Properties Container */}
                <div className="properties-cont">


                    {/* Render Property boxes */}
                    {properties.data && wishlists.data
                    ?
                    
                    properties.data.map(prop => {
                        const inWishlist = isInWishlist(prop.id);
                        return (
                            <PropertyBox1
                                key={prop.id}
                                wishlists={wishlists}
                                property={prop}
                                isInWishlist={inWishlist}
                                handleCreateWishlistAndAddPropToIt={handleCreateWishlistAndAddPropToIt}
                                handleRemovePropFromWishlist={handleRemovePropFromWishlist}
                                handleAddPropToWishlist={handleAddPropToWishlist}
                            />
                        );
                    })
                    : Array.from({length:10}, (_, index) => index).map((x) => (
                        <ClientSkeletonListingBox key={x}/>
                    ))}

                    


                </div>
            </div>
        </>
    )
};