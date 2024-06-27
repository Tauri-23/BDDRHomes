import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="d-flex justify-content-center w-100 align-items-center" style={{height: "100vh"}}>
            <div className="d-flex flex-direction-y gap1 align-items-center">
                <img style={{width:"500px"}} src="/src/assets/media/illustrations/under-construction.svg" alt="" srcset="" />
                <div className="text-l1">404 - Page Not Found</div>
                <Link to={'/'} className="color-black2">Back to Home</Link>
            </div>
        </div>
    )
};