import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { PropertyBox2 } from '../../components/property_box2';
import { ClientSkeletonListingBox, PropertyListedCategorySkeleton, PropertyListedFilterBtnSkeleton, PropertyListedViewAsBtnSkeleton } from '../../Skeletons/client-listing-skeletons';
import { fetchPropertyAmenities, fetchPropertyTypes, fetchPublishedPropertiesPaginated } from '../../Services/GeneralPropertiesService';

export default function GuestListings() {
    
    const [properties, setProperties] = useState([]); // Initialize as an empty array
    const [propTypes, setPropTypes] = useState(null);
    const [amenities, setAmenities] = useState(null);
    
    const [page, setPage] = useState(2); // Track the current page for pagination
    const [loading, setLoading] = useState(false); // Loading state for fetching
    const [hasMore, setHasMore] = useState(true); // To track if more properties are available

    // For Filters
    const [propViewAs, setPropViewAs] = useState(2);
    const [selectedPropType, setSelectedPropType] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [bedroomNumbers, setBedroomNumbers] = useState(0);
    const [bathroomNumbers, setBathroomNumbers] = useState(0);
    const [carportNumbers, setCarportNumbers] = useState(0);
    const [isFiltering, setFiltering] = useState(false);



    /**
     * Fetch all necessary data from the database
     */
    useEffect(() => {
        const getAll = async () => {
            try {
                const [propsDb, propTypeDb, amenitiesDb] = await Promise.all([
                    fetchPublishedPropertiesPaginated(8, 1),
                    fetchPropertyTypes(),
                    fetchPropertyAmenities()
                ]);
                setProperties(propsDb);
                setPropTypes(propTypeDb);  
                setAmenities(amenitiesDb);
            } catch (error) {
                console.error(error);
            }
        }

        getAll();
    }, []); // Load on initial mount



    /**
     * For Pagination handlers
     */
    const loadProperties = async () => {
        if (loading || !hasMore) return; // Prevent multiple requests
        setLoading(true);

        try {
            // Fetch properties using the current page state
            const newProperties = await fetchPublishedPropertiesPaginated(8, page);
            setProperties(prev => [...prev, ...newProperties]); // Append new properties
            setHasMore(newProperties.length > 0); // Check if more properties are available
            
            // Increment the page only if new properties are returned
            if (newProperties.length > 0) {
                setPage(prev => prev + 1); // Increment the page state
            }
        } catch (error) {
            console.error('Error fetching properties:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadProperties();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading, hasMore]);



    /* 
     * Filter
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



    /**
     * Return Components
     */
    return (
        <>
            {/* Property Types Category-btns */}
            <div className="listing-category-nav">
                <div className="listing-category-cont">
                    {propTypes && propTypes.length > 0 && (
                        <div className={`listing-category-box ${selectedPropType === "" ? "active" : ""}`} onClick={() => setSelectedPropType("")}>
                            <Icon.Grid className='text-l2' />
                            <div className="listing-category-box-text">All</div>
                        </div>
                    )}
                    {propTypes && propTypes.map(propType => (
                        <div key={propType.id} className={`listing-category-box ${selectedPropType === propType.id ? "active" : ""}`} onClick={() => setSelectedPropType(propType.id)}>
                            <img src={`/src/assets/media/icons/${propType.icon}`} className='category-icon1' alt="" />                            
                            <div className="listing-category-box-text">{propType.type_name}</div>
                        </div>
                    ))}
                    {!propTypes && Array.from({ length: 10 }, (_, index) => index).map(x => (
                        <PropertyListedCategorySkeleton key={x} />
                    ))}
                </div>
                {amenities && (
                    <div className="d-flex gap3 align-items-center">
                        <select className="secondary-btn-black2 gap3 d-flex align-items-center" value={propViewAs} onChange={(e) => setPropViewAs(e.target.value)}>
                            <option value="1">View as monthly amortization</option>
                            <option value="2">View as price</option>
                            <option value="3">View as required income</option>
                        </select>
                        <button className="secondary-btn-black2 gap3 d-flex align-items-center" onClick={handleFilterPressed}><Icon.Sliders />Filter</button>
                    </div>
                )}
                {!amenities && (
                    <div className="d-flex gap3 align-items-center">
                        <PropertyListedViewAsBtnSkeleton />
                        <PropertyListedFilterBtnSkeleton />
                    </div>
                )}
            </div>

            <div className="content1">
                {/* Properties Container */}
                <div className="properties-cont">
                    {properties.length > 0
                        ? properties.map(prop => (
                            <PropertyBox2
                                key={prop.id}
                                viewAs={propViewAs}
                                propId={prop.id}
                                property={prop}
                            />
                        ))
                        : Array.from({ length: 10 }, (_, index) => (
                            <ClientSkeletonListingBox key={index} />
                        ))}
                    {loading && Array.from({ length: 5 }, (_, index) => (
                        <ClientSkeletonListingBox key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};
