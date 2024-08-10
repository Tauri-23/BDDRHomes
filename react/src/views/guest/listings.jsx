import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from 'react';
import { fetchPropertyTypes } from '../../Services/AgentCreateListingService';
import { fetchAllProperties } from '../../Services/ClientListingService';
import { PropertyBox1 } from '../../components/property_box1';
import { ClientSkeletonListingBox } from '../../Skeletons/client-listing-skeletons';
import { PropertyBox2 } from '../../components/property_box2';

export default function GuestListings() {
    
    const [properties, setProperties] = useState([]);
    const [propTypes, setPropTypes] = useState([]);



    useEffect(() => {
        const getAllPropTypes = async() => {
            try {
                const data = await fetchPropertyTypes();
                setPropTypes(data);
            } catch(error) {console.error(error)}
        }
        const getListedProperties = async() => {
            try {
                const data = await fetchAllProperties();
                setProperties(data);
            } catch(error) {console.error(error)}
        }

        getAllPropTypes();
        getListedProperties();
    }, []);

    return (
        <>
            <div className="listing-category-nav">
                {/* Categories */}
                <div className="listing-category-cont">
                    {propTypes.length > 0 && (
                        <div className="category-btn-blue1 active">
                            <Icon.Grid className='text-l2'/>
                            <div className="category-btn-text">All</div>
                        </div>
                    )}
                    {propTypes.length > 0 && propTypes.map(propType => (
                        <div key={propType.id} className="category-btn-blue1">
                            <img src={`/src/assets/media/icons/${propType.icon}`} className='category-icon1' alt=""/>
                            
                            <div className="category-btn-text">{propType.type_name}</div>
                        </div>
                    ))}
                </div>
                <div className="secondary-btn-black2 gap3 d-flex align-items-center"><Icon.Sliders/>Filter</div>
            </div>

            <div className="content1">
                {/* Properties Container */}
                <div className="properties-cont">

                    {properties.data 
                    ?
                    properties.data.map(prop => (
                        <PropertyBox2
                            key={prop.id}
                            property={prop}
                        />
                    ))
                    : Array.from({length:10}, (_, index) => index).map(x => (
                        <ClientSkeletonListingBox key={x}/>
                    ))}


                </div>
            </div>
        </>
        
    )
};