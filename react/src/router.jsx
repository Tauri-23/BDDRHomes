import {createBrowserRouter} from "react-router-dom";
import Signup from "./views/guest/signup";
import Signin from "./views/guest/signin";
import NotFound from "./notFound";
import GuestDefault from "./views/guest/default";
import GuestIndex from "./views/guest/index";
import ClientDefault from "./views/clients/default";
import ClientIndex from "./views/clients";
import GuestListings from "./views/guest/listings";
import ClientLikedProperties from "./views/clients/likes";
import ClientViewProperty from "./views/clients/view-property";
import ClientMessages from "./views/clients/messages";

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
                path: '/',
                element: <GuestIndex/>
            },
            {
                path: '/listings',
                element: <GuestListings/>
            },
            {
                path: '/signin',
                element: <Signin/>
            },
            {
                path: '/signup',
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
                path: '/BDDRClient',
                element: <ClientIndex/>
            },
            { //TODO::implement get property id
                path: '/BDDRClient/ViewProperty',
                element: <ClientViewProperty/>
            },
            {
                path: '/BDDRClient/Likes',
                element: <ClientLikedProperties/>
            },
            {
                path: '/BDDRClient/Messages',
                element: <ClientMessages/>
            },
        ]
    },





    /*
    |----------------------------------------
    | Agents 
    |----------------------------------------
    */
]);


export default router;