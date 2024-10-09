import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { fetchAllAgentOngoingTransactions } from "../../../Services/GeneralTransactionService";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function AgentOngoingTransaction() {
    const navigate = useNavigate();
    const {user} = useStateContext();
    const [ongoingTransactions, setOngoingTransactions] = useState(null);

    useEffect(() => {
        const getAllOngoingTransactions = async() => {
            try {
                const data = await fetchAllAgentOngoingTransactions(user.id);
                setOngoingTransactions(data);
            } catch(error) {console.error(error);}
        }

        getAllOngoingTransactions();
    }, []);

    const redirectToViewTrasaction = (transactionId) => {
        navigate(`/BDDRAgent/ViewTransaction/${transactionId}`);
    }


    return(
        <div>
            
                
            <div className="d-flex flex-direction-y gap3 align-items-start">
                {ongoingTransactions && ongoingTransactions.length < 1 && (
                    <>
                        <div className="text-m1 mar-top-1">There are no ongoing transactions yet</div>
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
                                <th>Client</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    )}
                    
    
                    {!ongoingTransactions && (
                        <thead>
                            <tr className="w-100 d-flex justify-content-between mar-top-1">
                                <th className="w-25 text-skeleton-m"></th>
                                <th className="w-25 text-skeleton-m"></th>
                                <th className="w-25 text-skeleton-m"></th>
                            </tr>
                        </thead>
                    )}
    
                    <tbody className="transactions-table1-tbody">
                        {ongoingTransactions && ongoingTransactions.length > 0 && ongoingTransactions.map((transaction) => (
                            <tr key={transaction.id} className="transactions-box" onClick={() => redirectToViewTrasaction(transaction.id)}>
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
                                
                                <td>{transaction.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                    
            </div>
        </div>
    );
}