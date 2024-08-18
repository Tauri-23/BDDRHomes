import { useOutletContext } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect } from "react";

export default function AdminIndex() {
    const {user} = useStateContext();
    const {isSidenavOpen} = useOutletContext();

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            asdasdasdasdasd
        </div>
    );
}