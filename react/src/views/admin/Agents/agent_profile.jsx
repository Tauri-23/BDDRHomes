import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { fetchAgentInfos } from "../../../Services/AdminAgentService";
import { fetchAgentPublishedProperties } from "../../../Services/AgentListingService";
import * as Icon from 'react-bootstrap-icons';
import { formatDate, formatDateTime, notify } from "../../../assets/js/utils";
import axiosClient from "../../../axios-client";
import { AdminAgentProfileInfoWithEditText1 } from "../../../components/AdminComponents/admin_agent_profile_info_with_edit_text1";
import { useModal } from "../../../contexts/ModalContext";

export default function AdminAgentProfile() {
    const {showModal} = useModal();
    const {agentId} = useParams();
    const {isSidenavOpen} = useOutletContext();
    const [agent, setAgent] = useState(null);
    const [properties, setProperties] = useState(null);
    const navigate = useNavigate();

    // Edit States
    const [isEditFname, setEditFname] = useState(false);
    const [isEditMname, setEditMname] = useState(false);
    const [isEditLname, setEditLname] = useState(false);
    const [isEditEmail, setEditEmail] = useState(false);
    const [isEditPhone, setEditPhone] = useState(false);

    // New Agent Info Value
    const [fname, setFname] = useState(null);
    const [mname, setMname] = useState(null);
    const [lname, setLname] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);



    // Populate Agent and Properties
    useEffect(() => {
        const getAgentInfos = async() => {
            try {
                const data = await fetchAgentInfos(agentId);
                setAgent(data);
            } catch (error) {console.log(error)}
        }

        const getProperties = async() => {
            try {
                const data = await fetchAgentPublishedProperties(agentId);
                setProperties(data);
            } catch (error) {console.error(error);}
        }

        getAgentInfos();
        getProperties();
    }, []);

    // Populate REFs' Values
    useEffect(() => {
        setFname(agent?.firstname);
        setMname(agent?.middlename);
        setLname(agent?.lastname);
        setEmail(agent?.email);
        setPhone(agent?.phone);
    }, [agent]);

    // DEBUG
    // useEffect(() => {
    //     console.log(agent);
    // }, [agent]);



    // Handlers
    const handleSaveInfo = (info, editType) => {
        const formData = new FormData();
        formData.append('agentId', agentId);
        formData.append('newInfo', info);
        formData.append('editType', editType);

        axiosClient.post('/update-agent-info', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setAgent((prevAgent) => {
                    const updatedAgent = {...prevAgent}
                    switch(editType){
                        case "fname":
                            updatedAgent.firstname = info;
                            break;
                        case "mname":
                            updatedAgent.middlename = info;
                            break;
                        case "lname":
                            updatedAgent.lastname = info;
                            break;
                        case "email":
                            updatedAgent.email = info;
                            break;
                        case "phone":
                            updatedAgent.phone = info;
                            break;
                        default:
                            return updatedAgent;
                    }
                    
                    return updatedAgent;
                });
                notify('default', data.message, 'bottom-left', 3000);
            } else {
                notify('error', data.message, 'bottom-left', 3000);
            }
        }).catch(error => {console.error(error)});
        
    }

    const handleDeleteAgentPost = () => {
        const formData = new FormData();
        formData.append('id', agentId);

        axiosClient.post('/del-agent', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                navigate('/BDDRAdmin/Agents');
            }
            else {
                notify('error', data.message, 'bottom-left', 3000);
            }
        })
    }

    const handleDeleteAgent = () => {
        showModal('AdminDelAgentConfirmationModal1', {agent, handleDeleteAgentPost});
    }



    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {agent && properties && (
                <div className="d-flex mar-bottom-1">
                    <Link to={'/BDDRAdmin/Agents'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                        <Icon.ChevronLeft/>
                        Back
                    </Link>
                </div> 
            )}
            

            {agent && properties
            ? (
                <div className="agent-profile-cont">

                    {/* Left cont */}
                    <div className="agent-profile-left-cont">
                        <div className="agent-profile-generic-cont1">
                            <div className="agent-profile-pfp-cont">
                                {agent.pfp
                                ? (<img src={`/src/assets/media/agents/pfp/${agent.pfp}`}/>)
                                : (<div className="">{agent.firstname[0]}</div>)}
                            </div>

                            <div className="d-flex flex-direction-y text-center">
                                <div className="text-m1">{agent.firstname} {agent.middlename || ''} {agent.lastname}</div>
                                <div className="text-m2">Agent</div>
                            </div>

                            <div className="d-flex flex-direction-y gap3 w-100">
                                <div className="primary-btn-black1 w-100 text-center">View Performance</div>
                            </div>                                 
                        </div>

                        <div className="agent-profile-generic-cont1">
                            <div className="d-flex flex-direction-y gap2">
                                <div className="d-flex align-items-center gap3">
                                    <Icon.PersonVcard className="text-m1"/>
                                    <div className="text-m2">{agent.id}</div>
                                </div>
                                <div className="d-flex align-items-center gap3">
                                    <Icon.Envelope className="text-m1"/>
                                    <div className="text-m2">{agent.email}</div>
                                </div>
                                <div className="d-flex align-items-center gap3">
                                    <Icon.Telephone className="text-m1"/>
                                    <div className="text-m2">{agent.phone}</div>
                                </div>
                                <div className="d-flex align-items-center gap3">
                                    <Icon.GenderAmbiguous className="text-m1"/>
                                    <div className="text-m2">{agent.gender}</div>
                                </div>
                                <div className="d-flex align-items-center gap3">
                                    <Icon.Cake className="text-m1"/>
                                    <div className="text-m2">{formatDate(agent.bdate)}</div>
                                </div>
                                <div className="d-flex align-items-center gap3">
                                    <Icon.Calendar3 className="text-m1"/>
                                    <div className="text-m2">{formatDateTime(agent.created_at)}</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="agent-profile-right-cont">

                        {/* Personal Info */}
                        <div className="agent-profile-generic-cont2 d-flex flex-direction-y gap2">
                            <div className="text-l3 fw-bold mar-bottom-3">Personal Information</div>
                            
                            {/* Fname */}
                            <AdminAgentProfileInfoWithEditText1
                            editType={'fname'}
                            label={'First name'}
                            information={agent.firstname}
                            informationNew={fname}
                            setInformationNew={setFname}
                            isEditInformation={isEditFname}
                            setEditInformation={setEditFname}
                            handleSaveInformation={handleSaveInfo}
                            />

                            {/* Mname */}
                            <AdminAgentProfileInfoWithEditText1
                            editType={'mname'}
                            label={'Middle name'}
                            information={agent.middlename}
                            informationNew={mname}
                            setInformationNew={setMname}
                            isEditInformation={isEditMname}
                            setEditInformation={setEditMname}
                            handleSaveInformation={handleSaveInfo}
                            />

                            {/* Lname */}
                            <AdminAgentProfileInfoWithEditText1
                            editType={'lname'}
                            label={'Last name'}
                            information={agent.lastname}
                            informationNew={lname}
                            setInformationNew={setLname}
                            isEditInformation={isEditLname}
                            setEditInformation={setEditLname}
                            handleSaveInformation={handleSaveInfo}
                            />
                                                       
                        </div>

                        {/* Contact Info */}
                        <div className="agent-profile-generic-cont2 d-flex flex-direction-y gap2">
                            <div className="text-l3 fw-bold mar-bottom-3">Contact Information</div>

                            <AdminAgentProfileInfoWithEditText1
                            editType={'email'}
                            label={'Email'}
                            information={agent.email}
                            informationNew={email}
                            setInformationNew={setEmail}
                            isEditInformation={isEditEmail}
                            setEditInformation={setEditEmail}
                            handleSaveInformation={handleSaveInfo}
                            />

                            <AdminAgentProfileInfoWithEditText1
                            editType={'phone'}
                            label={'Phone'}
                            information={agent.phone}
                            informationNew={phone}
                            setInformationNew={setPhone}
                            isEditInformation={isEditPhone}
                            setEditInformation={setEditPhone}
                            handleSaveInformation={handleSaveInfo}
                            />

                        </div>

                        {/* Danger Zone */}
                        <div className="agent-profile-generic-cont2 danger d-flex flex-direction-y gap2">
                            <div className="text-l3 fw-bold mar-bottom-3 d-flex align-items-center gap3"><Icon.ExclamationTriangleFill/>Danger Zone</div>

                            <div className="d-flex flex-direction-y gap3 align-items-start">
                                <button className="primary-btn-red2" onClick={handleDeleteAgent}>Delete Agent</button>
                                <div className="primary-btn-red2">Suspend Agent</div>
                                <div className="primary-btn-red2">Disable Agent Account</div>
                            </div>
                        </div>

                    </div>
                    
                </div>        
            )
            : (<div className="text-l3 center-absolute-xy">Loading...</div>)}
        </div>
    );
}