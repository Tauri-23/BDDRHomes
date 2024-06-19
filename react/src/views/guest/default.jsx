import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";

export default function GuestDefault() {
    // const {user, token} = useStateContext();

    // if(!token) {
    //     return
    // }

    return (
        <div className="w-100 h-100">
            <div className="navbar1">
                <div className="navbar-1-logo">
                    <div className="d-flex align-items-center gap3">
                        <img src={"/src/assets/media/logos/logo1.png"} className="navbar-1-logo-pic" alt="" />
                        <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
                    </div>
                </div>

                <div className="navbar1-links">
                    <a href="/" className="navbar1-link active"><Icon.House/> Home</a>
                    <a href="/" className="navbar1-link"><Icon.Shop/> Listings</a>
                    <a href="/" className="navbar1-link"><Icon.InfoSquare/> About</a>
                </div>
                    
                <div className="navbar1-links">
                    <a href="/signin" className="navbar1-link"><Icon.BoxArrowInRight/> Sign in</a>
                </div>
            </div>

            {/* Children Contents */}
            <Outlet/>
        </div>
    )
};