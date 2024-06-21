import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";

export default function GuestListings() {
    // const {user, token} = useStateContext();

    // if(!token) {
    //     return
    // }

    return (
        <div className="content1">
            <div className="text-l2 fw-bold mar-bottom-1">Properties</div>

            {/* Property Types Category-btns */}
            <div className="d-flex gap3 mar-bottom-1">
                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/house.svg" className='category-icon1' alt=""/>
                    House and Lot
                </div>
                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/building.svg" className='category-icon1' alt=""/>
                    Condos
                </div>
                <div className="category-btn-blue1 color-blue1">
                    <img src="/src/assets/media/icons/land.svg" className='category-icon1' alt=""/>
                    Lot Only
                </div>
            </div>

            {/* Properties Container */}
            <div className="properties-cont">


                {/* Render Property boxes */}
                <div className="property-box">
                    <div className="property-box-pic">

                    </div>

                    <div className="property-box-desc">
                        <div className="text-l3">Property Name</div>
                        <div className="text-m2 d-flex align-items-center gap4">
                            <Icon.GeoAlt/>
                            Address
                        </div>

                        <div className="text-m2 d-flex gap4 align-items-center mar-top-3">
                            <div className="property-box-agent-pfp">

                            </div>
                            Agent Name
                        </div>

                        
                    </div>
                </div>


            </div>
        </div>
    )
};