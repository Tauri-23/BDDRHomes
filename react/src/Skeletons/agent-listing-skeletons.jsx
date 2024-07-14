import React from "react";
import Shimmer from "./shimmer";

export const SkeletonListingBox = () => {
    return(
        <div className="agent-listing-box position-relative">
            <div className="agent-listing-pic skeleton">
            </div>
            <div className="agent-listing-desc">
                <div className="agent-listing-name skeleton"></div>
                <div className="agent-listing-address skeleton"></div>
            </div>
            <Shimmer/>
        </div>
    )
}