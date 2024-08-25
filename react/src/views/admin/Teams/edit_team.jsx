import { useOutletContext, useParams } from "react-router-dom";

export default function AdminEditTeam() {
    const {isSidenavOpen} = useOutletContext();
    const {teamId} = useParams();

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            Edit Team Here
        </div>
    );
}