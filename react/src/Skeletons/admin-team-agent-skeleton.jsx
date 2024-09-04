import Shimmer from "./shimmer"

export const SkeletonAgentBox = () => {
    return(
        <div className={`agent-box grid skeleton`}>
            <Shimmer/>
        </div>
    )
}

export const SkeletonTeamGroupBox = () => {
    return(
        <div className="team-group-skeleton">
            <Shimmer/>
        </div>
    )
}