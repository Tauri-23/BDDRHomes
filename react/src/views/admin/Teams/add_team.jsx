import { Link, useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useRef } from "react";

export default function AdminAddTeam() {
    const {isSidenavOpen} = useOutletContext();

    // Refs
    const teamNameRef = useRef(null);
    const teamTagRef = useRef(null);
    const teamColorRef = useRef(null);
    const teamLogoRef = useRef(null);

    const handleAddBtn = () => {
        console.log(teamColorRef.current.value);
    }

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <div className="d-flex mar-bottom-1">
                <Link to={'/BDDRAdmin/Agents'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                    <Icon.ChevronLeft/>
                    Back
                </Link>
            </div> 

            <div className="text-l1 fw-bold mar-bottom-1">Add Team</div>

            <div className="d-flex flex-direction-y align-items-start gap2">
                <div className="d-flex gap1">
                    <div className="d-flex flex-direction-y gap4">
                        <label htmlFor="team_name" className="text-m2">Team name</label>
                        <input ref={teamNameRef} type="text" id="team_name" className="edit-text-1" />
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <label htmlFor="team_tag" className="text-m2">Team tag</label>
                        <input ref={teamTagRef} type="text" id="team_tag" maxLength={2} className="edit-text-1" placeholder="e.g. TA"/>
                    </div>
                </div>

                <div className="d-flex gap1">
                    <div className="d-flex flex-direction-y gap4">
                        <label htmlFor="team_bg" className="text-m2">Team background color</label>
                        <input ref={teamColorRef} type="color" id="team_bg" className="edit-text-1"/>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <label htmlFor="team_logo" className="text-m2">Team logo <span className="text-m3 fst-italic color-black3">(optional: it can be add later)</span></label>
                        <input ref={teamLogoRef} type="file" id="team_logo" className="edit-text-1"/>
                    </div>
                </div>
            </div>

            <button onClick={handleAddBtn} className="primary-btn-black1 mar-top-1">Add Team</button>
        </div>
    );
}