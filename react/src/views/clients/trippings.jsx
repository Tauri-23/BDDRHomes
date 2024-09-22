import { Link } from 'react-router-dom';
import '/src/assets/css/wishlist.css';

export default function ClientTrippings() {

    return (
        <div className="content2">
            <div className="text-l1 fw-bold color-black2">Trippings</div>
            
            <div className="hr-line1 mar-y-1"></div>
            
            <div className="d-flex flex-direction-y gap3 align-items-start">
                <div className="text-m1">There are no trippings yet</div>
                <Link to={"/BDDRClient"} className="secondary-btn-black2 text-m2 color-black2">Search Properties</Link>
            </div>
            
        </div>
    )
};