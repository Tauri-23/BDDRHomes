import { useEffect, useState } from "react";
import { fetchPublishedProperties } from "../../../../Services/GeneralPropertiesService";

export default function AgentCreatePropertyListingProperty() {
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
    useEffect(() => {
        console.log(properties);
    }, [properties]);

    return(
        <></>
    );
}