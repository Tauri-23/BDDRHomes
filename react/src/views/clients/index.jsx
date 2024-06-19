import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";

export default function ClientIndex() {
    // const {user, token} = useStateContext();

    // if(!token) {
    //     return
    // }

    return (
        <div className="text-l3">Client Home</div>
    )
};