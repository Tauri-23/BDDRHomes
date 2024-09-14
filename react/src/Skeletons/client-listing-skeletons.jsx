import Shimmer from "./shimmer"

export const ClientSkeletonListingBox = () => { 
    return(
        <div className="property-box-4 position-relative">
            <div className="property-box-pic skeleton position-relative">
                <Shimmer/>
            </div>
            <div className="property-box-desc">
                <div className="text-skeleton-l mar-bottom-4 w-50 position-relative"><Shimmer/></div>
                <div className="text-skeleton-sm mar-bottom-4 w-100 position-relative"><Shimmer/></div>
                <div className="text-skeleton-sm mar-bottom-4 w-50 position-relative"><Shimmer/></div>
                <div className="text-skeleton-sm w-25 position-relative"><Shimmer/></div>
            </div>
            {/* <Shimmer/> */}
        </div>
    )
}

export const PropertyListedCategorySkeleton = () => {
    return(
        <div className="listing-category-box">
            <div className="position-relative" style={{height: "35px", width: "35px", borderRadius: "100%", overflow: "hidden"}}>
                <Shimmer/>
            </div>
            <div className="text-skeleton-xsm w-100 position-relative"><Shimmer/></div>
        </div>
    );
}

export const PropertyListedFilterBtnSkeleton = () => {
    return(
        <div className="bg-grey2 position-relative" style={{borderRadius: "10px", width: "130px", height:"50px", overflow: "hidden"}}>
            <Shimmer/>
        </div>
    );
}

export const PropertyListedViewAsBtnSkeleton = () => {
    return(
        <div className="bg-grey2 position-relative" style={{borderRadius: "10px", width: "230px", height:"50px", overflow: "hidden"}}>
            <Shimmer/>
        </div>
    );
}