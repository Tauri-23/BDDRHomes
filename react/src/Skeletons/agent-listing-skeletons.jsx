import React from "react";
import Shimmer from "./shimmer";

export const SkeletonListingBox = () => {
    return(
        <div className="agent-listing-box position-relative">
            <div className="agent-listing-pic skeleton position-relative">
                <Shimmer/>
            </div>
            <div className="agent-listing-desc">
                <div className="agent-listing-name skeleton position-relative"><Shimmer/></div>
                <div className="agent-listing-address skeleton position-relative"><Shimmer/></div>
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