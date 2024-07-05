import '/src/assets/css/wishlist.css';
import { Link } from "react-router-dom";

export default function ClientWishLists() {

    return (
        <div className="content2">
            <div className="text-l1 fw-bold">Wishlists</div>

            <div className="wishlist-cont">
                <Link to={''} className='text-decoration-none color-black1'>
                    <div className="wishlist-box">
                        <div className="wishlist-box-img-cont">
                            <div className="wishlist-box-img">
                                <img src="/src/assets/media/properties/anyana-paris-test.jpeg" alt="" />
                            </div>
                        </div>
                        
                        
                        <div className="">
                            <div className="text-m2 fw-bold">Recently Viewed</div>
                            <div className="text-m3">Today</div>
                        </div>
                    </div>
                </Link>
                

                
            </div>
        </div>
    )
};