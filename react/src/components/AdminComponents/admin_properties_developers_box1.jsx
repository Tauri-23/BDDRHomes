import * as Icon from "react-bootstrap-icons";
import { formatDateTime, formatToPhilPeso, notify } from "../../assets/js/utils";
import { useNavigate } from "react-router-dom";
import { AdminPropertyBox1 } from "./admin_property_box1";
import { useModal } from "../../contexts/ModalContext";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";

const AdminPropertiesDevelopersBox1 = ({developer}) => {
    const navigate = useNavigate();
    const {showModal} = useModal();
    const [_developer, _setDeveloper] = useState(developer);

    /* 
    | Debugging
    */
    // useEffect(() => {

    // }, [_developer]);

    const handleRemovePropertyPost = (propId) => {
        const formData = new FormData();
        formData.append('propId', propId);        
        

        axiosClient.post('/general-delete-property-permanently', formData)
        .then(({data}) => {
            if(data.status === 200) {
                _setDeveloper(prevDev => {
                    return {...prevDev, properties: prevDev.properties.filter(prop => prop.id !== propId)};
                });
                notify('default', data.message, 'bottom-left', 3000);
            } else {
                notify('default', data.message, 'bottom-left', 3000);
            }
        }).catch(error => {console.error(error)});
    }

    const handleRemovePropertyConfirmation = (listing) => {
        showModal('AgentDelListingConfirmationModal1', {listing, handleRemovePropertyPost});
    }
    
    const handleListingClick = (property) => {
        showModal('AdminPropertiesOptionModal1', { property, handleRemovePropertyConfirmation});
    };

    return (
        <div className="developer-box-2">
            <div className="developer-box-2-head">
                <div className="d-flex gap3 align-items-center">
                    <div className="developer-box2-logo">
                        <img src={`/src/assets/media/developers/${_developer.logo}`} />
                    </div>
                    
                    {_developer.name}
                </div>
                <div>
                    <Icon.ThreeDots/>
                </div>
            </div>

            {/* <table className={`team-box2-table ${team.agents.length > 0 ? '' : 'd-none'}`}>
                <thead className="team-box2-table-head">
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {team.agents.map(agent => (
                        <tr onClick={() => handleViewAgentProfile(agent.id)} key={agent.id} className="team-box2-member">
                            <td className="d-flex align-items-center gap3">
                                <div className="team-box2-member-pfp">
                                    {agent.pfp 
                                    ? (<img src={`/src/assets/media/properties/${agent.pfp}`} alt="" />)
                                    : (<div className="text-m1 color-white1">{agent.firstname[0]}</div>)}
                                    
                                </div>
                                <div>
                                    {agent.firstname} {agent.lastname}
                                </div>
                            </td>
                            <td>{formatDateTime(agent.created_at)}</td>
                            <td>{formatToPhilPeso(0)}</td>
                        </tr>                                        
                    ))}
                </tbody>
            </table> */}

            <table className={`developer-box-projects-table ${_developer.projects.length > 0 ? '' : 'd-none'}`}>
                <thead className="developer-box-projects-table-thead">
                    <tr>
                        <th>Project</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="developer-box-projects-table-tbody">
                    {_developer.projects.length > 0 && _developer.projects.map(project => (
                        <tr key={project.id} onClick={() => navigate(`ViewProject/${project.id}`)}>
                            <td>{project.project_name}</td>
                            <td>{project.city_denormalized} {project.province_denormalized}</td>
                            <td>View Properties <Icon.ChevronDoubleRight/></td>
                        </tr>
                        
                        // <AdminPropertyBox1 key={property.id} property={property} handleListingClick={handleListingClick}/>
                    ))}
                </tbody>
                
            </table>

            {/* IF No Properties */}
            <div className={`w-100 text-center ${_developer.projects.length > 0 ? 'd-none' : ''} padding2`}>
                No Projects
            </div>
        </div>
    );
}

export default AdminPropertiesDevelopersBox1;