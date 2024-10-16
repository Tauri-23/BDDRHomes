import { Outlet, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { PropertyBox1 } from "../../components/property_box1";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

    const [wishlists, setWishlists] = useState([]);
    const [propTypes, setPropTypes] = useState(null);
    const [amenities, setAmenities] = useState(null);

    const [properties, setProperties] = useState(null);
    const [recPropBasedPropViewTimes, setRecPropBasedPropViewTimes] = useState(null);
    const [recPropBasedPrefLoc, setRecPropBasedPrefLoc] = useState(null);
    
    const [isRenderReady, setRenderReady] = useState(false);
    

    // For Filters
    const [propViewAs, setPropViewAs] = useState(2);
    const [selectedPropType, setSelectedPropType] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [bedroomNumbers, setBedroomNumbers] = useState(0);
    const [bathroomNumbers, setBathroomNumbers] = useState(0);
    const [carportNumbers, setCarportNumbers] = useState(0);
    const [filteredProp2, setFilteredProp2] = useState(null);
    const [isFiltering, setFiltering] = useState(false);



    /*
    | Get all necessary data from db
    */
    useEffect(() => {
        const getAll = async () => {
            try {
                const [publishedProps, wishlistsData, propTypesData, amenitiesData] = await Promise.all([
                    fetchPublishedProperties(),
                    fetchAllClientWishlists(user.id),
                    fetchPropertyTypes(),
                    fetchPropertyAmenities()
                ]);
    
                setProperties(publishedProps);
                setFilteredProp2(publishedProps);
                setWishlists(wishlistsData);
                setPropTypes(propTypesData);
                setAmenities(amenitiesData);
    
                // Fetch recommendations after getting properties
                const [recPropsViewTimes, recPropsPrefLoc] = await Promise.all([
                    CollabForPropViewMachine(user.id),
                    ContentBasedForPrefLocMachine(user.id)
                ]);
    
                setRecPropBasedPropViewTimes(recPropsViewTimes.topRecommendations);
                setRecPropBasedPrefLoc(recPropsPrefLoc.properties);
            } catch (error) {
                console.error(error);
            }
        };
    
        if (user) {
            getAll();
        }
    }, [user]);



    /* 
    | Checkers
    */
    const isInWishlist = useCallback((propId) => {
        if (!wishlists || !Array.isArray(wishlists)) return false;
    
        const propIdStr = String(propId);
        return wishlists.some(wishlist =>
            wishlist.wishlist_properties &&
            wishlist.wishlist_properties.some(wishlistProp => 
                String(wishlistProp.property.id) === propIdStr
            )
        );
    }, [wishlists]);
    

    // For isRenderReady
    useEffect(() => {
        setRenderReady(!!(properties && recPropBasedPropViewTimes && recPropBasedPrefLoc && wishlists));
    }, [properties, recPropBasedPropViewTimes, recPropBasedPrefLoc, wishlists]);    
    
    

    /*
    |   On Heart Press
    */
    const handleCreateWishlistAndAddPropToIt = useCallback((wishlistName, propId) => {
        const formData = new FormData();
        formData.append('clientId', user.id);
        formData.append('wishlistName', wishlistName)
        formData.append('propertyId', propId);
    
        axiosClient.post('/client-create-wishlist-put-property', formData)
            .then(({data}) => {
                if (data.status === 200) {
                    setWishlists(prevWishlists => [...prevWishlists, data.wishlist]);
                    notify('default', data.message, 'bottom-left', 3000);
                } else {
                    notify('error', data.message, 'top-center', 3000);
                }
            })
            .catch(error => console.error(error));
    }, [user.id]);

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
    // Show Filter Modal
    const handleFilterPressed = () => {
        showModal('PropertySellingFilterModal1', 
            {
                amenities, 
                selectedAmenities, setSelectedAmenities,
                bedroomNumbers, setBedroomNumbers,
                bathroomNumbers, setBathroomNumbers,
                carportNumbers, setCarportNumbers,
                isFiltering,
                selectedPropType,
                handleFilterProp,
                properties
            });
    }

    // Filter Properties based on all filters
    const filterProperties = (overrides = {}) => {
        const {
            bedroomNumbers: overrideBedroomNumbers = bedroomNumbers,
            bathroomNumbers: overrideBathroomNumbers = bathroomNumbers,
            carportNumbers: overrideCarportNumbers = carportNumbers,
        } = overrides;
    
        setFilteredProp2(
            properties.filter(prop => {
                const matchesBedrooms = overrideBedroomNumbers > 0 ? prop.bedroom >= overrideBedroomNumbers : true;
                const matchesBathrooms = overrideBathroomNumbers > 0 ? prop.bath >= overrideBathroomNumbers : true;
                const matchesCarports = overrideCarportNumbers > 0 ? prop.carport >= overrideCarportNumbers : true;
                const matchesAmenities = selectedAmenities.length > 0
                    ? selectedAmenities.every(selectedId =>
                        prop.amenities.some(am => am.amenity.id === selectedId)
                    )
                    : true;
                const matchesPropTypes = selectedPropType !== "" ? prop.property_type.id === selectedPropType : true;
    
                // Return true if all conditions are satisfied
                return matchesPropTypes && matchesBedrooms && matchesBathrooms && matchesCarports && matchesAmenities;
            })
        );
    };

    // Filter Based on propTypes
    useMemo(() => {
        if (selectedPropType === "" && !isFiltering) {
            setFilteredProp2(properties);
        }
        if(selectedPropType !== "" && isFiltering) {  // if is filtered by the filter modal
            filterProperties();
        }
        if(selectedPropType !== "" && !isFiltering) {
            setFilteredProp2(properties?.filter(prop => prop.property_type.id === selectedPropType));
        }
        
    }, [selectedPropType, properties]);

    // Filter Btn event from filter modal
    const handleFilterProp = useCallback((props, isFiltered) => {
        setFiltering(isFiltered);
        setFilteredProp2(props);
    }, []);

    // Reset filters   
    const handleRemoveBedsFilter = useCallback(() => {
        setBedroomNumbers(0);
        filterProperties({ bedroomNumbers: 0 });
    }, []);
    
    const handleRemoveBathsFilter = useCallback(() => {
        setBathroomNumbers(0);
        filterProperties({ bathroomNumbers: 0 });
    }, []);
    
    const handleRemoveCarportsFilter = useCallback(() => {
        setCarportNumbers(0);
        filterProperties({ carportNumbers: 0 });
    }, []);


    
    /**
     * Render Properies
     */
    const renderProperties = (propertiesToRender) => {
        return propertiesToRender.map(prop => {
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
        });
    }



    /**
     * Render Content
     */
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


                {/* Based on Prop View times (Collaborative Filtering) */}
                {isRenderReady && selectedPropType === "" && !isFiltering && (
                    <div className="mar-bottom-l1">
                        <div className={`text-l1 mar-bottom-l2 fw-bold`}>
                            Based on your activities
                        </div>

                        <div className="properties-cont">
                            {renderProperties(properties.filter(prop => recPropBasedPropViewTimes.some(rec => rec.property == prop.id)))}
                        </div>
                    </div>
                )}



                {/* Based on Prefered Location */}
                {isRenderReady && selectedPropType === "" && recPropBasedPrefLoc?.length > 0 && !isFiltering && (
                    <div className="mar-bottom-l1">
                        <div className={`text-l1 mar-bottom-l2 fw-bold ${isRenderReady ? '' : 'd-none'}`}>
                            Based on your prefered locations
                        </div>

                        <div className="properties-cont">
                            {renderProperties(recPropBasedPrefLoc)}
                        </div>
                    </div>
                )}



                {/* All Properties */}
                {isRenderReady && selectedPropType === "" && !isFiltering && (
                    <div>
                        <div className={`text-l1 mar-bottom-l2 fw-bold ${isRenderReady ? '' : 'd-none'}`}>
                            Other properties
                        </div>

                        <div className="properties-cont">
                            {renderProperties(properties)}
                        </div>

                        {properties?.length < 1 && (
                            <div className="">
                                <div className="text-l2 fw-bold">No properties yet</div>
                                <div className="text-m3">Stay tuned for more properties.</div>
                            </div>
                        )}
                    </div>
                )}



                {/* Filtered by proptypes */}
                {isRenderReady && selectedPropType !== "" && !isFiltering && (
                    <div>
                        <div className="properties-cont">
                            {renderProperties(filteredProp2)}
                        </div>

                        {filteredProp2.length < 1 && (
                            <div className="">
                                <div className="text-l2 fw-bold">No properties yet</div>
                                <div className="text-m3">Stay tuned for more properties.</div>
                            </div>
                        )}
                    </div>
                )}
                


                {/* Filtered by filtered modal and proptypes */}
                {isRenderReady && isFiltering && (
                    <div>
                        <div className="properties-cont">
                            {renderProperties(filteredProp2)}
                        </div>

                        {filteredProp2.length < 1 && (
                            <div className="">
                                <div className="text-l2 fw-bold">No exact matches</div>
                                <div className="text-m3 mar-bottom-1">Try changing or removing some of your filters.</div>
                                <div className="d-flex gap3">
                                    {bedroomNumbers > 0 && (<div className="secondary-btn-black1" onClick={handleRemoveBedsFilter}>Remove bedrooms filters</div>)}
                                    {bathroomNumbers > 0 && (<div className="secondary-btn-black1" onClick={handleRemoveBathsFilter}>Remove baths filters</div>)}
                                    {carportNumbers > 0 && (<div className="secondary-btn-black1" onClick={handleRemoveCarportsFilter}>Remove carports filters</div>)}
                                    
                                    <div className="secondary-btn-black1">Remove Amenities filters</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}



                {/* When render is not ready */}
                {!isRenderReady && (
                    <div className={`properties-cont`}>
                        {!isRenderReady && Array.from({ length: 10 }).map((_, index) => (
                            <ClientSkeletonListingBox key={index} />
                        ))}
                    </div>
                )}
                


            </div>
        </>
    )
};