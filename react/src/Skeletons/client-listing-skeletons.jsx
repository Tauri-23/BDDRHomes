import Shimmer from "./shimmer"

export const ClientSkeletonListingBox = () => { 
    return(
        <div className="property-box position-relative">
            <div className="property-box-pic skeleton">
            </div>
            <div className="property-box-desc">
                <div className="text-skeleton-l mar-bottom-4 w-50"></div>
                <div className="text-skeleton-sm mar-bottom-4 w-100"></div>
                <div className="text-skeleton-sm mar-bottom-4 w-50"></div>
                <div className="text-skeleton-sm w-25"></div>
            </div>
            <Shimmer/>
        </div>
    )
}