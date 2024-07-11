import {createBrowserRouter} from "react-router-dom";
import Signup from "./views/guest/signup";
import Signin from "./views/guest/signin";
import NotFound from "./notFound";
import GuestDefault from "./views/guest/default";
import GuestIndex from "./views/guest/index";
import ClientDefault from "./views/clients/default";
import ClientIndex from "./views/clients";
import GuestListings from "./views/guest/listings";
import ClientWishLists from "./views/clients/wishlists";
import ClientViewProperty from "./views/clients/view-property";
import ClientMessages from "./views/clients/messages";
import ClientTrippings from "./views/clients/trippings";
import ClientProfile from "./views/clients/profile";
import AgentDefault from "./views/agents/default";
import AgentListing from "./views/agents/Listings/listings";
import AgentIndex from "./views/agents";
import AgentMessages from "./views/agents/messages";
import AgentPerformance from "./views/agents/performance";
import AgentCreateListingDefault from "./views/agents/Listings/CreateListing/create-listing-default";
import AgentCreateListingType from "./views/agents/Listings/CreateListing/create-listings-type";
import AgentCreateListingIndex from "./views/agents/Listings/CreateListing/create-listing-index";
import AgentCreateListingNameLoc from "./views/agents/Listings/CreateListing/create-listing-nameloc";
import AgentCreateListingFloorPlan from "./views/agents/Listings/CreateListing/create-listing-floorplan";
import AgentCreateListingStep2 from "./views/agents/Listings/CreateListing/create-listing-step2";
import AgentCreateListingAmenities from "./views/agents/Listings/CreateListing/create-listing-amenities";
import AgentCreateListingPhotos from "./views/agents/Listings/CreateListing/create-listing-photos";
import AgentCreateListingStep3 from "./views/agents/Listings/CreateListing/create-listing-step3";
import AgentCreateListingFinancing from "./views/agents/Listings/CreateListing/create-listing-financing";
import AgentCreateListingFinal from "./views/agents/Listings/CreateListing/create-listing-final";

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
    | Clients 
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
                path: 'ViewProperty',
                element: <ClientViewProperty/>
            },
            {
                path: 'Likes',
                element: <ClientWishLists/>
            },
            {
                path: 'Messages',
                element: <ClientMessages/>
            },
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
                element: <AgentListing/>
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
        element: <AgentCreateListingDefault/>,
        children: [
            {
                index: true,
                element: <AgentCreateListingIndex/>
            },
            {
                path: 'PropertyType',
                element: <AgentCreateListingType/>
            },
            {
                path: 'NameAndLoc',
                element: <AgentCreateListingNameLoc/>
            },
            {
                path: 'Floorplan',
                element: <AgentCreateListingFloorPlan/>
            },
            {
                path: 'Step2',
                element: <AgentCreateListingStep2/>
            },
            {
                path: 'Amenities',
                element: <AgentCreateListingAmenities/>
            },
            {
                path: 'Photos',
                element: <AgentCreateListingPhotos/>
            },
            {
                path: 'Step3',
                element: <AgentCreateListingStep3/>
            },
            {
                path: 'Financing',
                element: <AgentCreateListingFinancing/>
            },
            {
                path: 'Finalize',
                element: <AgentCreateListingFinal/>
            }
        ]
    }, 
]);


export default router;