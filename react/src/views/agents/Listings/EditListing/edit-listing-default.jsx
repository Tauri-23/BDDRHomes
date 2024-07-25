import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import '/src/assets/css/agent-edit-listing.css';
import { fetchAgentSpecificPropertyFull } from "../../../../Services/AgentListingService";
import * as Icon from 'react-bootstrap-icons';
import { ToastContainer } from "react-toastify";
import { fetchPropertyAmenities } from "../../../../Services/AgentCreateListingService";
import axiosClient from "../../../../axios-client";
import { notify } from "../../../../assets/js/utils";

export default function AgentEditListingDefault() {
    const {id} = useParams(); // Property Id
    const [listing, setListing] = useState([]); // General Listing Object from Database
    const [amenities, setAmenities] = useState([]); //Amenities that is set to the Property, hiniwalay ko para decouple sya sa listing object para kapag niremove hindi na naka base sa listing object
    const [availableAmenitiesToAdd, setAvailableAmenitiestoAdd] = useState([]); //This is the array of the amenities that are available to add
    const location = useLocation();

    const [isSidenavHidden, setSidenavHidden] = useState(false); 
    const [isAddAmenity, setAddAmenity] = useState(false);





    useEffect(() => {
        const getListingFull = async() => {
            try {
                const data = await fetchAgentSpecificPropertyFull(id);
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

        getListingFull();
        getAvailableAmenities();
           
    }, []);

    

    /*
     This Will Populate the Amenities 
    */
    useEffect(() => {
        if (listing && listing.data && listing.data[0]) {
            setAmenities(listing.data[0].amenities);
        }
    }, [listing]);





    const handleAddAmenity = (amenityId) => {       

        const formData = new FormData();
        formData.append('propertyId', id);
        formData.append('amenityId', amenityId);

        console.log(amenities);
        console.log(amenityId);

        axiosClient.post('/add-published-prop-amenity', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('success', data.message, 3000);
                setAmenities([...amenities, data.amenity]);
            } 
            else {
                notify('error', data.message, 3000);
            }
        });
    }





    return (
        <div className="edit-listing-content">                

            {listing.data && (
                <div className="d-flex w-100">
                    <div className={`edit-listing-sidenav ${isSidenavHidden ? 'hidden' : ''}`}>
                        <div className="text-l1 fw-bold d-flex gap1 mar-bottom-1">
                            <Link to={'/BDDRAgent/Listings'} className="text-decoration-none color-black1">
                                <div className="circle-btn-1">
                                    <Icon.ArrowLeft className='text-m1'/>
                                </div>
                            </Link>
                            Edit Listing
                        </div>

                        <Link to={'Photos'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Photos' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Photos</div>
                                <div className="edit-listing-sidenav-box-prop-pic-cont">
                                    {listing.data[0].photos.slice(0,5).map(photo =>
                                        <div key={photo.id} className="edit-listing-sidenav-box-prop-pic">
                                            <img src={`/src/assets/media/properties/${photo.filename}`} alt="" />
                                        </div>
                                    )}
                                    
                                </div>
                            </div>
                        </Link>

                        <Link to={'Name'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Name' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Name</div>
                                <div className="text-l3">{listing.data[0].name}</div>
                            </div>
                        </Link>

                        <Link to={'Type'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Type' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Property Type</div>
                                <div className="text-l3" id="property-type-sidenav">{listing.data ? listing.data[0].property_type.type_name : 'Loading...'}</div>
                            </div>
                        </Link>                        

                        <Link to={'Description'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Description' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Description</div>
                                <div className="line-clamp-3">{listing.data[0].description}</div>
                            </div>
                        </Link>

                        <Link to={'Address'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Address' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold">Address</div>
                                <div className="text-l3">{listing.data[0].address}</div>
                            </div>
                        </Link>

                        <Link to={'Floorplan'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Floorplan' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Floorplan</div>
                                <div className="listing-spec-box3"><img src="/src/assets/media/icons/bed.svg" className="listing-spec-box-icon"/>Bedroom: {listing.data[0].bedroom}</div>
                                <div className="listing-spec-box3"><img src="/src/assets/media/icons/bathtub.svg" className="listing-spec-box-icon"/>Bath: {listing.data[0].bath}</div>
                                <div className="listing-spec-box3"><img src="/src/assets/media/icons/garages.svg" className="listing-spec-box-icon"/>Carport: {listing.data[0].carport}</div>
                                <div className="text-m2 mar-top-3 text-decoration-underline">See more...</div>
                            </div>
                        </Link>

                        <Link to={'Amenities'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Amenities' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Amenities</div>
                                {listing.data[0].amenities.slice(0,3).map(amenity =>
                                    <div key={amenity.amenity.id} className="listing-spec-box3"><img src={`/src/assets/media/icons/${amenity.amenity.icon}`} className="listing-spec-box-icon"/>{amenity.amenity.amenity_name}</div>
                                )}
                                <div className="text-m2 mar-top-3 text-decoration-underline">See more...</div>
                            </div>
                        </Link>

                        <Link to={'Financing'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Financing' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Financing</div>
                                {listing.data[0].financings.slice(0,3).map(financing => 
                                    <div key={financing.financing.id} className="listing-spec-box3"><img src={`/src/assets/media/icons/${financing.financing.icon}`} className="listing-spec-box-icon"/>{financing.financing.financing_type}</div>
                                )}

                            </div>
                        </Link>

                        <Link to={'Price'} className="text-decoration-none color-black1">
                            <div className={`edit-listing-sidenav-box ${location.pathname === '/BDDRAgent/Listings/EditListing/'+ id +'/Price' ? 'active' : ''}`}>
                                <div className="text-m2 fw-bold mar-bottom-3">Price and Required Income</div>
                                <div className="text-l3">₱ {listing.data[0].price}</div>

                            </div>
                        </Link>
                    </div>

                    {/* Outlet Content (CHildren) */}
                    <div className={`edit-listing-content-2 ${isAddAmenity ? 'compressed' : ''}`}>
                        <Outlet 
                            context={{
                                id: listing.data[0].id,
                                photos: listing.data[0].photos,
                                name: listing.data[0].name,
                                type: listing.data[0].property_type.id,
                                description: listing.data[0].description,
                                propertyAmenities: amenities,
                                setPropertyAmenities: setAmenities,
                                bedroom: listing.data[0].bedroom,
                                bath: listing.data[0].bath,
                                carport: listing.data[0].carport,
                                lotArea: listing.data[0].lot_area,
                                floorArea: listing.data[0].floor_area,
                                setSideNavHidden: setSidenavHidden,
                                isSidenavHidden: isSidenavHidden,
                                setAddAmenity: setAddAmenity,
                                setListing: setListing,
                                listing: listing
                            }}/>
                    </div>

                    {/* Add Amenities */}
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
                    
                </div>
            )}

            {!listing.data && (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}

            <ToastContainer/>

                    
        </div>
    );
}