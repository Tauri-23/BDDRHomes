import {createBrowserRouter} from "react-router-dom";
import Signup from "./views/guest/signup";
import Signin from "./views/guest/signin";
import NotFound from "./notFound";
import GuestDefault from "./views/guest/default";
import GuestIndex from "./views/guest/index";
import ClientDefault from "./views/clients/default";
import ClientIndex from "./views/clients";
import GuestListings from "./views/guest/listings";
import ClientViewProperty from "./views/clients/view-property";
import ClientMessages from "./views/clients/messages";
import ClientTrippings from "./views/clients/trippings";
import ClientProfile from "./views/clients/profile";
import AgentDefault from "./views/agents/default";
import AgentListing from "./views/agents/Listings/listings";
import AgentIndex from "./views/agents";
import AgentMessages from "./views/agents/messages";
import AgentPerformance from "./views/agents/performance";
import AgentEditListingDefault from "./views/agents/Listings/EditListing/edit-listing-default";
import AgentListingDefault from "./views/agents/Listings/listings-default";
import AgentEditListingPhotos from "./views/agents/Listings/EditListing/edit-listing-photos";
import AgentEditListingName from "./views/agents/Listings/EditListing/edit-listing-name";
import AgentEditListingType from "./views/agents/Listings/EditListing/edit-listing-type";
import AgentEditListingDescription from "./views/agents/Listings/EditListing/edit-listing-description";
import AgentEditListingFloorplan from "./views/agents/Listings/EditListing/edit-listing-floorplan";
import AgentEditListingAmenities from "./views/agents/Listings/EditListing/edit-listing-amenities";
import AgentEditListingFinancing from "./views/agents/Listings/EditListing/edit-listing-financing";
import ClientWishLists from "./views/clients/Wishlist/wishlists";
import ClientViewWishlist from "./views/clients/Wishlist/view-wishlist";
import AdminDefault from "./views/admin/default";
import AdminIndex from "./views/admin";
import ViewProperty from "./views/guest/view-property";
import AdminAgentDefault from "./views/admin/Agents/agent_default";
import AdminAgentIndex from "./views/admin/Agents/agents";
import AdminAgentProfile from "./views/admin/Agents/agent_profile";
import AdminAgentAddAgent from "./views/admin/Agents/agent_add_agent";
import AdminPropertyDefault from "./views/admin/Properties/property_default";
import AdminPropertyIndex from "./views/admin/Properties/property_index";
import AdminAddPropertyDefault from "./views/admin/Properties/AddProperty/add_property_default";
import AdminAddPropertyIndex from "./views/admin/Properties/AddProperty/add_property_index";
import AdminAddPropertyType from "./views/admin/Properties/AddProperty/add_property_type";
import AdminAddPropertyNameloc from "./views/admin/Properties/AddProperty/add_property_nameloc";
import AdminAddPropertyFloorplan from "./views/admin/Properties/AddProperty/add_property_floorplan";
import AdminAddPropertyStep2 from "./views/admin/Properties/AddProperty/add_property_step2";
import AdminAddPropertyAmenities from "./views/admin/Properties/AddProperty/add_property_amenities";
import AdminAddPropertyPhotos from "./views/admin/Properties/AddProperty/add_property_photos";
import AdminAddPropertyFinancing from "./views/admin/Properties/AddProperty/add_property_financing";
import AdminAddPropertyStep3 from "./views/admin/Properties/AddProperty/add_property_step3";
import AdminAddPropertyPriceReqIncome from "./views/admin/Properties/AddProperty/add_property_price_req_income";
import AdminAddPropertyFinal from "./views/admin/Properties/AddProperty/add_property_final";
import AdminEditPropertyDefault from "./views/admin/Properties/EditProperty/edit_property_default";
import AdminEditPropertyPhotos from "./views/admin/Properties/EditProperty/edit_property_photos";
import AdminEditPropertyName from "./views/admin/Properties/EditProperty/edit_property_name";
import AdminEditPropertyType from "./views/admin/Properties/EditProperty/edit_property_type";
import AdminEditPropertyDescription from "./views/admin/Properties/EditProperty/edit_property_description";
import AdminEditPropertyFloorplan from "./views/admin/Properties/EditProperty/edit_property_floorplan";
import AdminEditPropertyAmenities from "./views/admin/Properties/EditProperty/edit_property_amenities";
import AdminEditPropertyFinancings from "./views/admin/Properties/EditProperty/edit_property_financings";
import AgentCreatePropertyListingProperty from "./views/agents/Listings/CreateListing/create_property_listing_property";
import AgentCreatePropertyListingDefault from "./views/agents/Listings/CreateListing/create-property-listing-default";
import AgentCreatePropertyListingIndex from "./views/agents/Listings/CreateListing/create-property-listing-index";
import AgentCreatePropertyListingFinal from "./views/agents/Listings/CreateListing/create_property_listing_final";

