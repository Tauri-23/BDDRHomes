import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formatToPhilPeso } from '../../assets/js/utils';
import { useModal } from '../../contexts/ModalContext';
import { fetchSpecificPublishedPropertyFull } from '../../Services/GeneralPropertiesService';

export default function ViewProperty() {
    const {showModal} = useModal();
    const navigate = useNavigate();
    const {id} = useParams(); // Property Id
    const [listing, setListing] = useState(null);

    const [middleIndexAmenities, setMiddleIndexAmenities] = useState(null);
    const [firstHalfAmenities, setFirstHalfAmenities] = useState(null);
    const [secondHalfAmenities, setSecondHalfAmenities] = useState(null);

    const [middleIndexFinancings, setMiddleIndexFinancings] = useState(null);
    const [firstHalfFinancings, setFirstHalfFinancings] = useState(null);
    const [secondHalfFinancings, setSecondHalfFinancings] = useState(null);


    /**
     * Fetch all necessary data
     */
    useEffect(() => {
        const getAll = async() => {
            try {
                const [propertyDb] = await Promise.all([
                    fetchSpecificPublishedPropertyFull(id)
                ]);
                setListing(propertyDb);
            } catch (error) {
                console.error(error);
            }
        };        

        getAll();
    }, []);



    /**
     * Slice the amenities
     */
    useEffect(() => {
        if(listing) {
            setMiddleIndexAmenities(Math.ceil(listing.amenities.length / 2));
            setFirstHalfAmenities(listing.amenities.slice(0, middleIndexAmenities));
            setSecondHalfAmenities(listing.amenities.slice(middleIndexAmenities));

            setMiddleIndexFinancings(Math.ceil(listing.financings.length / 2));
            setFirstHalfFinancings(listing.financings.slice(0, middleIndexFinancings));
            setSecondHalfFinancings(listing.financings.slice(middleIndexFinancings));
        }
    }, [listing]);



    /**
     * Debugging
     */
    useEffect(() => {
        console.log(listing);
    }, [listing])



    const handleShowAllPhotos = (photos) => {
        showModal('ViewPropertyShowAllPhotosModal2', {photos});
    }


    
    return (
        <div className="content2 position-relative">
            {listing && firstHalfAmenities && secondHalfAmenities
            ? (
                <>
                    <div className="d-flex justify-content-between mar-bottom-1 align-items-center">
                        <Link to={'/listings'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none">
                            <Icon.ChevronLeft/>
                            Back
                        </Link>
                    </div>



                    {/* Property Pics */}
                    <div className="property-pictures">
                        <div onClick={() => handleShowAllPhotos(listing.photos)} className="property-picture large">
                            <img src={`/src/assets/media/properties/${listing.photos[0].filename}`} alt={listing.photos[0].filename} />
                        </div>

                        
                        <div className="d-flex flex-wrap gap3 h-100 flex-grow-1">
                            <div onClick={() => handleShowAllPhotos(listing.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${listing.photos[1].filename}`} alt={listing.photos[1].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(listing.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${listing.photos[2].filename}`} alt={listing.photos[2].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(listing.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${listing.photos[3].filename}`} alt={listing.photos[3].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(listing.photos)} className="property-picture small">
                                <div className="property-picture-overlay">
                                    <div className="d-flex gap3 align-items-center">
                                        <Icon.Grid3x3Gap className='text-l1'/>
                                        Show All
                                    </div>
                                </div>
                                <img src={`/src/assets/media/properties/${listing.photos[4].filename}`} alt={listing.photos[4].filename} />
                            </div>
                        </div>
                    </div>




                    {/* Property Infos */}
                    <div className="property-infos mar-top-1">
                        
                        {/* Infos */}
                        <div className="property-infos-texts">
                                {/* Property Name */}
                                <div className="text-l1 fw-bold">{listing.project.project_name} {listing.project_model}</div>
                                {/* Property Location */}
                                <div className="d-flex text-l3 gap3 align-items-center mar-top-3">
                                    <Icon.GeoAlt/>
                                    {listing.city_denormalized} {listing.province_denormalized}
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* About this Listing */}
                                {/* <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">About this Property</div>
                                    <div className="about-content">
                                        {listing.property.description}
                                    </div>
                                    <div className="d-flex align-items-center gap4 fw-bold cursor-pointer">See More <Icon.ChevronRight/></div>
                                </div> */}

                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Turn over</div>
                                    <div className="text-m1">{listing.turnover}</div>
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* Specs */}
                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Specs</div>

                                    <div className="d-flex gap1">
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/><b>Bedrooms:</b> {listing.bedroom}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/><b>Bathrooms:</b> {listing.bath}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/><b>Car port:</b> {listing.carport}</div>
                                        </div>
                                        
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/><b>Lot area:</b> {listing.lot_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/><b>Floor area:</b> {listing.floor_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/house.svg" className="listing-spec-box-icon"/><b>House Type:</b> {listing.storey} storey - {listing.property_type.type_name}</div>
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

                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>

                                {/* Bank Computations */}
                                <div className="d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Bank Computation</div>

                                    <div className="d-flex flex-direction-y gap3">
                                        <div className="text-m1 d-flex gap3">
                                            <div>DP  ({listing.dp_percent} %): </div>
                                            <div>{formatToPhilPeso(listing.tcp * listing.dp_percent /100)}</div>
                                        </div>

                                        <div className="text-m1 d-flex gap3">
                                            <div>Loanable  ({listing.loanable_percent} %): </div>
                                            <div>{formatToPhilPeso(listing.tcp * listing.loanable_percent /100)}</div>
                                        </div>

                                        {listing.loan_term_ma.map((loan_term, index) => (
                                            <div key={index} className="text-m1 d-flex gap3">
                                                <div>{loan_term.term}years</div>
                                                <div>-</div>
                                                <div>{formatToPhilPeso(loan_term.ma)}</div>
                                                <div>-</div>
                                                <div className='fw-bold'>Required Income: {formatToPhilPeso(loan_term.ma /.35)}</div>                                           
                                            </div>
                                        ))}
                                    </div>
                                </div>
                        </div>



                        {/* Actions */}
                        <div className="action-box d-flex gap1 flex-direction-y">
                                {/* Price */}
                                <div className="text-l2">{formatToPhilPeso(listing.tcp)} <div className="text-m3 color-grey1">TCP</div></div>
                                <div className="d-flex flex-direction-y gap3">
                                    <div className="text-l3">Developer:</div>
                                    <div className="d-flex gap3 align-items-center">
                                        <div className="listed-by-pfp">
                                            {listing.developer.logo 
                                            ? (<img src={`/src/assets/media/developers/${listing.developer.logo}`} alt="" />)
                                            : (<div className='text-l1'>{listing.developer.name[0]}</div>)
                                            }
                                            
                                        </div>
                                        <div className="">
                                            <div className="text-l3">{listing.developer.name}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="d-flex flex-direction-y gap3">
                                    
                                    <button
                                    className={`primary-btn-black1 text-m2 text-center`} onClick={() => navigate('/signin')}>
                                        Start a transaction
                                    </button>
                                    <div className="d-flex gap3 w-100">
                                        <div className="secondary-btn-black1 text-m1 text-center" onClick={() => navigate('/signin')}><Icon.ChatSquareDots/></div>
                                        <div className="secondary-btn-black1 d-flex align-items-center justify-content-center text-m2 color-black1 w-100" onClick={() => navigate('/signin')}>Book A Tripping</div>
                                    </div>
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