import * as Icon from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formatToPhilPeso } from '../../assets/js/utils';
import { useModal } from '../../contexts/ModalContext';
import { fetchPropertyListedFullById } from '../../Services/GeneralPropertyListingService';

export default function ViewProperty() {
    const {showModal} = useModal();
    const {id} = useParams(); // Property Id
    const [listing, setListing] = useState([]);

    const [middleIndexAmenities, setMiddleIndexAmenities] = useState(null);
    const [firstHalfAmenities, setFirstHalfAmenities] = useState(null);
    const [secondHalfAmenities, setSecondHalfAmenities] = useState(null);

    const [middleIndexFinancings, setMiddleIndexFinancings] = useState(null);
    const [firstHalfFinancings, setFirstHalfFinancings] = useState(null);
    const [secondHalfFinancings, setSecondHalfFinancings] = useState(null);



    useEffect(() => {
        const getListingFull = async() => {
            try {
                const data = await fetchPropertyListedFullById(id);
                setListing(data);
            } catch (error) {
                console.error(error);
            }
        };        

        getListingFull();
    }, []);

    useEffect(() => {
        if(listing.data) {
            setMiddleIndexAmenities(Math.ceil(listing.data[0].amenities.length / 2));
            setFirstHalfAmenities(listing.data[0].amenities.slice(0, middleIndexAmenities));
            setSecondHalfAmenities(listing.data[0].amenities.slice(middleIndexAmenities));

            setMiddleIndexFinancings(Math.ceil(listing.data[0].financings.length / 2));
            setFirstHalfFinancings(listing.data[0].financings.slice(0, middleIndexFinancings));
            setSecondHalfFinancings(listing.data[0].financings.slice(middleIndexFinancings));
            console.log(listing.data[0].financings);
        }
        
    }, [listing.data]);



    const handleShowAllPhotos = (photos) => {
        showModal('ViewPropertyShowAllPhotosModal2', {photos});
    }


    
    return (
        <div className="content2 position-relative">
            {listing.data && firstHalfAmenities && secondHalfAmenities
            ? (
                <>
                    <div className="d-flex justify-content-between mar-bottom-1 align-items-center">
                        <Link to={'/listings'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none">
                            <Icon.ChevronLeft/>
                            Back
                        </Link>

                        <div className="d-flex gap2">
                            <div className="d-flex align-items-center gap4 text-m1 text-decoration-underline cursor-pointer">
                                <Icon.Heart className='text-l2'/>
                                Save
                            </div>
                        </div>
                    </div>
                    {/* Property Pics */}
                    <div className="property-pictures">
                        <div onClick={() => handleShowAllPhotos(listing.data[0].photos)} className="property-picture large">
                            <img src={`/src/assets/media/properties/${listing.data[0].photos[0].filename}`} alt={listing.data[0].photos[0].filename} />
                        </div>

                        
                        <div className="d-flex flex-wrap gap3 h-100 flex-grow-1">
                            <div onClick={() => handleShowAllPhotos(listing.data[0].photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${listing.data[0].photos[1].filename}`} alt={listing.data[0].photos[1].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(listing.data[0].photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${listing.data[0].photos[2].filename}`} alt={listing.data[0].photos[2].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(listing.data[0].photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${listing.data[0].photos[3].filename}`} alt={listing.data[0].photos[3].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(listing.data[0].photos)} className="property-picture small">
                                <div className="property-picture-overlay">
                                    <div className="d-flex gap3 align-items-center">
                                        <Icon.Grid3x3Gap className='text-l1'/>
                                        Show All
                                    </div>
                                </div>
                                <img src={`/src/assets/media/properties/${listing.data[0].photos[4].filename}`} alt={listing.data[0].photos[4].filename} />
                            </div>
                        </div>
                    </div>

                    {/* Property Infos */}
                    <div className="property-infos mar-top-1">
                        <div className="property-infos-texts">
                                {/* Property Name */}
                                <div className="text-l1 fw-bold">{listing.data[0].name}</div>
                                {/* Property Location */}
                                <div className="d-flex text-l3 gap3 align-items-center mar-top-3">
                                    <Icon.GeoAlt/>
                                    {listing.data[0].address}
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* About this Listing */}
                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">About this Property</div>
                                    <div className="about-content">
                                        {listing.data[0].description}
                                    </div>
                                    <div className="d-flex align-items-center gap4 fw-bold cursor-pointer">See More <Icon.ChevronRight/></div>
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* Specs */}
                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Specs</div>

                                    <div className="d-flex gap1">
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/>Bedrooms: {listing.data[0].bedroom}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/>Bathrooms: {listing.data[0].bath}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/>Car port: {listing.data[0].carport}</div>
                                        </div>
                                        
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/>Lot area: {listing.data[0].lot_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/>Floor area: {listing.data[0].floor_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/house.svg" className="listing-spec-box-icon"/>House Type: {listing.data[0].property_type.type_name}</div>
                                        </div>                                
                                    </div>
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* Amenities */}
                                <div className="d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Amenities</div>

                                    <div className="d-flex gap1">
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            {firstHalfAmenities.map((amenity) => (
                                                <div key={amenity.id} className="listing-spec-box2"><img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className="listing-spec-box-icon"/>{amenity.amenity.amenity_name}</div>
                                            ))}
                                        </div>
                                        
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            {secondHalfAmenities.map((amenity) => (
                                                <div key={amenity.id} className="listing-spec-box2"><img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className="listing-spec-box-icon"/>{amenity.amenity.amenity_name}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* Financings */}
                                <div className="d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Financings</div>

                                    <div className="d-flex gap1">
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            {firstHalfFinancings.map((financing) => (
                                                <div key={financing.id} className="listing-spec-box2"><img src={`/src/assets/media/icons/${financing.financing.icon}`} className="listing-spec-box-icon"/>{financing.financing.financing_type}</div>
                                            ))}
                                        </div>
                                        
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            {secondHalfFinancings.map((financing) => (
                                                <div key={financing.id} className="listing-spec-box2"><img src={`/src/assets/media/icons/${financing.financing.icon}`} className="listing-spec-box-icon"/>{financing.financing.financing_type}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                        </div>



                        {/* Actions */}
                        <div className="action-box d-flex gap1 flex-direction-y">
                                {/* Price */}
                                <div className="text-l2">{formatToPhilPeso(listing.data[0].price)}</div>
                                <div className="d-flex flex-direction-y gap3">
                                    <div className="text-l3">Listed By:</div>
                                    <div className="d-flex gap3 align-items-center">
                                        <div className="listed-by-pfp">
                                            {listing.data[0].agent.pfp 
                                            ? (<img src="/src/assets/media/agents/pfp/melissa-pfp.jpeg" alt="" />)
                                            : (<div className='text-l1'>{listing.data[0].agent.firstname[0]}</div>)
                                            }
                                            
                                        </div>
                                        <div className="">
                                            <div className="text-l3">{listing.data[0].agent.firstname} {listing.data[0].agent.lastname}</div>
                                            <div className="text-m3">Agent / Team Leader</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="d-flex flex-direction-y gap3">
                                    <div className="primary-btn-blue1 text-m2 text-center">Contact Agent</div>
                                    <div className="secondary-btn-blue1 text-m2 text-center color-blue1">Book A Tripping</div>
                                </div>
                        </div>
                    </div>

                    <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>

                    {/* Map */}
                    <div className="mar-top-l1 d-flex flex-direction-y gap2">
                        <div className="text-l2 fw-bold">Property Map</div>

                        <div className="property-map-cont">
                        </div>
                    </div>
                </>
            )
            : (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}
        </div>
    )
};