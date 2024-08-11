import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { isEmptyOrSpaces } from "../../assets/js/utils";

/**
 * Custom NavLink component Only for BDDR Agents.
 * 
 * @param {string} to - The path to navigate to.
 * @param {string} label - The label to display on the link.
 * @param {Array<string>} activeLoc - An array of paths where this link should be active.
 * @returns {JSX.Element} A styled link component with an active state.
 */
export const AdminNavLink1 = ({ to, label, activeLoc }) => {
    const location = useLocation();

    const pathname = isEmptyOrSpaces(location.pathname.slice(11)) ? '/home' :location.pathname.slice(11);

    return (
        <Link to={to} className="text-decoration-none">
            <div className={`nav3-link ${activeLoc.some(active =>  pathname.includes(active)) ? 'active' : ''}`}> 
                {/*  */}
                {/* <IconToRender className="text-l3" />  */}
                {label}
            </div>
        </Link>        
    );
}