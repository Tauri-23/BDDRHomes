import { Link } from "react-router-dom";
import { useStateContext } from "../../../contexts/ContextProvider";

export default function ClientOngoingTransactions() {
    const {user} = useStateContext();

    return(
        <div className="content2">
            <div className="text-l1 color-black2 fw-bold">Ongoing Transactions</div>

            <div className="hr-line1 mar-y-1"></div>
            
            <div className="d-flex flex-direction-y gap3 align-items-start">
                <div className="text-m1">There are no transactions yet</div>
                <Link to={"/BDDRClient"} className="secondary-btn-black2 text-m2 color-black2">Search Properties</Link>
            </div>
        </div>
    );
}