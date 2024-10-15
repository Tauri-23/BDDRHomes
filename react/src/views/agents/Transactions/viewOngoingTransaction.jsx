import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchTransactionInfoFullById } from "../../../Services/GeneralTransactionService";
import * as Icon from "react-bootstrap-icons";
import "../../../assets/css/view_transaction.css";
import { formatToPhilPeso, notify } from "../../../assets/js/utils";
import { useModal } from "../../../contexts/ModalContext";
import axiosClient from "../../../axios-client";

export default function AgentViewOngoingTransaction() {
    const {transactionId} = useParams();
    const {showModal} = useModal();
    const navigate = useNavigate();
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





    /**
     * Handlers
     */
    const handleMarkAsDonePost = (taskId) => {
        const formData = new FormData();
        formData.append('taskId', taskId);
        formData.append('newStatus', 'done');
    
        axiosClient.post('/update-transaction-task-status', formData)
            .then(({data}) => {
                if (data.status === 200) {
                    setTransaction(prev => ({
                        ...prev,
                        tasks: prev.tasks.map(task =>
                            task.id === taskId ? { ...task, status: 'done' } : task
                        )
                    }));
                }
                notify('default', data.message, 'bottom-left', 3000);
            })
            .catch(error => console.error(error));
    }

    const handleMarkAsDone = (req, taskId) => {
        showModal('GeneralConfirmationModal1', {
            title: "Mark as done Task",
            note: `Mark as done this task ${req}`,
            positiveBtnText: 'Mark as done',
            handlePositiveBtnClick: () => handleMarkAsDonePost(taskId)
        });
    }


    const handleAddTaskPost = (req, note) => {
        const formData = new FormData();
        formData.append('transaction', transaction.id);
        formData.append('req', req);
        formData.append('note', note);

        axiosClient.post('/create-transaction-task-from-agent-post', formData)
        .then(({data}) => {
            if (data.status === 200) {
                console.log(data.task);
                setTransaction(prev => ({
                    ...prev,
                    tasks: [...prev.tasks, data.task]  // Append the new task to the existing tasks
                }));
            }
            notify('default', data.message, 'bottom-left', 3000);
        }).catch(error => console.error(error));
    }
    const handleAddTask = () => {
        showModal('AgentAddTransactionTaskModal1', {handleAddTaskPost});
    }

    
    


    return(
        <div className="content1">
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
                                            {transaction.client.pfp 
                                            ? <img src={`/src/assets/media/clients/pfp/${transaction.client.pfp}`}/>
                                            : <>{transaction.client.firstname[0]}</>}
                                        </div>

                                        <div className="d-flex flex-direction-y">
                                            <div className="text-m1 fw-bold">{transaction.client.firstname} {transaction.client.middlename} {transaction.client.lastname}</div>
                                            <div className="text-m3">@{transaction.client.username}</div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-direction-y gap2 mar-bottom-1">
                                        <div>
                                            <div className="text-m1 fw-bold">Work</div>
                                            <div className="text-m3">{transaction.client.work}</div>
                                        </div>

                                        <div>
                                            <div className="text-m1 fw-bold">Monthly Income</div>
                                            <div className="text-m3">{formatToPhilPeso(transaction.client.monthly_income)}</div>
                                        </div>

                                        <div>
                                            <div className="text-m1 fw-bold">Employment Type</div>
                                            <div className="text-m3">{transaction.client.employment_type.type}</div>
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
                                        <div className="primary-btn-black1">View Property</div>
                                    </div>

                                    
                                </div>

                            </div>
                
                
                            {/* Tasks */}
                            <div className="view-transaction-right">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-l1">Tasks</div>
                                    <div 
                                    className="primary-btn-black1 d-flex gap3 align-items-center"
                                    onClick={handleAddTask}
                                    >
                                        <Icon.PlusLg className="text-l3 fw-bold"/> Add Task
                                    </div>
                                </div>
                                <div className="hr-line1 mar-y-1"></div>



                                {/* Tasks Table */}
                                <table className="view-transaction-task-table">
                                    <thead className="view-transaction-task-table-thead">
                                        <tr>
                                            <th>Requirements</th>
                                        </tr>
                                    </thead>
                                    

                                    <tbody className="view-transaction-task-table-tbody">
                                        {transaction.tasks.map(task => (
                                            <tr key={task.id} onClick={() => navigate(`/BDDRAgent/ViewTask/${task.id}`)}>
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