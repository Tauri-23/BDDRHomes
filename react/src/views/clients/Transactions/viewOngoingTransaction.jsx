import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchTransactionInfoFullById } from "../../../Services/GeneralTransactionService";
import * as Icon from "react-bootstrap-icons";
import "../../../assets/css/view_transaction.css";
import { formatToPhilPeso } from "../../../assets/js/utils";
import { fetchTransactionReqirements } from "../../../Services/GeneralTransactionRequirementsService";

export default function ClientViewOngoingTransaction() {
    const navigate = useNavigate();
    const {transactionId} = useParams();
    const [transaction, setTransaction] = useState(null);

    useEffect(() => {
        const getFullTransactionInfo = async() => {
            try {
                const data = await fetchTransactionInfoFullById(transactionId);
                setTransaction(data);
            } catch (error) {console.error(error)}
        }

        getFullTransactionInfo();
    }, []);

    /*
    | Debugging
    */
    useEffect(() => {
        console.log(transaction);
    }, [transaction]);

    return(
        <div className="content1 position-relative">
            {transaction
                ? (
                    <>
                        <div className="text-l1 fw-bold color-black2 mar-bottom-l1">Transaction</div>
                
                        <div className="view-transaction-cont1">
                            {/* Left */}
                            <div className="view-transaction-left">

                                {/* Client Box*/}
                                <div className="view-transaction-left-box1">
                                    <div className="d-flex gap3 align-items-center color-black2 mar-bottom-1">
                                        <div className="view-transaction-left-box1-pfp">
                                            {transaction.agent.pfp 
                                            ? <img src={`/src/assets/media/clients/pfp/${transaction.agent.pfp}`}/>
                                            : <>{transaction.agent.firstname[0]}</>}
                                        </div>

                                        <div className="d-flex flex-direction-y">
                                            <div className="text-m1 fw-bold">{transaction.agent.firstname} {transaction.agent.middlename} {transaction.agent.lastname}</div>
                                            <div className="text-m3">@{transaction.agent.username}</div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-direction-y gap2 mar-bottom-1">
                                        <div>
                                            <div className="text-m1 fw-bold">Team</div>
                                            <div className="text-m3">{transaction.agent.team.name}</div>
                                        </div>

                                        <div>
                                            <div className="text-m1 fw-bold">Email</div>
                                            <div className="text-m3">{transaction.agent.email}</div>
                                        </div>
                                    </div>

                                    <div className="d-flex gap3">
                                        <div className="primary-btn-black1">
                                            Message
                                        </div>
                                        <div className="secondary-btn-black1">
                                            View Profile
                                        </div>
                                    </div>
                                </div>

                                {/* Property Box */}
                                <div className="view-transaction-left-box1">
                                    <div className="d-flex gap3 align-items-center mar-bottom-1">
                                        <div className="view-transaction-left-box1-prop-pic">
                                            <img src={`/src/assets/media/properties/${transaction.property.photos[0].filename}`} />
                                        </div>

                                        <div>
                                            <div className="text-m1 fw-bold">{transaction.property.project_name} {transaction.property.project_model}</div>
                                            <div className="text-m2">{transaction.property.city.city} {transaction.property.province.province}</div>
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <Link to={`/BDDRClient/ViewProperty/${transaction.property.id}`} className="primary-btn-black1">View Property</Link>
                                    </div>

                                    
                                </div>

                            </div>
                
                
                            <div className="view-transaction-right">
                                <div className="text-l1">Tasks</div>
                                <div className="hr-line1 mar-y-1"></div>

                                <table className="view-transaction-task-table">
                                    <tbody className="view-transaction-task-table-tbody">
                                        {transaction.tasks.map(task => (
                                            <tr key={task.id} onClick={() => navigate(`/BDDRClient/ViewTask/${task.id}`)}>
                                                <td>
                                                    <div className="requirement-info">
                                                        <div className="d-flex gap3">
                                                            <div className="text-m1">{task.requirement}</div>
                                                            <span className={`requirement-status-card ${task.status}`}>{task.status}</span>
                                                        </div>
                                                        <div className="text-m3">{task.description}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        
                    </>
                )

                : (
                    <div className="text-l3 center-absolute-xy">Loading...</div>
                )
            } 
        </div>
    );
}