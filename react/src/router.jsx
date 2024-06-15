import {createBrowserRouter} from "react-router-dom";
import Signup from "./views/public/signup";
import Signin from "./views/public/signin";
import Index from "./views/public";
import NotFound from "./views/public/notFound";

const router = createBrowserRouter([
    /**
     * Public
     */
    {
        path: '/signin',
        element: <Signin/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/',
        element: <Index/>
    },
    {
        path: '*',
        element: <NotFound/>
    },





    /**
     * Clients
     */





    /**
     * Agents
     */
]);


export default router;