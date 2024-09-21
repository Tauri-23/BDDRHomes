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
import AgentDefault from "./views/agents/default";
import AgentIndex from "./views/agents";
import AgentMessages from "./views/agents/messages";
import AgentPerformance from "./views/agents/performance";
import ClientWishLists from "./views/clients/Wishlist/wishlists";
import ClientViewWishlist from "./views/clients/Wishlist/view-wishlist";
import AdminDefault from "./views/admin/default";
import AdminIndex from "./views/admin";
import ViewProperty from "./views/guest/view-property";
import AdminAgentDefault from "./views/admin/Agents/agent_default";
import AdminAgentIndex from "./views/admin/Agents/agents";
import AdminPropertyDefault from "./views/admin/Properties/default";
import AdminPropertyIndex from "./views/admin/Properties";
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
import AdminSettingsDefault from "./views/admin/Settings/default";
import AdminSettingsIndex from "./views/admin/Settings";
import AdminSettingsAmenities from "./views/admin/Settings/amenities_settings";
import AdminSettingsPropertyTypes from "./views/admin/Settings/property_types_settings";
import AdminSettingsFinancings from "./views/admin/Settings/financings_settings";
import AdminTeamsDefault from "./views/admin/Teams&Agents/default";
import AdminTeamsIndex from "./views/admin/Teams&Agents";
import AdminAddTeam from "./views/admin/Teams&Agents/add_team";
import AdminProfileDefault from "./views/admin/Profile/admin_profile_default";
import AdminProfileIndex from "./views/admin/Profile/admin_profile_index";
import AdminAgentProfile from "./views/admin/Teams&Agents/agent_profile";
import AdminAddAgent from "./views/admin/Teams&Agents/add_agent";
import AdminAddDeveloper from "./views/admin/Properties/add_developer";
import AdminEditPropertyModel from "./views/admin/Properties/EditProperty/edit_property_model";
import AgentInquiries from "./views/agents/inquiries";
import ClientProfile from "./views/clients/Profile/profile";
import ClientEditProfile from "./views/clients/Profile/EditProfile";
import ClientOngoingTransactions from "./views/clients/Transactions/OngoingTransactions";
import AgentTransactionDefault from "./views/agents/Transactions/transactionDefault";
import AgentPendingTransactions from "./views/agents/Transactions/pendingTransactions";
import AgentOngoingTransaction from "./views/agents/Transactions/ongoingTransactions";
import AgentViewOngoingTransaction from "./views/agents/Transactions/viewOngoingTransaction";

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

            // Profile
            {
                path: 'Profile',
                element: <ClientProfile/>
            },
            {
                path: 'EditProfile',
                element: <ClientEditProfile/>
            },

            // Ongoing Transactions
            {
                path: 'OngoingTransactions',
                element: <ClientOngoingTransactions/>
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



            // {
            //     path: 'Listings',
            //     element: <AgentListingDefault/>,
            //     children: [
            //         {
            //             index: true,
            //             element: <AgentListing/>
            //         },
            //         {
            //             path: 'EditListing/:id/',
            //             element: <AgentEditListingDefault/>,
            //             children: [
            //                 {
            //                     path: 'Photos',
            //                     element: <AgentEditListingPhotos/>
            //                 },
            //                 {
            //                     path: 'Name',
            //                     element: <AgentEditListingName/>
            //                 },
            //                 {
            //                     path: 'Type',
            //                     element: <AgentEditListingType/>
            //                 },
            //                 {
            //                     path: 'Description',
            //                     element: <AgentEditListingDescription/>
            //                 },
            //                 {
            //                     path: 'Floorplan',
            //                     element: <AgentEditListingFloorplan/>
            //                 },
            //                 {
            //                     path: 'Amenities',
            //                     element: <AgentEditListingAmenities/>
            //                 },
            //                 {
            //                     path: 'Financing',
            //                     element: <AgentEditListingFinancing/>
            //                 }
            //             ]
            //         },
            //     ]
            // },

            {
                path: 'Unquiries',
                element: <AgentInquiries/>
            },  
            {
                path: 'Messages',
                element: <AgentMessages/>
            },

            // Transactions
            {
                path: 'Transactions',
                element: <AgentTransactionDefault/>,
                children: [
                    {
                        index: true,
                        element: <AgentPendingTransactions/>
                    },
                    {
                        path: "Ongoing",
                        element: <AgentOngoingTransaction/>
                    }
                ]
            },
            {
                path: 'ViewTransaction/:transactionId',
                element: <AgentViewOngoingTransaction/>
            },

            {
                path: 'Performance',
                element: <AgentPerformance/>
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

            // Teams
            {
                path: 'Teams&Agents',
                element: <AdminTeamsDefault/>,
                children: [
                    {
                        index: true,
                        element: <AdminTeamsIndex/>
                    },
                    {
                        path: 'AgentProfile/:agentId',
                        element: <AdminAgentProfile/>
                    },
                    {
                        path: 'AddTeam',
                        element: <AdminAddTeam/>
                    },
                    {
                        path: 'AddAgent',
                        element: <AdminAddAgent/>
                    },
                    {
                        path: 'Edit/:teamId',
                        element: <AdminTeamsIndex/>
                    },
                ]
            },

            // Agents
            {
                path: 'Agents',
                element: <AdminAgentDefault/>,
                children: [
                    {
                        index: true,
                        element: <AdminAgentIndex/>
                    }
                ]
            },

            // Properties
            {
                path: 'Properties&Developers',
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
                                path: 'Model',
                                element: <AdminEditPropertyModel/>
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
                    },

                    // Add Developer
                    {
                        path: "AddDeveloper",
                        element: <AdminAddDeveloper/>
                    }
                ]
            },

            // Settings
            {
                path: 'Settings',
                element: <AdminSettingsDefault/>,
                children: [
                    {
                        index: true,
                        element: <AdminSettingsIndex/>
                    },


                    {
                        path: 'PropertyTypes',
                        element: <AdminSettingsPropertyTypes/>
                    },
                    {
                        path: 'Amenities',
                        element: <AdminSettingsAmenities/>
                    },
                    {
                        path: 'Financings',
                        element: <AdminSettingsFinancings/>
                    }
                ]
            },

            // Profile
            {
                path: 'Profile',
                element: <AdminProfileDefault/>,
                children: [
                    {
                        index: true,
                        element: <AdminProfileIndex/>
                    }
                ]
            }
        ]
    }
]);


export default router;