export const AgentListingBox1 = ({listing, handleListingClick}) => {
    return(
        <div className="agent-listing-box" onClick={() => handleListingClick(listing)}>
            <div className="agent-listing-pic">
                <img src={`/src/assets/media/properties/${listing.photos[0].filename}`} alt={listing.title} />
            </div>
            <div className="agent-listing-desc">
                <div className="agent-listing-name">{listing.name}</div>
                <div className="agent-listing-address">{listing.address}</div>
            </div>
        </div>
    )
}