import { Link } from "react-router-dom";

export const SideNavLink1 = ({ to, icon: IconComponent, activeIcon: ActiveIconComponent, label, currentPath }) => {
    const isActive = currentPath === to;
    const IconToRender = isActive && ActiveIconComponent ? ActiveIconComponent : IconComponent;
    return (
        <Link to={to} className="text-decoration-none">
            <div className={`side-nav1-link ${isActive ? 'active' : ''}`}>
                <IconToRender className="text-l3" /> {label}
            </div>
        </Link>        
    );
}