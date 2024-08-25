import { Link, useLocation } from "react-router-dom";
import { isEmptyOrSpaces } from "../../assets/js/utils";

export const AdminSidenavLink1 = ({isSidenavOpen, label, path, activeLoc}) => {
    const location = useLocation();
    const pathname = isEmptyOrSpaces(location.pathname.slice(11)) ? '/home' :location.pathname.slice(11);

    const icons = {
        'Dashboard': `/src/assets/media/icons/dashboard${activeLoc.some(active =>  pathname.includes(active)) ? '-fill-white' : ''}.svg`,
        'Teams': `/src/assets/media/icons/teamwork${activeLoc.some(active =>  pathname.includes(active)) ? '-fill-white' : ''}.svg`,
        'Agents': `/src/assets/media/icons/realtor${activeLoc.some(active =>  pathname.includes(active)) ? '-fill-white' : ''}.svg`,
        'Properties': `/src/assets/media/icons/home${activeLoc.some(active =>  pathname.includes(active)) ? '-fill-white' : ''}.svg`,
        'Deals': `/src/assets/media/icons/exam${activeLoc.some(active =>  pathname.includes(active)) ? '-fill-white' : ''}.svg`,
        'Settings': `/src/assets/media/icons/gear${activeLoc.some(active =>  pathname.includes(active)) ? '-fill-white' : ''}.svg`
    };


    return (
        <Link to={path} className={`sidenav1-link text-decoration-none ${activeLoc.some(active =>  pathname.includes(active)) ? 'active' : ''} ${!isSidenavOpen && 'justify-content-center'}`}>
            <img src={icons[label]} className="icon3" />
            {isSidenavOpen && label}
        </Link>
    );
}