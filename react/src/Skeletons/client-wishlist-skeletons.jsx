import Shimmer from "./shimmer"

export const ClientSkeletonWishlistBox = () => { 
    return(
        <div className="wishlist-box">
            <div className="wishlist-box-img-cont skeleton position-relative">
                <Shimmer/>
            </div>

            <div className="text-skeleton-sm w-50 position-relative">
                <Shimmer/>
            </div>
            <div className="text-skeleton-sm w-25 position-relative">
                <Shimmer/>
            </div>

            {/* <Shimmer/> */}
        </div>
    )
}