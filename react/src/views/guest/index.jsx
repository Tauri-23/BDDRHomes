import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";

export default function GuestIndex() {
    // const {user, token} = useStateContext();

    // if(!token) {
    //     return
    // }

    return (
        <div className="text-l3">HOME</div>
    )
};