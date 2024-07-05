import { Link, useLocation } from "react-router-dom";

export const NavLink2 = ({ to, label, activeLoc }) => {
    const location = useLocation();

    return (
        <Link to={to} className="text-decoration-none">
            <div className={`nav3-link ${location.pathname === activeLoc ? 'active' : ''}`}>
                {/* <IconToRender className="text-l3" />  */}
                {label}
            </div>
        </Link>        
    );
}