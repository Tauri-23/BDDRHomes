import * as Icon from "react-bootstrap-icons";
import propTypes from 'prop-types';

const PropertySellingFilterModal1 = ({ amenities, onClose }) => {
    return(
        <div className= {`modal1`}>
            <div className="modal-filter-box">
                {/* Head */}
                <div className="property-selling-filter-modal-head">
                    <div className="circle-btn1 text-l1 position-absolute" onClick={onClose}>
                        <Icon.X/>
                    </div>
                    <div className="text-m1 fw-bold m-auto">Filters</div>
                </div>

                {/* Body */}
                <div className="property-selling-filter-modal-body">

                    {/* Price range */}
                    <div className="d-flex flex-direction-y gap2">
                        <div className="text-l3 fw-bold mar-bottom-3">Price range</div>
                    
                    </div>

                    <div className="hr-line1 mar-y-1"></div>

                    {/* Floor Plan */}
                    <div className="d-flex flex-direction-y gap2">
                        <div className="text-l3 fw-bold mar-bottom-3">Floor plan</div>

                        {/* Bedroom */}
                        <div className="d-flex justify-content-between">
                            <div className="text-m2">Bedroom</div>
                            <div className="d-flex w-30 justify-content-between align-items-center">
                                <div className="property-selling-filter-modal-circle-btn1"><Icon.DashLg/></div>
                                any
                                <div className="property-selling-filter-modal-circle-btn1"><Icon.PlusLg/></div>                                    
                            </div>
                        </div>

                        {/* Bathroom */}
                        <div className="d-flex justify-content-between">
                            <div className="text-m2">Bathroom</div>
                            <div className="d-flex w-30 justify-content-between align-items-center">
                                <div className="property-selling-filter-modal-circle-btn1"><Icon.DashLg/></div>
                                any
                                <div className="property-selling-filter-modal-circle-btn1"><Icon.PlusLg/></div>                                    
                            </div>
                        </div>

                        {/* Carport */}
                        <div className="d-flex justify-content-between">
                            <div className="text-m2">Carport</div>
                            <div className="d-flex w-30 justify-content-between align-items-center">
                                <div className="property-selling-filter-modal-circle-btn1"><Icon.DashLg/></div>
                                any
                                <div className="property-selling-filter-modal-circle-btn1"><Icon.PlusLg/></div>                                    
                            </div>
                        </div>                       
                    </div>

                    <div className="hr-line1 mar-y-1"></div>
                    
                    {/* Amenities */}
                    <div className="d-flex flex-direction-y gap2">
                        <div className="text-l3 fw-bold mar-bottom-3">Amenities</div>
                        <div className="d-flex flex-wrap gap3">

                        </div>
                    </div>
                </div>

                {/* Foot */}
                <div className="property-selling-filter-modal-foot">            
                    <button className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </button>

                    <button 
                    onClick={() => {onClose();}}
                    className={`primary-btn-black1 text-center`}
                    >
                        Show 0 properties
                    </button>
                </div>  
            </div>
        </div>
    );
}

PropertySellingFilterModal1.propTypes = {
    onClose: propTypes.func.isRequired,
};

export default PropertySellingFilterModal1;