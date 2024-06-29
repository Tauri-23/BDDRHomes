import { Link } from "react-router-dom";

export const SideNavLink1 = ({ to, label, onClick }) => {
    return (
        <Link to={to} className="text-decoration-none" onClick={onClick}>
            <div className={`nav-modal1-link`}>
                {/* <IconToRender className="text-l3" />  */}
                {label}
            </div>
        </Link>        
    );
}