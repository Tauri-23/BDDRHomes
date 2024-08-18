import { Link, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useRef, useState } from "react";
import axiosClient from "../../../axios-client";
import { formatPhoneNumber, isEmptyOrSpaces, notify } from "../../../assets/js/utils";

export default function AdminAgentAddAgent() {
    const {isSidenavOpen} = useOutletContext();

    const [fname, setFname] = useState();
    const [mname, setMname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [gender, setGender] = useState('Male');
    const [bdate, setBdate] = useState();

    // REFS
    const fnameRef = useRef(null);
    const mnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const genderRef = useRef(null);
    const bdateRef = useRef(null);



    const handleAddAgent = () => {
        // if(isEmptyOrSpaces(String(fname)) || isEmptyOrSpaces(String(lname)) || isEmptyOrSpaces(String(email)) || isEmptyOrSpaces(String(phone)) || isEmptyOrSpaces(String(gender)) || isEmptyOrSpaces(String(bdate))) {
        //     notify('error', 'please fill up all the fields', 'bottom-left', 3000);
        //     return;
        // }

        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('mname', mname);
        formData.append('lname', lname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('gender', gender);
        formData.append('bdate', bdate);

        axiosClient.post('/add-agent', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
            }
            else
            {
                notify('error', data.message, 'bottom-left', 3000);
            }
        })
    }

    const handleFormatNumber = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        event.target.value = formattedPhoneNumber;
        setPhone(formattedPhoneNumber);
    }


    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            <div className="d-flex mar-bottom-1">
                <Link to={'/BDDRAdmin/Agents'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                    <Icon.ChevronLeft/>
                    Back
                </Link>
            </div> 

            <div className="text-l1 fw-bold mar-bottom-1">Add Agent</div>

            <div className="d-flex flex-direction-y align-items-start gap2">
                <div className="text-m1 color-black3 fst-italic mar-bottom-1">Note: <br/> Username and Password will be automatically created and will be sent to the email.</div>
                
                {/* Name */}
                <div className="d-flex flex-direction-y gap3">
                    <div className="d-flex gap1">
                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="agent_fname" className="text-m2">Firstname</label>
                            <input ref={fnameRef} onInput={() => setFname(fnameRef.current.value)} type="text" id="agent_fname" className="edit-text-1" />
                        </div>

                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="agent_mname" className="text-m2">Middlename</label>
                            <input ref={mnameRef} onInput={() => setMname(mnameRef.current.value)} type="text" id="agent_mname" className="edit-text-1" />
                        </div>

                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="agent_lname" className="text-m2">Lastname</label>
                            <input ref={lnameRef} onInput={() => setLname(lnameRef.current.value)} type="text" id="agent_lname" className="edit-text-1" />
                        </div>
                    </div>                    
                </div>


                {/*  */}
                <div className="d-flex flex-direction-y gap3">
                    <div className="d-flex gap1">
                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="email" className="text-m2">Email</label>
                            <input ref={emailRef} onInput={() => setEmail(emailRef.current.value)} type="text" id="email" className="edit-text-1" />
                        </div>

                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="phone" className="text-m2">phone</label>
                            <input ref={phoneRef} onInput={(event) => handleFormatNumber(event)} type="text" id="phone" className="edit-text-1" maxLength={10} />
                        </div>
                    </div>                    
                </div>


                <div className="d-flex flex-direction-y gap3">
                    <div className="d-flex gap1">
                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="gender" className="text-m2">Gender</label>
                            <select ref={genderRef} onChange={() => setGender(genderRef.current.value)} id="gender" className="edit-text-1">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="agent_mname" className="text-m2">Birthdate</label>
                            <input ref={bdateRef} onInput={() => setBdate(bdateRef.current.value)} type="date" id="agent_mname" className="edit-text-1" />
                        </div>
                    </div>                    
                </div>

                <button onClick={handleAddAgent} className="primary-btn-black1 mar-top-1">Add Agent</button>

            </div>
        </div>
    );
}