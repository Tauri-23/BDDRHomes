import { Link } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import { fetchAllPendingClientTransactions } from "../../../Services/GeneralTransactionService";

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

                {pendingTransactions && pendingTransactions.length > 0 && pendingTransactions.map((transaction) => (
                    <div>{transaction.id}</div>
                ))}
                
            </div>
        </div>
    );
}