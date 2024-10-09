import * as Icon from 'react-bootstrap-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { formatToPhilPeso, notify } from '../../assets/js/utils';
import { useModal } from '../../contexts/ModalContext';
import { fetchPropertyListedFullById } from '../../Services/GeneralPropertyListingService';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useStateContext } from '../../contexts/ContextProvider';
import { db } from '../../firebase-cofig';
import { fetchSpecificPublishedPropertyFull, isPropertyInOngoingTransaction } from '../../Services/GeneralPropertiesService';
import axiosClient from '../../axios-client';

export default function ClientViewProperty() {
    const {showModal} = useModal();
    const {id} = useParams(); // Property Id
    const [propertyListed, setPropertyListed] = useState(null);
    const [isInOngoingTransaction, setIsInOngoingTransaction] = useState(null);
    const {user} = useStateContext();
    const navigate = useNavigate();

    const [middleIndexAmenities, setMiddleIndexAmenities] = useState(null);
    const [firstHalfAmenities, setFirstHalfAmenities] = useState(null);
    const [secondHalfAmenities, setSecondHalfAmenities] = useState(null);

    const [middleIndexFinancings, setMiddleIndexFinancings] = useState(null);
    const [firstHalfFinancings, setFirstHalfFinancings] = useState(null);
    const [secondHalfFinancings, setSecondHalfFinancings] = useState(null);

    const messageAgentRef = collection(db, "conversation");
    const messagesRef = collection(db, "messages");





    /**
     * Fetch all necessary data
     */
    useEffect(() => {
        const getAll = async() => {
            try {
                const [publishedProp, isInOngoingTransaction] = await Promise.all([
                    fetchSpecificPublishedPropertyFull(id),
                    isPropertyInOngoingTransaction(user.id, id)
                ]);

                setPropertyListed(publishedProp);
                setIsInOngoingTransaction(isInOngoingTransaction);
            } catch (error) {
                console.error(error);
            }
        }      

        getAll();
    }, []);

    useEffect(() => {
        if(propertyListed) {
            setMiddleIndexAmenities(Math.ceil(propertyListed.amenities.length / 2));
            setFirstHalfAmenities(propertyListed.amenities.slice(0, middleIndexAmenities));
            setSecondHalfAmenities(propertyListed.amenities.slice(middleIndexAmenities));

            setMiddleIndexFinancings(Math.ceil(propertyListed.financings.length / 2));
            setFirstHalfFinancings(propertyListed.financings.slice(0, middleIndexFinancings));
            setSecondHalfFinancings(propertyListed.financings.slice(middleIndexFinancings));
        }
    }, [propertyListed]);

    /*
    | Debugging
    */
    useEffect(() => {
        console.log(propertyListed);
    }, [propertyListed]);

    const handleMessageAgent = async () => {
        const ChatBotIntroText = "Hello, Thank you for your interest in this property. An agent will get in touch soon.";
        try {
            // Create the conversation document and wait for it to complete
            const convoRef = await addDoc(messageAgentRef, {
                property: {
                    id: propertyListed.id,
                    name: propertyListed.project_model,
                    model: propertyListed.project_model,
                    city: propertyListed.city_denormalized,
                    province: propertyListed.province_denormalized,
                    picture: propertyListed.photos[0].filename
                },
                client: {
                    id: user.id,
                    firstname: user.firstname,
                    middlename: user.middlename,
                    lastname: user.lastname,
                    pfp: user.pfp
                },
                agent: null,
                finalText: {
                    text: ChatBotIntroText,
                    sender: "agent"
                },
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
    
            // Create the message document, using the ID of the newly created conversation
            await addDoc(messagesRef, {
                text: ChatBotIntroText,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                conversation: convoRef.id, // Use convoRef.id to reference the conversation
                sender: "agent"
            });
    
            // Navigate to messages page
            navigate("/BDDRClient/Messages");
        } catch (error) {
            console.error("Error creating conversation or message: ", error);
        }
    };

    const handleStartTransaction = async() => {
        const formData = new FormData();
        formData.append("clientId", user.id);
        formData.append("propId", id);

        axiosClient.post("/create-transaction-from-client-post", formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify("default", data.message, "bottom-left", 3000);
                navigate("/BDDRClient/Transactions");

            } else {
                notify("error", data.message, "bottom-left", 3000);
            }
        })
        .catch(error => console.error(error));
    }
    



    const handleShowAllPhotos = (photos) => {
        showModal('ViewPropertyShowAllPhotosModal2', {photos});
    }


    
    return (
        <div className="content2 position-relative">
            {propertyListed && firstHalfAmenities && secondHalfAmenities && isInOngoingTransaction != null
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
                            <img src={`/src/assets/media/properties/${propertyListed.photos[0].filename}`} alt={propertyListed.photos.filename} />
                        </div>

                        
                        <div className="d-flex flex-wrap gap3 h-100 flex-grow-1">
                            <div onClick={() => handleShowAllPhotos(propertyListed.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${propertyListed.photos[1].filename}`} alt={propertyListed.photos[1].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(propertyListed.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${propertyListed.photos[2].filename}`} alt={propertyListed.photos[2].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(propertyListed.photos)} className="property-picture small">
                                <img src={`/src/assets/media/properties/${propertyListed.photos[3].filename}`} alt={propertyListed.photos[3].filename} />
                            </div>

                            <div onClick={() => handleShowAllPhotos(propertyListed.photos)} className="property-picture small">
                                <div className="property-picture-overlay">
                                    <div className="d-flex gap3 align-items-center">
                                        <Icon.Grid3x3Gap className='text-l1'/>
                                        Show All
                                    </div>
                                </div>
                                <img src={`/src/assets/media/properties/${propertyListed.photos[4].filename}`} alt={propertyListed.photos[4].filename} />
                            </div>
                        </div>
                    </div>

                    {/* Property Infos */}
                    <div className="property-infos mar-top-1">
                        <div className="property-infos-texts">
                                {/* Property Name */}
                                <div className="text-l1 fw-bold">{propertyListed.project.project_name} {propertyListed.project_model}</div>
                                {/* Property Location */}
                                <div className="d-flex text-l3 gap3 align-items-center mar-top-3">
                                    <Icon.GeoAlt/>
                                    {propertyListed.city_denormalized} {propertyListed.province_denormalized}
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* About this Listing */}
                                {/* <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">About this Property</div>
                                    <div className="about-content">
                                        {propertyListed.property.description}
                                    </div>
                                    <div className="d-flex align-items-center gap4 fw-bold cursor-pointer">See More <Icon.ChevronRight/></div>
                                </div> */}

                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Turn over</div>
                                    <div className="text-m1">{propertyListed.turnover}</div>
                                </div>


                                <div className="mar-top-l1 mar-bottom-l1 listing-hr"></div>


                                {/* Specs */}
                                <div className="mar-top-l1 d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Specs</div>

                                    <div className="d-flex gap1">
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/><b>Bedrooms:</b> {propertyListed.bedroom}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/><b>Bathrooms:</b> {propertyListed.bath}</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/><b>Car port:</b> {propertyListed.carport}</div>
                                        </div>
                                        
                                        <div className="w-50 d-flex flex-direction-y gap3">
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/><b>Lot area:</b> {propertyListed.lot_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/area.svg" className="listing-spec-box-icon"/><b>Floor area:</b> {propertyListed.floor_area}sqm</div>
                                            <div className="listing-spec-box2"><img src="/src/assets/media/icons/house.svg" className="listing-spec-box-icon"/><b>House Type:</b> {propertyListed.storey} storey - {propertyListed.property_type.type_name}</div>
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

                                {/* Financings */}
                                <div className="d-flex flex-direction-y gap2">
                                    <div className="text-l2 fw-bold">Bank Computation</div>

                                    <div className="d-flex flex-direction-y gap3">
                                        <div className="text-m1 d-flex gap3">
                                            <div>DP  ({propertyListed.dp_percent} %): </div>
                                            <div>{formatToPhilPeso(propertyListed.tcp * propertyListed.dp_percent /100)}</div>
                                        </div>

                                        <div className="text-m1 d-flex gap3">
                                            <div>Loanable  ({propertyListed.loanable_percent} %): </div>
                                            <div>{formatToPhilPeso(propertyListed.tcp * propertyListed.loanable_percent /100)}</div>
                                        </div>

                                        {propertyListed.loan_term_ma.map((loan_term, index) => (
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
                                <div className="text-l2">{formatToPhilPeso(propertyListed.tcp)} <div className="text-m3 color-grey1">TCP</div></div>
                                <div className="d-flex flex-direction-y gap3">
                                    <div className="text-l3">Developer:</div>
                                    <div className="d-flex gap3 align-items-center">
                                        <div className="listed-by-pfp">
                                            {propertyListed.developer.logo 
                                            ? (<img src={`/src/assets/media/developers/${propertyListed.developer.logo}`} alt="" />)
                                            : (<div className='text-l1'>{propertyListed.developer.name[0]}</div>)
                                            }
                                            
                                        </div>
                                        <div className="">
                                            <div className="text-l3">{propertyListed.developer.name}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="d-flex flex-direction-y gap3">
                                    
                                    <button 
                                    disabled={isInOngoingTransaction} 
                                    onClick={handleStartTransaction} 
                                    className={`primary-btn-black1 ${isInOngoingTransaction ? 'disabled' : ''} text-m2 text-center`}>
                                        {isInOngoingTransaction ? 'This property is in your transactions' : 'Start a transaction'}
                                    </button>
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