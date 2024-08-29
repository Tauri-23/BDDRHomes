import { useOutletContext } from "react-router-dom";

export default function AdminProfileIndex() {
    const {isSidenavOpen} = useOutletContext();

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <div className="text-l1 fw-bold">Profile</div>
        </div>
    );
}