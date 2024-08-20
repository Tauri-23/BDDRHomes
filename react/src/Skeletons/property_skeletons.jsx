import Shimmer from "./shimmer"

export const SkeletonPropertyBox = () => {
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