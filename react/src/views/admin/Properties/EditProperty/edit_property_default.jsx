import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useOutletContext, useParams } from "react-router-dom";
import '/src/assets/css/admin_edit_published_property.css';
import * as Icon from 'react-bootstrap-icons';
import axiosClient from "../../../../axios-client";
import { formatToPhilPeso, notify } from "../../../../assets/js/utils";
import { fetchPropertyAmenities, fetchPropertyFinancing, fetchSpecificPublishedPropertyFull } from "../../../../Services/GeneralPropertiesService";

export default function AdminEditPropertyDefault() {
    const {id} = useParams(); // Property Id
    const {isSidenavOpen} = useOutletContext();
    const [listing, setListing] = useState([]); // General Listing Object from Database
    const [amenities, setAmenities] = useState([]); //Amenities that is set to the Property, hiniwalay ko para decouple sya sa listing object para kapag niremove hindi na naka base sa listing object
    const [financings, setFinancings] = useState([]); // Same concept as amenities
    const [photos, setPhotos] = useState([]); //Same concept as amenities
    const [availableAmenitiesToAdd, setAvailableAmenitiestoAdd] = useState([]); //This is the array of the amenities that are available to add
    const [availableFinancingsToAdd, setAvailableFinancingsToAdd] = useState([]); //This is the array of the financing that are available to add
    const location = useLocation();

    const [isSidenavHidden, setSidenavHidden] = useState(false); 
    const [isAddAmenity, setAddAmenity] = useState(false);
    const [isAddFinancing, setAddFinancing] = useState(false);





    useEffect(() => {
        const getListingFull = async() => {
            try {
                const data = await fetchSpecificPublishedPropertyFull(id);
                setListing(data);
            } catch (error) {
                console.error(error);
            }
        };

        const getAvailableAmenities = async () => {
            try {
                const data = await fetchPropertyAmenities();
                setAvailableAmenitiestoAdd(data);
            } catch(error) {
                console.error('Failed to fech property amenities:', error);
            }
        }

        const getAvailableFinancings = async () => {
            try {
                const data = await fetchPropertyFinancing();
                setAvailableFinancingsToAdd(data);
            } catch(error) {
                console.error('Failed to fetch property financings:', error);
            }
        }

        getListingFull();
        getAvailableAmenities();
        getAvailableFinancings();
           
    }, []);

    

    /*
     This Will Populate the Amenities 
    */
    useEffect(() => {
        if (listing && listing[0]) {
            setAmenities(listing[0].amenities);
            setFinancings(listing[0].financings);
            setPhotos(listing[0].photos);
        }
        
    }, [listing]);





    const handleAddAmenity = (amenityId) => {       

        const formData = new FormData();
        formData.append('propertyId', id);
        formData.append('amenityId', amenityId);

        console.log(amenities);
        console.log(amenityId);

        axiosClient.post('/general-add-published-property-amenity', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('success', data.message, 'top-center', 3000);
                setAmenities([...amenities, data.amenity]);
            } 
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        });
    }


    const handleAddFinancing = (financingId) => {
        const formData = new FormData();
        formData.append('propertyId', id);
        formData.append('financingId', financingId);

        axiosClient.post('/general-add-published-property-financing', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('success', data.message, 'top-center', 3000);
                setFinancings([...financings, data.financing]);
            }
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        })
    }





    return (
        <div className={`edit-property-content ${isSidenavOpen ? 'compressed' : ''}`}>                

            {listing[0] && (
                <div className="d-flex w-100">

                    {/* Sidenav */}
                    <div className={`edit-property-sidenav ${isSidenavHidden ? 'hidden' : ''}`}>
                        <div className="text-l1 fw-bold d-flex gap1 mar-bottom-1">
                            <Link to={'/BDDRAdmin/Properties&Developers'} className="text-decoration-none color-black1">
                                <div className="circle-btn-1">
                                    <Icon.ArrowLeft className='text-m1'/>
                                </div>
                            </Link>
                            Edit Listing
                        </div>

                        <Link to={'Photos'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAdmin/Properties/EditProperty/'+ id +'/Photos' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Photos</div>
                                <div className="edit-listing-sidenav-box-prop-pic-cont">
                                    {photos.slice(0,5).map(photo =>
                                        <div key={photo.id} className="edit-listing-sidenav-box-prop-pic">
                                            <img src={`/src/assets/media/properties/${photo.filename}`} alt="" />
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        </Link>

                        <Link to={'Name'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAdmin/Properties/EditProperty/'+ id +'/Name' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Name</div>
                                <div className="text-l3">{listing[0].name}</div>
                            </div>
                        </Link>

                        <Link to={'Type'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAdmin/Properties/EditProperty/'+ id +'/Type' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Property Type</div>
                                <div className="text-l3" id="property-type-sidenav">{listing ? listing[0].property_type.type_name : 'Loading...'}</div>
                            </div>
                        </Link>                        

                        <Link to={'Description'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAdmin/Properties/EditProperty/'+ id +'/Description' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Description</div>
                                <div className="line-clamp-3">{listing[0].description}</div>
                            </div>
                        </Link>

                        <Link to={'Address'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAdmin/Properties/EditProperty/'+ id +'/Address' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Address</div>
                                <div className="text-l3">{listing[0].address}</div>
                            </div>
                        </Link>

                        <Link to={'Floorplan'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAdmin/Properties/EditProperty/'+ id +'/Floorplan' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Floorplan</div>
                                <div className="listing-spec-box3"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/>Bedroom: {listing[0].bedroom}</div>
                                <div className="listing-spec-box3"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/>Bath: {listing[0].bath}</div>
                                <div className="listing-spec-box3"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/>Carport: {listing[0].carport}</div>
                                <div className="text-m2 mar-top-3 text-decoration-underline">See more...</div>
                            </div>
                        </Link>

                        <Link to={'Amenities'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Amenities' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Amenities</div>
                                {amenities.slice(0,3).map(amenity =>
                                    <div key={amenity.amenity.id} className="listing-spec-box3"><img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className="listing-spec-box-icon"/>{amenity.amenity.amenity_name}</div>
                                )}
                                <div className={`text-m2 mar-top-3 text-decoration-underline ${amenities.length > 3 ? '' : 'd-none'}`}>See more...</div>
                            </div>
                        </Link>

                        <Link to={'Financing'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Financing' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Financing</div>
                                {financings.slice(0,3).map(financing => 
                                    <div key={financing.financing.id} className="listing-spec-box3"><img src={`/src/assets/media/icons/${financing.financing.icon}`} className="listing-spec-box-icon"/>{financing.financing.financing_type}</div>
                                )}
                                <div className={`text-m2 mar-top-3 text-decoration-underline ${financings.length > 3 ? '' : 'd-none'}`}>See more...</div>
                            </div>
                        </Link>

                        <Link to={'Price'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Price' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Price and Required Income</div>
                                <div className="text-l3">{formatToPhilPeso(listing[0].price)}</div>

                            </div>
                        </Link>
                    </div>

                    {/* Outlet Content (CHildren) */}
                    <div className={`edit-property-content-2 ${isAddAmenity ? 'compressed' : ''}`}>
                        <Outlet 
                            context={{
                                // General use
                                setSideNavHidden: setSidenavHidden,
                                isSidenavHidden: isSidenavHidden,                                
                                setListing: setListing,
                                listing: listing,
                                id: listing[0].id,

                                // Photos
                                photos: photos,
                                setPhotos: setPhotos,

                                // Name
                                name: listing[0].name,

                                // Property Type
                                type: listing[0].property_type.id,

                                // Description
                                description: listing[0].description,

                                // Amenities
                                propertyAmenities: amenities,
                                setPropertyAmenities: setAmenities,
                                setAddAmenity: setAddAmenity,

                                // Floorplan
                                bedroom: listing[0].bedroom,
                                bath: listing[0].bath,
                                carport: listing[0].carport,
                                lotArea: listing[0].lot_area,
                                floorArea: listing[0].floor_area,                                

                                // Financing
                                propertyFinancings: financings,
                                setPropertyFinancings: setFinancings,
                                setAddFinancing: setAddFinancing
                            }}/>
                    </div>




                    {/* 
                    *
                    * Add Amenities 
                    * 
                    */}
                    <div className={`edit-listing-content-add-amenity ${isAddAmenity ? '' : 'd-none'}`}>
                        <div className="text-l1 fw-bold mar-bottom-l2">Add Amenities</div>

                        {availableAmenitiesToAdd && availableAmenitiesToAdd.map((amenity) => (
                            !amenities.some(existAmenity => existAmenity.amenity.id === amenity.id) 
                            && (
                                <div
                                key={amenity.id}                                 
                                className="d-flex align-items-center justify-content-between padding-y-4"
                                >
                                    <div className="d-flex gap1 align-items-center">
                                        <img src={`/src/assets/media/icons/${amenity.icon}`} className={`create-listing-option-box1-icon`} alt={amenity.type_name} />
                                        <div className="text-m1">{amenity.amenity_name}</div>
                                    </div>
                                    
                                    <div className="circle-btn-1" onClick={() => handleAddAmenity(amenity.id)}>
                                        <Icon.PlusLg className='text-m1 color-black1'/>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>




                    
                    {/* 
                    *
                    * Add Financings
                    * 
                    */}
                    <div className={`edit-listing-content-add-amenity ${isAddFinancing ? '' : 'd-none'}`}>
                        <div className="text-l1 fw-bold mar-bottom-l2">Add Amenities</div>

                        {availableFinancingsToAdd && availableFinancingsToAdd.map((financing) => (
                            !financings.some(existFinancing => existFinancing.financing.id === financing.id) 
                            && (
                                <div
                                key={financing.id}                                 
                                className="d-flex align-items-center justify-content-between padding-y-4"
                                >
                                    <div className="d-flex gap1 align-items-center">
                                        <img src={`/src/assets/media/icons/${financing.icon}`} className={`create-listing-option-box1-icon`} alt={financing.financing_type} />
                                        <div className="text-m1">{financing.financing_type}</div>
                                    </div>
                                    
                                    <div className="circle-btn-1" onClick={() => handleAddFinancing(financing.id)}>
                                        <Icon.PlusLg className='text-m1 color-black1'/>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                    
                </div>
            )}

            {!listing[0] && (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}
                    
        </div>
    );
}