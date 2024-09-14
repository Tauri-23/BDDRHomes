import { Outlet, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { PropertyBox1 } from "../../components/property_box1";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { ClientSkeletonListingBox, PropertyListedCategorySkeleton } from "../../Skeletons/client-listing-skeletons";
import { fetchAllClientWishlists } from "../../Services/ClientWishlistService";
import { notify } from "../../assets/js/utils";
import { useStateContext } from "../../contexts/ContextProvider";
import { fetchPropertyAmenities, fetchPropertyTypes, fetchPublishedProperties } from "../../Services/GeneralPropertiesService";
import { useModal } from "../../contexts/ModalContext";

export default function ClientIndex() {
    const {user} = useStateContext();
    const {showModal} = useModal();
    const [properties, setProperties] = useState(null);
    const [wishlists, setWishlists] = useState([]);
    const [propTypes, setPropTypes] = useState(null);
    const [amenities, setAmenities] = useState(null);

    const [selectedPropType, setSelectedPropType] = useState("");



    /*
    | Get all necessary datas from db
    */
    useEffect(() => {
        const getPublishedProperties = async() => {
            try {
                const data = await fetchPublishedProperties();
                setProperties(data);                
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

        const getAllAmenities = async() => {
            try {
                const data = await fetchPropertyAmenities();
                setAmenities(data);
            } catch(error) {console.error(error)}
        }
        
        if(user) {
            getPublishedProperties();
            getAllClientWishlists(user.id);
            getAllPropTypes();
            getAllAmenities();
        }
    }, []);



    /* 
    | Checkers
    */
    const isInWishlist = (propId) => {
        if (wishlists && Array.isArray(wishlists)) {
            // Ensure propId is treated as a string for comparison
            const propIdStr = String(propId);
    
            // Check if any wishlist contains the propertyId
            return wishlists.some(wishlist =>
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
                setWishlists(prevWishlists => (
                   [...prevWishlists, data.wishlist]
                ));
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
            const updatedWishlists = prevWishlists.map(prevWishlist => {
                const updatedProperties = prevWishlist.wishlist_properties.filter(wishlistProp => 
                    String(wishlistProp.property.id) !== String(propId)
                );
    
                return {
                    ...prevWishlist,
                    wishlist_properties: updatedProperties
                };
            });
    
            // Return the updated state object
            return updatedWishlists;
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
        const formData = new FormData();
        formData.append('wishlistId', wishlistId);
        formData.append('wishlistName', wishlistName);
        formData.append('propId', propId);

        axiosClient.post('/client-add-property-to-wishlist', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                setWishlists(prevWishlists => {
                    const updatedWishlists = prevWishlists.map(prevWishlist => {                            
                        if(String(prevWishlist.id) === String(wishlistId)) {
                            return {
                                ...prevWishlist,
                                wishlist_properties: [
                                    ...prevWishlist.wishlist_properties,
                                    {id: data.id, 
                                    wishlist: String(wishlistId), 
                                    property: {id: String(propId)},}
                                ]
                            };
                        }
                        return prevWishlist;
                    });
        
                    return updatedWishlists;
                })                
            }
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        })
    }


    
    /* 
    | Filter
    */
    const handleFilterPressed = () => {
        showModal('PropertySellingFilterModal1', {amenities});
    }
    
    
    /* 
    |   For Debugging
    */
    // useEffect(() => {
    //     console.log(properties);
    // }, [properties]);

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
                    {propTypes && propTypes.length > 0 && (
                        <div className={`listing-category-box ${selectedPropType === "" ? "active" : ""}`} onClick={() => setSelectedPropType("")}>
                            <Icon.Grid className='text-l2'/>
                            <div className="listing-category-box-text">All</div>
                        </div>
                    )}
                    {propTypes && propTypes.length > 0 && propTypes.map(propType => (
                        <div key={propType.id} className={`listing-category-box ${selectedPropType === propType.id ? "active" : ""}`} onClick={() => setSelectedPropType(propType.id)}>
                            <img src={`/src/assets/media/icons/${propType.icon}`} className='category-icon1' alt=""/>
                            
                            <div className="listing-category-box-text">{propType.type_name}</div>
                        </div>
                    ))}

                    {!propTypes && Array.from({length: 10}, (_, index) => index).map(x => (
                        <PropertyListedCategorySkeleton key={x}/>
                    ))}
                </div>
                <button className="secondary-btn-black2 gap3 d-flex align-items-center" onClick={handleFilterPressed}><Icon.Sliders/>Filter</button>
            </div>

            <div className="content1">
                {/* Properties Container */}
                <div className="properties-cont">


                    {/* Render Property boxes */}
                    {properties && wishlists
                    ?
                    
                    properties.map(prop => {
                        const inWishlist = isInWishlist(prop.id);
                        return (
                            <PropertyBox1
                                key={prop.id}
                                wishlists={wishlists}
                                property={prop}
                                agent={prop.agent}
                                propId={prop.id}
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