import Shimmer from "./shimmer"

export const ClientSkeletonWishlistBox = () => { 
    return(
        <div className="wishlist-box">
            <div className="wishlist-box-img-cont skeleton">
            </div>

            <div className="text-skeleton-sm w-50"></div>
            <div className="text-skeleton-sm w-25"></div>

            <Shimmer/>
        </div>
    )
}