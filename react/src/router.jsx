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
import AgentListing from "./views/agents/listings";
import AgentIndex from "./views/agents";
import AgentMessages from "./views/agents/messages";
import AgentPerformance from "./views/agents/performance";

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
]);


export default router;