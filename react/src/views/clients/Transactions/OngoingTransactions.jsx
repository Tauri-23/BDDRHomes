import { useEffect, useState } from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { fetchAllClientTransactionsWhere } from "../../../Services/GeneralTransactionService";
import { Link, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import Shimmer from "../../../Skeletons/shimmer";
import { useModal } from "../../../contexts/ModalContext";
import axiosClient from "../../../axios-client";
import { notify } from "../../../assets/js/utils";

export default function ClientOngoingTransactions() {
    const navigate = useNavigate();
    const {showModal} = useModal();
    const {user} = useStateContext();
    const [ongoingTransactions, setOngoingTransactions] = useState(null);

    useEffect(() => {
        const getAllTransactions = async() => {
            try {
                const data = await fetchAllClientTransactionsWhere(user.id, 'ongoing');
                setOngoingTransactions(data);
            } catch(error) {console.error(error)}
        }

        getAllTransactions();
    }, []);

    /* 
    | Debugging
    */
    // useEffect(() => {
    //     console.log(ongoingTransactions);
    // }, [ongoingTransactions])  


    const handleTransactionClick = (event, transaction) => {
        if(event.target.className === 'primary-btn-black1') {
            cancelTransaction(transaction);
            return;
        }

        navigate(`/BDDRClient/ViewTransaction/${transaction.id}`)
    }


    const handleCancelTransactionPost = (transactionId) => {
        const formData = new FormData();
        formData.append('transactionId', transactionId);
        formData.append('newStatus', 'cancelled');

        axiosClient.post('/update-transaction-from-client-post', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('default', data.message, 'bottom-left', 3000);
                setOngoingTransactions(prev => prev.filter(transaction => transaction.id !== transactionId));
            } else {
                notify('default', data.message, 'bottom-left', 3000);
            }
        });
    }

    const cancelTransaction = (transaction) => {
        showModal('ClientCancelTransactionConfirmationModal1', {transaction, handleCancelTransactionPost})
    }


    return(
        <>            
            <div className="d-flex flex-direction-y gap3 align-items-start">
                {ongoingTransactions && ongoingTransactions.length < 1 && (
                    <>
                        <div className="text-m1 mar-top-1">There are no transactions yet</div>
                        <Link to={"/BDDRClient"} className="secondary-btn-black2 text-m2 color-black2">Search Properties</Link>
                    </>
                )}

                <table className={`transactions-table1`}>
                    
                    {/* <thead className="transactions-table1-thead">
                        <tr>
                            <th>Property</th>
                            <th>Status</th>
                        </tr>
                    </thead> */}

                    {ongoingTransactions && ongoingTransactions.length > 0 && (
                        <thead className="transactions-table1-thead">
                            <tr>
                                <th>Property</th>
                                <th>Agent</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    )}
                    

                    {!ongoingTransactions && (
                        <thead >
                            <tr className="w-100 d-flex justify-content-between mar-top-1">
                                <th className="w-25 text-skeleton-m position-relative"><Shimmer/></th>
                                <th className="w-25 text-skeleton-m position-relative"><Shimmer/></th>
                                <th className="w-25 text-skeleton-m position-relative"><Shimmer/></th>
                            </tr>
                        </thead>
                    )}

                    <tbody className="transactions-table1-tbody">
                        {ongoingTransactions && ongoingTransactions.length > 0 && ongoingTransactions.map((transaction) => (
                            <tr key={transaction.id} className="transactions-box" 
                            onClick={(e) => handleTransactionClick(e, transaction)}
                            >
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
                                            {transaction.agent.pfp
                                            ? (<img src={`/src/assets/media/clients/pfp/${transaction.agent.pfp}`}/>)
                                            : (<div>{transaction.agent.firstname[0]}</div>)}
                                        </div>
                                        <div className="text-m2">{transaction.agent.firstname} {transaction.agent.lastname}</div>
                                    </div>                                
                                </td>
                                
                                <td>
                                    <div className="d-flex">
                                        <div className="primary-btn-black1">Cancel</div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </>
    );
}