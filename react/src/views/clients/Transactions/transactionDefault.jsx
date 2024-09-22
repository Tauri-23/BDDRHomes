import { Link, Outlet, useLocation } from "react-router-dom";

export default function ClientTransactionDefault() {
    const location = useLocation();
    return(
        <div className="content2">
            <div className="text-l1 color-black2 fw-bold">Transactions</div>
    
            <div className="hr-line1 mar-y-1"></div>

            <div className="d-flex align-items-center gap3">
                <Link to={"/BDDRClient/Transactions"} className={`${location.pathname === "/BDDRClient/Transactions" || location.pathname === "/BDDRClient/Transactions/"  ? 'primary' :'secondary'}-btn-black1`}>
                    Pending
                </Link>
                <Link to={"/BDDRClient/Transactions/Ongoing"} className={`${location.pathname === "/BDDRClient/Transactions/Ongoing" ? 'primary' :'secondary'}-btn-black1`}>
                    Ongoing
                </Link>
                <Link to={"/BDDRClient/Transactions"} className="secondary-btn-black1">
                    History
                </Link>
            </div>

            <Outlet/>
        </div>
        
    );
}