import React from "react";
import Shimmer from "./shimmer";

export const SkeletonListingBox = () => {
    return(
        <div className="property-box-1 position-relative">
            <div className="property-box-1-pic skeleton position-relative">
                <Shimmer/>
            </div>
            <div className="property-box-1-desc d-flex flex-direction-y gap4">
                <div className="text-skeleton-sm w-50 position-relative"><Shimmer/></div>
                <div className="text-skeleton-sm w-25 position-relative"><Shimmer/></div>
            </div>
            {/* <Shimmer/> */}
        </div>
    )
}

export const SkeletonListingOptionBox = () => {
    return(
        <div className="create-listing-option-box1 skeleton position-relative">
            <Shimmer/>
        </div>
    )
}