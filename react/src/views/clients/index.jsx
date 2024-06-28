import { Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { PropertyBox1 } from "../../components/property-box1";

export default function ClientIndex() {

    return (
        <div>
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
                    <PropertyBox1/>
                    <PropertyBox1/>
                    <PropertyBox1/>
                    <PropertyBox1/>
                    <PropertyBox1/>
                    <PropertyBox1/>


                </div>
            </div>
        </div>
    )
};