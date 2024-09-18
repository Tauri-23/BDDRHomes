import { Link } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import { fetchAllPendingClientTransactions } from "../../../Services/GeneralTransactionService";
import * as Icon from "react-bootstrap-icons";
import '../../../assets/css/ongoing_transactions.css';

export default function ClientOngoingTransactions() {
    const {user} = useStateContext();
    const [pendingTransactions, setPendingTransactions] = useState(null);

    useEffect(() => {
        const getAllTransactions = async() => {
            try {
                const data = await fetchAllPendingClientTransactions(user.id);
                setPendingTransactions(data);
            } catch(error) {console.error(error)}
        }

        getAllTransactions();
    }, []);

    /* 
    | Debugging
    */
    useEffect(() => {
        console.log(pendingTransactions);
    }, [pendingTransactions])

    return(
        <div className="content2">
            <div className="text-l1 color-black2 fw-bold">Ongoing Transactions</div>

            <div className="hr-line1 mar-y-1"></div>
            
            <div className="d-flex flex-direction-y gap3 align-items-start">
                {pendingTransactions && pendingTransactions.length < 1 && (
                    <>
                        <div className="text-m1">There are no transactions yet</div>
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

                    {pendingTransactions && pendingTransactions.length > 0 && (
                        <thead className="transactions-table1-thead">
                            <tr>
                                <th>Property</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    )}
                    

                    {!pendingTransactions && (
                        <thead >
                            <tr className="w-100 d-flex justify-content-between">
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
                                            <div className="text-m2">{transaction.property.city} {transaction.property.province}</div>
                                        </div>
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