import { Outlet, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { PropertyBox1 } from "../../components/property_box1";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { fetchAllProperties } from "../../Services/ClientListingService";
import { ClientSkeletonListingBox } from "../../Skeletons/client-listing-skeletons";
import { fetchAllClientWishlists } from "../../Services/ClientWishlistService";

export default function ClientIndex() {
    const {user} = useOutletContext();
    const [properties, setProperties] = useState([]);
    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        const getListedProperties = async() => {
            try {
                const data = await fetchAllProperties();
                setProperties(data);                
            } catch (error) {
                console.error(error);
            }
        }
        

        const getAllClientWishlists = async() => {
            try {
                const data = await fetchAllClientWishlists(user.id);
                setWishlists(data);
            } catch (error) {
                console.error(error);
            }

        }

        getListedProperties();
        getAllClientWishlists();
    }, []);

    const isInWishlist = (propId) => {
        if(wishlists.data) {
            return wishlists.data.some(wishlists =>
                wishlists.wishlist_properties.some(wishProp => 
                    wishProp.property == propId
                )
            );
        }        
    }
    
    
    // useEffect(() => {
    //     console.log(properties);
    // }, [properties.data]);

    useEffect(() => {
        console.log(wishlists);
    }, [wishlists]);

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
                    {properties.data && wishlists.data
                    ?
                     properties.data.map(prop => (
                        <PropertyBox1
                        key={prop.id}
                        property={prop}
                        clientId={user.id}
                        wishlists={wishlists}
                        isInWishlist={isInWishlist(prop.id)}
                        setWishlists={setWishlists}
                        />
                    ))
                    : Array.from({length:10}, (_, index) => index).map((x) => (
                        <ClientSkeletonListingBox key={x}/>
                    ))}

                    


                </div>
            </div>
        </>
    )
};