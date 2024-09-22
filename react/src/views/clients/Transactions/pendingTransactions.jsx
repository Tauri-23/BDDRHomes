import { Link } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import { fetchAllClientTransactionsWhere } from "../../../Services/GeneralTransactionService";
import * as Icon from "react-bootstrap-icons";
import '../../../assets/css/ongoing_transactions.css';
import Shimmer from "../../../Skeletons/shimmer";

export default function ClientPendingTransactions() {
    const {user} = useStateContext();
    const [pendingTransactions, setPendingTransactions] = useState(null);

    useEffect(() => {
        const getAllTransactions = async() => {
            try {
                const data = await fetchAllClientTransactionsWhere(user.id, "pending");
                setPendingTransactions(data);
            } catch(error) {console.error(error)}
        }

        getAllTransactions();
    }, []);

    /* 
    | Debugging
    */
    // useEffect(() => {
    //     console.log(pendingTransactions);
    // }, [pendingTransactions])

    return(
        <>            
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                    )}
                    

                    {!pendingTransactions && (
                        <thead >
                            <tr className="w-100 d-flex justify-content-between mar-top-1">
                                <th className="w-25 text-skeleton-m position-relative"><Shimmer/></th>
                                <th className="w-25 text-skeleton-m position-relative"><Shimmer/></th>
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