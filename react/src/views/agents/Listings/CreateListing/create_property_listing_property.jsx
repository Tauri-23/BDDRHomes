import { useEffect, useState } from "react";
import { fetchPublishedProperties } from "../../../../Services/GeneralPropertiesService";
import { useOutletContext } from "react-router-dom";
import { AgentPropertyBox1 } from "../../../../components/AgentComponents/agent_property_box1";
import { SkeletonPropertyBox } from "../../../../Skeletons/property_skeletons";

export default function AgentCreatePropertyListingProperty() {
    const {selectedProperty, setSelectedProperty} = useOutletContext();
    
    const [properties, setProperties] = useState(null);

    useEffect(() => {
        const getPublishedProperties = async() => {
            try {
                const data = await fetchPublishedProperties();
                setProperties(data);
            } catch(error) {
                console.error(error)
            }
        }
        getPublishedProperties();
    }, []);


    // For debugging purposes
    // useEffect(() => {
    //     console.log(properties);
    // }, [properties]);


    
    const handlePropertyClick = (property) => {
        setSelectedProperty(property);
    }

    return(
        <div className="d-flex justify-content-center transition-fade-in">
            <div className="properties-outer-cont">
                <div className="text-xl2 fw-bold">Select Property</div>

                <div className="properties-container">
                    {properties && properties.length > 0
                    ? 
                    (properties.map(property=> (
                        <AgentPropertyBox1 
                        key={property.id} 
                        property={property}
                        selectedProperty={selectedProperty}
                        handlePropertyClick={handlePropertyClick}
                        />
                    )))
                    : 
                    (
                        Array.from({length: 10}, (index, _) => index).map(x => (
                            <SkeletonPropertyBox key={x}/>
                        ))
                    )}

                </div>

            </div>
        </div>
    );
}