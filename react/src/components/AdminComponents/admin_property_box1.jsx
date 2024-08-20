export const AdminPropertyBox1 = ({property, handleListingClick}) => {
    return(
        <div className="agent-listing-box" onClick={() => handleListingClick(property)}>
            <div className="agent-listing-pic">
                <img src={`/src/assets/media/properties/${property.photos[0].filename}`} alt={property.title} />
            </div>
            <div className="agent-listing-desc">
                <div className="agent-listing-name">{property.name}</div>
                <div className="agent-listing-address">{property.address}</div>
            </div>
        </div>
    )
}