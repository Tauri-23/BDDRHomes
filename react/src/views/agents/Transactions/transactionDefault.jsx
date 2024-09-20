import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AgentTransactionDefault() {
    const location = useLocation();

    /* 
    | Debugging
    */
    // useEffect(() => {
    //     alert(location.pathname);
    // }, []);

    return(
        <div className="content2">
            <div className="text-l1 color-black2 fw-bold">Transactions</div>
    
            <div className="hr-line1 mar-y-1"></div>

            <div className="d-flex align-items-center gap3">
                <Link to={"/BDDRAgent/Transactions"} className={`${location.pathname === "/BDDRAgent/Transactions" || location.pathname === "/BDDRAgent/Transactions/"  ? 'primary' :'secondary'}-btn-black1`}>
                    Pending
                </Link>
                <Link to={"/BDDRAgent/Transactions/Ongoing"} className={`${location.pathname === "/BDDRAgent/Transactions/Ongoing" ? 'primary' :'secondary'}-btn-black1`}>
                    Ongoing
                </Link>
                <Link to={"/BDDRAgent/Transactions"} className="secondary-btn-black1">
                    History
                </Link>
            </div>

            <Outlet/>
        </div>
    );
}