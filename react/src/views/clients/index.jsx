import { Outlet, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { PropertyBox1 } from "../../components/property_box1";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { ClientSkeletonListingBox, PropertyListedCategorySkeleton, PropertyListedFilterBtnSkeleton, PropertyListedViewAsBtnSkeleton } from "../../Skeletons/client-listing-skeletons";
import { fetchAllClientWishlists } from "../../Services/ClientWishlistService";
import { notify } from "../../assets/js/utils";
import { useStateContext } from "../../contexts/ContextProvider";
import { fetchPropertyAmenities, fetchPropertyTypes, fetchPublishedProperties } from "../../Services/GeneralPropertiesService";
import { useModal } from "../../contexts/ModalContext";
import { KMeansClusteringMachine } from "../../algoModels/k_means_clustering_machine";
import { CollabForPropViewMachine } from "../../algoModels/collab_for_property_views_machine";
import { ContentBasedForPrefLocMachine } from "../../algoModels/content_based_pref_loc_machine";

export default function ClientIndex() {
    const {user} = useStateContext();
    const {showModal} = useModal();
    const [properties, setProperties] = useState(null);
    const [recPropBasedPropViewTimes, setRecPropBasedPropViewTimes] = useState(null);
    const [recPropBasedPrefLoc, setRecPropBasedPrefLoc] = useState(null);

    /* 
    | This is for all properties, when i select property type all the properties will store here
    | and the filtered property will be store in properties.
    */
    const [propertiesCont2, setPropertiesCont2] = useState(null);
    const [wishlists, setWishlists] = useState([]);
    const [propTypes, setPropTypes] = useState(null);
    const [amenities, setAmenities] = useState(null);

    // For Filters
    const [propViewAs, setPropViewAs] = useState(2);
    const [selectedPropType, setSelectedPropType] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [bedroomNumbers, setBedroomNumbers] = useState(0);
    const [bathroomNumbers, setBathroomNumbers] = useState(0);
    const [carportNumbers, setCarportNumbers] = useState(0);



    /*
    | Get all necessary datas from db
    */
    useEffect(() => {
        const getPublishedProperties = async() => {
            // KMeansClusteringMachine([1]).then(propertiesToReturn => {
            //     setProperties(propertiesToReturn.properties.flatMap(prop => prop.properties));
            // });

            CollabForPropViewMachine(user.id).then(data => {
                setRecPropBasedPropViewTimes(data.topRecommendations);
            });

            ContentBasedForPrefLocMachine(user.id).then(data => {
                setRecPropBasedPrefLoc(data.properties);
            })

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

        const getAll = async() => {
            getPublishedProperties();
            getAllClientWishlists(user.id);       
            getAllPropTypes();
            getAllAmenities();
                 
        }
        
        if(user) {
            getAll();
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
        showModal('PropertySellingFilterModal1', 
            {
                amenities, selectedAmenities, setSelectedAmenities,
                bedroomNumbers, setBedroomNumbers,
                bathroomNumbers, setBathroomNumbers,
                carportNumbers, setCarportNumbers,
            });
    }

    useEffect(() => {
        if(selectedPropType === "") {
            setProperties(propertiesCont2);
            setPropertiesCont2(null);
        }

        if(selectedPropType !== "" && propertiesCont2 === null) {
            setPropertiesCont2(properties);
        }
        
        if(selectedPropType !== "") {
            setProperties(prevProp => {
                if(!propertiesCont2) {
                    return prevProp.filter(prop => prop.property_type.id === selectedPropType) // Filter the properties 
                } else {
                    return propertiesCont2.filter(prop => prop.property_type.id === selectedPropType) // get the propertiesCont2 and filter it.
                }
                
            });
        }
    }, [selectedPropType]);
    
    
    /* 
    |   For Debugging
    */
    useEffect(() => {
        console.log(recPropBasedPropViewTimes);
    }, [recPropBasedPropViewTimes]);
    useEffect(() => {
        console.log(recPropBasedPrefLoc);
    }, [recPropBasedPrefLoc]);

    // useEffect(() => {
    //     console.log(propertiesCont2);
    // }, [propertiesCont2]);

    // useEffect(() => {
    //     console.log(wishlists);
    // }, [wishlists]);

    // useEffect(() => {
    //     console.log(propTypes);
    // }, [propTypes]);

    // useEffect(() => {
    //     console.log(selectedAmenities)
    // }, [selectedAmenities]);

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

                
                {amenities && (
                    <div className="d-flex gap3 align-items-center">
                        <select className="secondary-btn-black2 gap3 d-flex align-items-center" value={propViewAs} onChange={(e) => setPropViewAs(e.target.value)}>
                            <option value="1">View as monthly amortization</option>
                            <option value="2">View as price</option>
                            <option value="3">View as required income</option>
                        </select>
                        <button className="secondary-btn-black2 gap3 d-flex align-items-center" onClick={handleFilterPressed}><Icon.Sliders/>Filter</button>
                    </div>
                )}

                {!amenities && (
                    <div className="d-flex gap3 align-items-center">
                        <PropertyListedViewAsBtnSkeleton/>
                        <PropertyListedFilterBtnSkeleton/>
                    </div>
                )}                    
            </div>

            <div className="content1">
                {/* Properties Container */}
                <div className="properties-cont">


                    {/* Render Property boxes */}

                    {/* Based on Prop View times (Collaborative Filtering) */}
                    {properties && properties.length > 0 && wishlists && properties.map(prop => {
                        const inWishlist = isInWishlist(prop.id);

                        if(recPropBasedPropViewTimes.some(rec => rec.property == prop.id)) {
                            console.log();
                            return (
                                <PropertyBox1
                                    key={prop.id}
                                    wishlists={wishlists}
                                    property={prop}
                                    viewAs={propViewAs}
                                    propId={prop.id}
                                    isInWishlist={inWishlist}
                                    handleCreateWishlistAndAddPropToIt={handleCreateWishlistAndAddPropToIt}
                                    handleRemovePropFromWishlist={handleRemovePropFromWishlist}
                                    handleAddPropToWishlist={handleAddPropToWishlist}
                                />
                            );
                        }
                        
                    })}

                    {/* Based on Prefered Location */}
                    {properties && properties.length > 0 && wishlists && recPropBasedPrefLoc.map(prop => {
                        const inWishlist = isInWishlist(prop.id);
                        return (
                            <PropertyBox1
                                key={prop.id}
                                wishlists={wishlists}
                                property={prop}
                                viewAs={propViewAs}
                                propId={prop.id}
                                isInWishlist={inWishlist}
                                handleCreateWishlistAndAddPropToIt={handleCreateWishlistAndAddPropToIt}
                                handleRemovePropFromWishlist={handleRemovePropFromWishlist}
                                handleAddPropToWishlist={handleAddPropToWishlist}
                            />
                        );
                        
                    })}

                    {/* General Properties does not in the recommendations */}
                    {properties && properties.length > 0 && wishlists && properties.map(prop => {
                        const inWishlist = isInWishlist(prop.id);
                        if(!recPropBasedPropViewTimes.some(rec => rec.property == prop.id) && !recPropBasedPrefLoc.some(rec => rec.id == prop.id)) {
                            return (
                                <PropertyBox1
                                    key={prop.id}
                                    wishlists={wishlists}
                                    property={prop}
                                    viewAs={propViewAs}
                                    propId={prop.id}
                                    isInWishlist={inWishlist}
                                    handleCreateWishlistAndAddPropToIt={handleCreateWishlistAndAddPropToIt}
                                    handleRemovePropFromWishlist={handleRemovePropFromWishlist}
                                    handleAddPropToWishlist={handleAddPropToWishlist}
                                />
                            );
                        }
                        
                    })}

                    {!properties && Array.from({length:10}, (_, index) => index).map((x) => (
                        <ClientSkeletonListingBox key={x}/>
                    ))}

                    {properties && properties.length < 1 && (
                        <div className="">
                            <div className="text-l2 fw-bold">No properties yet</div>
                            <div className="text-m3">Stay tuned for more properties.</div>
                        </div>
                    )}

                    


                </div>
            </div>
        </>
    )
};