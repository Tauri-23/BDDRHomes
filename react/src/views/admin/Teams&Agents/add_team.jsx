import { Link, useNavigate, useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useRef, useState } from "react";
import axiosClient from "../../../axios-client";
import { isEmptyOrSpaces, notify } from "../../../assets/js/utils";

export default function AdminAddTeam() {
    const navigate = useNavigate();
    const {isSidenavOpen} = useOutletContext();

    // Refs
    const teamNameRef = useRef(null);
    const teamTagRef = useRef(null);
    const teamLogoRef = useRef(null);

    const handleAddBtn = () => {
        if(isEmptyOrSpaces(teamNameRef.current.value) || isEmptyOrSpaces(teamTagRef.current.value) || isEmptyOrSpaces(teamLogoRef.current.value)) {
            return;
        }

        const formData = new FormData();
        formData.append("name", teamNameRef.current.value);
        formData.append("tag", teamTagRef.current.value.toUpperCase());
        formData.append("logo", teamLogoRef.current.files[0]);

        axiosClient.post('/create-team', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                navigate('/BDDRAdmin/Teams&Agents');
            } else {
                notify('error', data.message, 'bottom-left', 3000);
                console.log(data.message);
            }
        })
        .catch(error => console.error(error));
    }

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <div className="d-flex mar-bottom-1">
                <Link to={'/BDDRAdmin/Teams&Agents'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
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
                        <input ref={teamTagRef} type="text" id="team_tag" maxLength={2} className="edit-text-1" placeholder="e.g. TA" style={{textTransform: "uppercase"}}/>
                    </div>
                </div>

                <div className="d-flex gap1">
                    <div className="d-flex flex-direction-y gap4">
                        <label htmlFor="team_logo" className="text-m2">Team logo</label>
                        <input ref={teamLogoRef} type="file" id="team_logo" className="edit-text-1"/>
                    </div>
                </div>
            </div>

            <button onClick={handleAddBtn} className="primary-btn-black1 mar-top-1">Add Team</button>
        </div>
    );
}