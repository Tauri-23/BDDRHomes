import { useEffect } from "react"

export const AgentPropertyBox1 = ({property, handlePropertyClick, selectedProperty}) => {

    return(
        <div className={`property-box-1 ${String(selectedProperty?.id) === String(property.id) ? 'active' : ''}`} onClick={() => handlePropertyClick(property)}>
            <div className="property-box-1-pic">
                <img src={`/src/assets/media/properties/${property.photos[0].filename}`} alt={property.title} />
            </div>
            <div className="property-box-1-desc">
                <div className="property-box-1-name">{property.name}</div>
                <div className="property-box-1-address">{property.address}</div>
            </div>
        </div>
    )
}