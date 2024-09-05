import * as Icon from "react-bootstrap-icons";
import { formatDateTime, formatToPhilPeso } from "../../assets/js/utils";
import { useNavigate } from "react-router-dom";
import { AdminPropertyBox1 } from "./admin_property_box1";
import { useModal } from "../../contexts/ModalContext";

const AdminPropertiesDevelopersBox1 = ({developer}) => {
    const navigate = useNavigate();
    const {showModal} = useModal();

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
                    <img src={`/src/assets/media/developers/${developer.logo}`} className="developer-box2-logo" />
                    {developer.name}
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

            <div className={`developer-box-properties-container ${developer.properties.length > 0 ? '' : 'd-none'}`}>
                {developer.properties.length > 0 && developer.properties.map(property => (
                    <AdminPropertyBox1 key={property.id} property={property} handleListingClick={handleListingClick}/>
                ))}
            </div>

            {/* IF No Properties */}
            <div className={`w-100 text-center ${developer.properties.length > 0 ? 'd-none' : ''} padding2`}>
                No Properties
            </div>
        </div>
    );
}

export default AdminPropertiesDevelopersBox1;