import Shimmer from "./shimmer"

export const SkeletonAgentBox = () => {
    return(
        <div className={`agent-box grid skeleton`}>
            <Shimmer/>
        </div>
    )
}