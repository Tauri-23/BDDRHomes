import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export const AdminSettingsPropAttr = ({to, label}) => {
    return(
        <Link to={to} className="color-black2 text-decoration-none d-flex align-items-center justify-content-between cursor-pointer">
            <div className="text-m1">{label}</div>
            <div className="circular-btn-1"><Icon.ChevronRight className="text-m1"/></div>
        </Link>
    );
}