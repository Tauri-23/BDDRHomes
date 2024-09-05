import { Link, useNavigate, useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useRef, useState } from "react";
import { isEmptyOrSpaces, notify } from "../../../assets/js/utils";
import axiosClient from "../../../axios-client";

export default function AdminAddDeveloper() {
    const navigate = useNavigate();
    const {isSidenavOpen} = useOutletContext();

    const [name, setName] = useState('');

    const devLogoRef = useRef(null);


    const handleAddBtn = () => {
        if(isEmptyOrSpaces(name) || isEmptyOrSpaces(devLogoRef.current.value)) {
            notify('error', 'please fill up all the fields', 'bottom-left', 3000);
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("logo", devLogoRef.current.files[0]);

        axiosClient.post('/create-developer', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                navigate('/BDDRAdmin/Properties&Developers');
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
                <Link to={'/BDDRAdmin/Properties&Developers'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                    <Icon.ChevronLeft/>
                    Back
                </Link>
            </div> 

            <div className="text-l1 fw-bold mar-bottom-1">Add Developer</div>

            <div className="d-flex flex-direction-y align-items-start gap2">
                <div className="d-flex gap1">
                    <div className="d-flex flex-direction-y gap4">
                        <label htmlFor="developer_name" className="text-m2">Developer name</label>
                        <input onInput={(e) => setName(e.target.value)} type="text" id="developer_name" className="edit-text-1" />
                    </div>
                </div>

                <div className="d-flex gap1">
                    <div className="d-flex flex-direction-y gap4">
                        <label htmlFor="team_logo" className="text-m2">Developer logo</label>
                        <input ref={devLogoRef} type="file" id="team_logo" className="edit-text-1"/>
                    </div>
                </div>
            </div>

            <button onClick={handleAddBtn} className="primary-btn-black1 mar-top-1">Add Developer</button>
        </div>
    );
}