import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { PropertyBox1 } from "../../components/property_box1";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { fetchAllProperties } from "../../Services/ClientListingService";

export default function ClientIndex() {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getListedProperties = async() => {
            try {
                const data = await fetchAllProperties();
                setProperties(data);                
            } catch (error) {
                console.error(error);
            }
        }

        getListedProperties();
    }, []);
    
    useEffect(() => {
        console.log(properties);
    }, [properties.data]);

    return (
        <>
            {/* Property Types Category-btns */}
            <div className="listing-category-nav">
                <div className="listing-category-cont">
                    <div className="category-btn-blue1 active">
                        <img src="/src/assets/media/icons/building.svg" className='category-icon1' alt=""/>
                        Condos
                    </div>
                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/land.svg" className='category-icon1' alt=""/>
                        Lot Only
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/rowhouse.svg" className='category-icon1' alt=""/>
                        Row House
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>

                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>
                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>
                    <div className="category-btn-blue1">
                        <img src="/src/assets/media/icons/bungalow.svg" className='category-icon1' alt=""/>
                        Bungalow
                    </div>
                </div>
                <div className="secondary-btn-black2 gap3 d-flex align-items-center"><Icon.Sliders/>Filter</div>
            </div>

            <div className="content1">
                {/* Properties Container */}
                <div className="properties-cont">


                    {/* Render Property boxes */}
                    {properties.data 
                    ?
                     properties.data.map(prop => (
                        <PropertyBox1
                        key={prop.id}
                        property={prop}
                        />
                    ))
                    : (
                        <div>Loading</div>
                    )}

                    


                </div>
            </div>
        </>
    )
};