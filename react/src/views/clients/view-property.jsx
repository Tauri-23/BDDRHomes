import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formatToPhilPeso } from '../../assets/js/utils';
import { useModal } from '../../contexts/ModalContext';
import { fetchPropertyListedFullById } from '../../Services/GeneralPropertyListingService';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useStateContext } from '../../contexts/ContextProvider';
import { db } from '../../firebase-cofig';

export default function ClientViewProperty() {
    const {showModal} = useModal();
    const {id} = useParams(); // Property Id
    const [propertyListed, setPropertyListed] = useState(null);
    const {user} = useStateContext();
    const navigate = useNavigate();

    const [middleIndexAmenities, setMiddleIndexAmenities] = useState(null);
    const [firstHalfAmenities, setFirstHalfAmenities] = useState(null);
    const [secondHalfAmenities, setSecondHalfAmenities] = useState(null);

    const [middleIndexFinancings, setMiddleIndexFinancings] = useState(null);
    const [firstHalfFinancings, setFirstHalfFinancings] = useState(null);
    const [secondHalfFinancings, setSecondHalfFinancings] = useState(null);

    const messageAgentRef = collection(db, "conversation");

    useEffect(() => {
        const getListingFull = async() => {
            try {
                const data = await fetchPropertyListedFullById(id);
                setPropertyListed(data);
            } catch (error) {
                console.error(error);
            }
        };        

        getListingFull();
    }, []);

    useEffect(() => {
        if(propertyListed) {
            setMiddleIndexAmenities(Math.ceil(propertyListed.property.amenities.length / 2));
            setFirstHalfAmenities(propertyListed.property.amenities.slice(0, middleIndexAmenities));
            setSecondHalfAmenities(propertyListed.property.amenities.slice(middleIndexAmenities));

            setMiddleIndexFinancings(Math.ceil(propertyListed.property.financings.length / 2));
            setFirstHalfFinancings(propertyListed.property.financings.slice(0, middleIndexFinancings));
            setSecondHalfFinancings(propertyListed.property.financings.slice(middleIndexFinancings));
        }
    }, [propertyListed]);

    /*
    | Debugging
    */
    // useEffect(() => {
    //     console.log(propertyListed);
    // }, [propertyListed]);

    const handleMessageAgent = () => {
        addDoc(messageAgentRef, {
            client: user.id,
            agent: propertyListed.agent.id,
            createdAt: serverTimestamp()
        });

        navigate("/BDDRClient/Messages");
    }



    const handleShowAllPhotos = (photos) => {
        showModal('ViewPropertyShowAllPhotosModal2', {photos});
    }


    
    return (
        <div className="content2 position-relative">
            {propertyListed && firstHalfAmenities && secondHalfAmenities
            ? (
                <>
                    <div className="d-flex justify-content-between mar-bottom-1 align-items-center">
                        <Link to={'/'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none">
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
                        <div onClick={() => handleShowAllPhotos(propertyListed.property.photos)} className="property-picture large">
                            <img src={`/src/assets/media/properties/${propertyListed.property.photos[0].filename}`} alt={propertyListed.property.photos.filename} />
                        </div>

                        
                        <div className="d-flex flex-wrap gap3 h-100 flex-grow-1">
                            <div onClick={() => handleShowAllPhotos(propertyListed.property.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${propertyListed.property.photos[1].filename}`} alt={propertyListed.property.photos[1].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(propertyListed.property.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${propertyListed.property.photos[2].filename}`} alt={propertyListed.property.photos[2].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(propertyListed.property.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${propertyListed.property.photos[3].filename}`} alt={propertyListed.property.photos[3].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(propertyListed.property.photos)} className="property-picture small">
                                <div className="property-picture-overlay">
                                    <div className="d-flex gap3 align-items-center">
                                        <Icon.Grid3x3Gap className='text-l1'/>
                                        Show All
                                    </div>
                                </div>
                                <img src={`/src/assets/media/properties/${propertyListed.property.photos[4].filename}`} alt={propertyListed.property.photos[4].filename} />
                            </div>
                        </div>
                    </div>

                    {/* Property Infos */}
                    <div className="property-infos mar-top-1">
                        <div className="property-infos-texts">
                                {/* Property Name */}
                                <div className="text-l1 fw-bold">{propertyListed.property.name}</div>
                                {/* Property Location */}
                                <div className="d-flex text-l3 gap3 align-items-center mar-top-3">
                                    <Icon.GeoAlt/>
                                    {propertyListed.property.address}
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* About this Listing */}
                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">About this Property</div>
                                    <div className="about-content">
                                        {propertyListed.property.description}
                                    </div>
                                    <div className="d-flex align-items-center gap4 fw-bold cursor-pointer">See More <Icon.ChevronRight/></div>
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* Specs */}
                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Specs</div>

                                    <div className="d-flex gap1">
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/>Bedrooms: {propertyListed.property.bedroom}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/>Bathrooms: {propertyListed.property.bath}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/>Car port: {propertyListed.property.carport}</div>
                                        </div>
                                        
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/>Lot area: {propertyListed.property.lot_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/>Floor area: {propertyListed.property.floor_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/house.svg" className="listing-spec-box-icon"/>House Type: {propertyListed.property.property_type.type_name}</div>
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
                                <div className="text-l2">{formatToPhilPeso(propertyListed.property.price)}</div>
                                <div className="d-flex flex-direction-y gap3">
                                    <div className="text-l3">Listed By:</div>
                                    <div className="d-flex gap3 align-items-center">
                                        <div className="listed-by-pfp">
                                            {propertyListed.agent.pfp 
                                            ? (<img src="/src/assets/media/agents/pfp/melissa-pfp.jpeg" alt="" />)
                                            : (<div className='text-l1'>{propertyListed.agent.firstname[0]}</div>)
                                            }
                                            
                                        </div>
                                        <div className="">
                                            <div className="text-l3">{propertyListed.agent.firstname} {propertyListed.agent.lastname}</div>
                                            <div className="text-m3">{propertyListed.agent.position} / {propertyListed.agent.team.name}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="d-flex flex-direction-y gap3">
                                    
                                    <div className="primary-btn-black1 text-m2 text-center">Start a deal</div>
                                    <div className="d-flex gap3 w-100">
                                        <div className="secondary-btn-black1 text-m1 text-center" onClick={handleMessageAgent}><Icon.ChatSquareDots/></div>
                                        <div className="secondary-btn-black1 d-flex align-items-center justify-content-center text-m2 color-black1 w-100">Book A Tripping</div>
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