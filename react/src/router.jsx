import {createBrowserRouter} from "react-router-dom";
import Signup from "./views/guest/signup";
import Signin from "./views/guest/signin";
import NotFound from "./notFound";
import GuestDefault from "./views/guest/default";
import GuestIndex from "./views/guest/index";
import ClientDefault from "./views/clients/default";
import ClientIndex from "./views/clients";

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
            }
        ]
    },





    /*
    |----------------------------------------
    | Agents 
    |----------------------------------------
    */
]);


export default router;