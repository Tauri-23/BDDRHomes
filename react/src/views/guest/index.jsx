import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from 'react';
import { PropertyBox1 } from '../../components/property_box1';
import { ClientSkeletonListingBox, PropertyListedCategorySkeleton, PropertyListedFilterBtnSkeleton, PropertyListedViewAsBtnSkeleton } from '../../Skeletons/client-listing-skeletons';
import { PropertyBox2 } from '../../components/property_box2';
import { fetchPropertyAmenities, fetchPropertyTypes, fetchPublishedProperties } from '../../Services/GeneralPropertiesService';

export default function GuestListings() {
    
    const [properties, setProperties] = useState(null);
    const [propTypes, setPropTypes] = useState(null);
    const [amenities, setAmenities] = useState(null);

    // For Filters
    const [propViewAs, setPropViewAs] = useState(2);
    const [selectedPropType, setSelectedPropType] = useState("");
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [bedroomNumbers, setBedroomNumbers] = useState(0);
    const [bathroomNumbers, setBathroomNumbers] = useState(0);
    const [carportNumbers, setCarportNumbers] = useState(0);
    const [filteredProp2, setFilteredProp2] = useState(null);
    const [isFiltering, setFiltering] = useState(false);



    /**
     * Fetch all necessary data from database
     */
    useEffect(() => {
        const getAll = async() => {
            try {
                const [propDb, propTypeDb, amenitiesDb] = await Promise.all([
                    fetchPublishedProperties(),
                    fetchPropertyTypes(),
                    fetchPropertyAmenities()
                ]);
    
                setProperties(propDb);
                setPropTypes(propTypeDb);  
                setAmenities(amenitiesDb);
            } catch (error) {
                console.error(error);
            }
        }

        getAll();
    }, []);



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



    /**
     * Return Components
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
                {/* Properties Container */}
                <div className="properties-cont">

                    {properties
                    ? properties.map(prop => (
                        <PropertyBox2
                            key={prop.id}
                            viewAs={propViewAs}
                            propId={prop.id}
                            property={prop}
                        />
                    ))
                    : Array.from({length:10}, (_, index) => index).map(x => (
                        <ClientSkeletonListingBox key={x}/>
                    ))}


                </div>
            </div>
        </>
        
    )
};