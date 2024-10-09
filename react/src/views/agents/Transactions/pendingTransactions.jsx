import { useEffect, useState } from "react";
import { fetchAllPendingTransactions } from "../../../Services/GeneralTransactionService";
import * as Icon from "react-bootstrap-icons";
import { useModal } from "../../../contexts/ModalContext";
import { useStateContext } from "../../../contexts/ContextProvider";
import axiosClient from "../../../axios-client";
import { notify } from "../../../assets/js/utils";

export default function AgentPendingTransactions() {
    const {user} = useStateContext();
    const {showModal} = useModal();
    const [pendingTransactions, setPendingTransactions] = useState(null);

    useEffect(() => {
        const getAllPendingTransactions = async() => {
            try {
                const data = await fetchAllPendingTransactions();
                setPendingTransactions(data);
            } catch(error) {console.error(error);}
        }

        getAllPendingTransactions();
    }, []);

    const handleGetTransactionPost = (transactionId) => {
        const formData = new FormData();
        formData.append("transactionId", transactionId);
        formData.append("agentId", user.id);

        axiosClient.post('/update-transaction-from-agent-post', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setPendingTransactions(prev =>
                    prev.filter(transaction => transaction.id !== transactionId)
                );
                notify("default", data.message, "bottom-left", 3000);
            } else {
                notify("error", data.message, "bottom-left", 3000);
            }
        })
        .catch(error=>console.error(error));
    }
    
    const handleGetTransaction = (transaction) => {
        showModal('AgentGetTransactionConfirmationModal1', {transaction, handleGetTransactionPost})
    }

    return(
        <div>
            
                
            <div className="d-flex flex-direction-y gap3 align-items-start">
                {pendingTransactions && pendingTransactions.length < 1 && (
                    <>
                        <div className="text-m1 mar-top-1">There are no transactions yet</div>
                    </>
                )}
    
                <table className={`transactions-table1`}>
                        
                        {/* <thead className="transactions-table1-thead">
                            <tr>
                                <th>Property</th>
                                <th>Status</th>
                            </tr>
                        </thead> */}
    
                    {pendingTransactions && pendingTransactions.length > 0 && (
                        <thead className="transactions-table1-thead">
                            <tr>
                                <th>Property</th>
                                <th>Client</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    )}
                    
    
                    {!pendingTransactions && (
                        <thead>
                            <tr className="w-100 d-flex justify-content-between mar-top-1">
                                <th className="w-25 text-skeleton-m"></th>
                                <th className="w-25 text-skeleton-m"></th>
                                <th className="w-25 text-skeleton-m"></th>
                            </tr>
                        </thead>
                    )}
    
                    <tbody className="transactions-table1-tbody">
                        {pendingTransactions && pendingTransactions.length > 0 && pendingTransactions.map((transaction) => (
                            <tr key={transaction.id} className="transactions-box">
                                <td className="d-flex gap3">
                                    <div className="transactions-box-prop-pic">
                                        <img src={`/src/assets/media/properties/${transaction.property.photos[0].filename}`}/>
                                    </div>
                                    <div className="d-flex flex-direction-y gap4">
                                        <div className="text-l3">{transaction.property.project_name} {transaction.property.project_model}</div>
                                        <div className="d-flex gap4 align-items-center">
                                            <Icon.GeoAlt/>
                                            <div className="text-m2">{transaction.property.city.city} {transaction.property.province.province}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="d-flex gap3 align-items-center">
                                        <div className="transactions-box-client-pfp">
                                            {transaction.client.pfp
                                            ? (<img src={`/src/assets/media/clients/pfp/${transaction.client.pfp}`}/>)
                                            : (<div>{transaction.client.firstname[0]}</div>)}
                                        </div>
                                        <div className="text-m2">{transaction.client.firstname}</div>
                                    </div>                                
                                </td>
                                
                                <td className="d-flex justify-content-start"><div className="primary-btn-black1" onClick={() => handleGetTransaction(transaction.id)}>Get</div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    
            </div>
        </div>
    );
}