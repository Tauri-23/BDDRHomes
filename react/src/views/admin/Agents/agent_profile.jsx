import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAgentInfos } from "../../../Services/AdminAgentService";
import { fetchAgentPublishedProperties } from "../../../Services/AgentListingService";
import { PropertyBox3 } from "../../../components/property_box3";
import * as Icon from 'react-bootstrap-icons';

export default function AdminAgentProfile() {
    const {agentId} = useParams();
    const [agent, setAgent] = useState(null);
    const [properties, setProperties] = useState(null);



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



    useEffect(() => {
        console.log(properties);
    }, [properties])



    return(
        <div className="content4">
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
                            <div className="d-flex flex-direction-y gap3">
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
                                    <div className="text-m2">{agent.bdate}</div>
                                </div>
                                <div className="d-flex align-items-center gap3">
                                    <Icon.Calendar3 className="text-m1"/>
                                    <div className="text-m2">{agent.created_at}</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="agent-profile-right-cont">

                        {/* Personal Info */}
                        <div className="agent-profile-generic-cont2 d-flex flex-direction-y gap2">
                            <div className="text-l3 fw-bold mar-bottom-3">Personal Information</div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="text-m3">First name</div>
                                    <div className="text-m1">{agent.firstname}</div>
                                </div>
                                <Icon.Pencil className="text-l3"/>
                            </div>
                            

                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="text-m3">Middle name</div>
                                    <div className="text-m1">{agent.middlename}</div>
                                </div>
                                <Icon.Pencil className="text-l3"/>
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="text-m3">Last name</div>
                                    <div className="text-m1">{agent.lastname}</div>
                                </div> 
                                <Icon.Pencil className="text-l3"/>
                            </div>
                                                       
                        </div>

                        {/* Contact Info */}
                        <div className="agent-profile-generic-cont2 d-flex flex-direction-y gap2">
                            <div className="text-l3 fw-bold mar-bottom-3">Contact Information</div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="text-m3">Email</div>
                                    <div className="text-m1">{agent.email}</div>
                                </div>
                                <Icon.Pencil className="text-l3"/>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="text-m3">Phone</div>
                                    <div className="text-m1">+63 {agent.phone}</div>
                                </div> 
                                <Icon.Pencil className="text-l3"/>
                            </div>

                        </div>

                        {/* Danger Zone */}
                        <div className="agent-profile-generic-cont2 danger d-flex flex-direction-y gap2">
                            <div className="text-l3 fw-bold mar-bottom-3 d-flex align-items-center gap3"><Icon.ExclamationTriangleFill/>Danger Zone</div>

                            <div className="d-flex flex-direction-y gap3 align-items-start">
                                <div className="primary-btn-red2">Delete Agent</div>
                                <div className="primary-btn-red2">Suspend Agent</div>
                                <div className="primary-btn-red2">Disable Agent Account</div>
                            </div>
                        </div>

                        {/* Listed Properties */}
                        {/* {properties?.length > 0 && (
                            <div className="d-flex flex-direction-y gap1 w-100">
                                <div className="text-l2">{agent.firstname}'s listed properties</div>
                                <div className="agent-profile-listed-property-cont">
                                    {properties.map(prop => (
                                        <PropertyBox3 key={prop.id} property={prop}/>
                                    ))}
                                </div>
                            </div>
                        )} */}

                    </div>
                    
                </div>        
            )
            : (<div className="text-l3 center-absolute-xy">Loading...</div>)}
        </div>
    );
}