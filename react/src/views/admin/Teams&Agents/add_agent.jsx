import { Link, useNavigate, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useRef, useState } from "react";
import axiosClient from "../../../axios-client";
import { formatPhoneNumber, isEmptyOrSpaces, notify } from "../../../assets/js/utils";
import { fetchAllTeams } from "../../../Services/GeneralTeamsService";

export default function AdminAddAgent() {
    const navigate = useNavigate();
    const {isSidenavOpen} = useOutletContext();

    const [fname, setFname] = useState(null);
    const [mname, setMname] = useState(null);
    const [lname, setLname] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [gender, setGender] = useState('Male');
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [bdate, setBdate] = useState(null);


    const [teams, setTeams] = useState(null);

    // REFS
    const fnameRef = useRef(null);
    const mnameRef = useRef(null);
    const lnameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const genderRef = useRef(null);
    const bdateRef = useRef(null);

    

    useEffect(() => {
        const getAllTeams = async() => {
            const data = await fetchAllTeams();
            setTeams(data);
        }

        getAllTeams();
    }, [])



    const handleAddAgent = () => {
        if(isEmptyOrSpaces(fname) || isEmptyOrSpaces(lname) || isEmptyOrSpaces(email) || isEmptyOrSpaces(phone)
            || isEmptyOrSpaces(selectedTeam) || isEmptyOrSpaces(selectedPosition) || isEmptyOrSpaces(bdate)
        ) {
            notify('error', 'please fill up all the fields', 'bottom-left', 3000);
            return;
        }

        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('mname', mname || null);
        formData.append('lname', lname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('team', selectedTeam);
        formData.append('position', selectedPosition);
        formData.append('gender', gender);
        formData.append('bdate', bdate);

        axiosClient.post('/add-agent', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                navigate('/BDDRAdmin/Teams&Agents')
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
                <Link to={'/BDDRAdmin/Teams&Agents'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
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

                {/* Teams And Position */}
                <div className="d-flex flex-direction-y gap3">
                    <div className="d-flex gap1">
                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="team-select" className="text-m2">Team</label>
                            <select name="team" id="team-select" className="edit-text-1" onChange={(e) => setSelectedTeam(e.target.value)} value={selectedTeam}>
                                <option value={''}>Select Team</option>
                                {teams && teams.map(team => (
                                    <option key={team.id} value={team.id}>{team.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="position-select" className="text-m2">Position</label>
                            <select name="position" id="position-select" className="edit-text-1" onChange={(e) => setSelectedPosition(e.target.value)} value={selectedPosition}>
                                <option value={''}>Select Position</option>
                                <option value={'Team Leader'}>Team Leader</option>
                                <option value={'Agent'}>Agent</option>
                            </select>
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