const router = createBrowserRouter([
    /*
    |----------------------------------------
    | Guest 
    |----------------------------------------
    */
    {
        path: '/',
        element: <GuestDefault/>,
        children: [
            {
                index: true,
                element: <GuestIndex/>
            },
            {
                path: 'listings',
                element: <GuestListings/>
            },
            {
                path: 'viewProperty/:id',
                element: <ViewProperty/>
            },
            {
                path: 'signin',
                element: <Signin/>
            },
            {
                path: 'signup',
                element: <Signup/>
            },
        ]
    },
    

    


    /*
    |----------------------------------------
    | Not Found 
    |----------------------------------------
    */
    {
        path: '*',
        element: <NotFound/>
    },





    /*
    |----------------------------------------
    | Clients 
    |----------------------------------------
    */
    {
        path: '/BDDRClient',
        element: <ClientDefault/>,
        children: [
            {
                index: true,
                element: <ClientIndex/>
            },
            { //TODO::implement get property id
                path: 'ViewProperty/:id',
                element: <ClientViewProperty/>
            },

            // Wishlists
            {
                path: 'Wishlists',
                element: <ClientWishLists/>
            },            
            {
                path: 'ViewWishlist/:wishlistId',
                element: <ClientViewWishlist/>
            },


            // Messages
            {
                path: 'Messages',
                element: <ClientMessages/>
            },


            // Trippings
            {
                path: 'Trippings',
                element: <ClientTrippings/>
            },
            {
                path: 'Profile',
                element: <ClientProfile/>
            }
        ]
    },





    /*
    |----------------------------------------
    | Agents 
    |----------------------------------------
    */
    {
        path: '/BDDRAgent',
        element: <AgentDefault/>,
        children: [
            {
                index: true,
                element: <AgentIndex/>
            },



            {
                path: 'Listings',
                element: <AgentListingDefault/>,
                children: [
                    {
                        index: true,
                        element: <AgentListing/>
                    },
                    {
                        path: 'EditListing/:id/',
                        element: <AgentEditListingDefault/>,
                        children: [
                            {
                                path: 'Photos',
                                element: <AgentEditListingPhotos/>
                            },
                            {
                                path: 'Name',
                                element: <AgentEditListingName/>
                            },
                            {
                                path: 'Type',
                                element: <AgentEditListingType/>
                            },
                            {
                                path: 'Description',
                                element: <AgentEditListingDescription/>
                            },
                            {
                                path: 'Floorplan',
                                element: <AgentEditListingFloorplan/>
                            },
                            {
                                path: 'Amenities',
                                element: <AgentEditListingAmenities/>
                            },
                            {
                                path: 'Financing',
                                element: <AgentEditListingFinancing/>
                            }
                        ]
                    },
                ]
            },
            


                    
            {
                path: 'Messages',
                element: <AgentMessages/>
            },
            {
                path: 'Performance',
                element: <AgentPerformance/>
            }
        ]
    },
    {
        path: '/BDDRAgent/CreateListing',
        element: <AgentCreatePropertyListingDefault/>,
        children: [
            {
                index: true,
                element: <AgentCreatePropertyListingIndex/>
            },
            {
                path: 'Property',
                element: <AgentCreatePropertyListingProperty/>
            },
            {
                path: 'Finalize',
                element: <AgentCreatePropertyListingFinal/>
            }
        ]
    },





    /*
    |----------------------------------------
    | Admins
    |----------------------------------------
    */
    {
        path: '/BDDRAdmin',
        element: <AdminDefault/>,
        children: [
            {
                index: true,
                element: <AdminIndex/>
            },


            {
                path: 'Agents',
                element: <AdminAgentDefault/>,
                children: [
                    {
                        index: true,
                        element: <AdminAgentIndex/>
                    },
                    {
                        path: 'AgentProfile/:agentId',
                        element: <AdminAgentProfile/>
                    },
                    {
                        path: 'AddAgent',
                        element: <AdminAgentAddAgent/>
                    }
                ]
            },


            {
                path: 'Properties',
                element: <AdminPropertyDefault/>,
                children: [
                    {
                        index: true,
                        element: <AdminPropertyIndex/>
                    },
                    
                    // Add Property
                    {
                        path: 'AddProperty',
                        element: <AdminAddPropertyDefault/>,
                        children: [
                            {
                                index: true,
                                element: <AdminAddPropertyIndex/>
                            },
                            {
                                path: 'PropertyType',
                                element: <AdminAddPropertyType/>
                            },
                            {
                                path: 'NameAndLoc',
                                element: <AdminAddPropertyNameloc/>
                            },
                            {
                                path: 'Floorplan',
                                element: <AdminAddPropertyFloorplan/>
                            },
                            {
                                path: 'Step2',
                                element: <AdminAddPropertyStep2/>
                            },
                            {
                                path: 'Amenities',
                                element: <AdminAddPropertyAmenities/>
                            },
                            {
                                path: 'Photos',
                                element: <AdminAddPropertyPhotos/>
                            },
                            {
                                path: 'Step3',
                                element: <AdminAddPropertyStep3/>
                            },
                            {
                                path: 'Financing',
                                element: <AdminAddPropertyFinancing/>
                            },
                            {
                                path: 'Price',
                                element: <AdminAddPropertyPriceReqIncome/>
                            }
                            ,
                            {
                                path: 'Finalize',
                                element: <AdminAddPropertyFinal/>
                            }
                        ]
                    },

                    // Edit Property
                    {
                        path: 'EditProperty/:id/',
                        element: <AdminEditPropertyDefault/>,
                        children: [
                            {
                                path: 'Photos',
                                element: <AdminEditPropertyPhotos/>
                            },
                            {
                                path: 'Name',
                                element: <AdminEditPropertyName/>
                            },
                            {
                                path: 'Type',
                                element: <AdminEditPropertyType/>
                            },
                            {
                                path: 'Description',
                                element: <AdminEditPropertyDescription/>
                            },
                            {
                                path: 'Floorplan',
                                element: <AdminEditPropertyFloorplan/>
                            },
                            {
                                path: 'Amenities',
                                element: <AdminEditPropertyAmenities/>
                            },
                            {
                                path: 'Financing',
                                element: <AdminEditPropertyFinancings/>
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);


export default router;