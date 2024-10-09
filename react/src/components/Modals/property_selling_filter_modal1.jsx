import * as Icon from "react-bootstrap-icons";
import propTypes from 'prop-types';
import { useEffect, useState } from "react";

const PropertySellingFilterModal1 = ({ 
    amenities, 
    selectedAmenities, setSelectedAmenities, 
    bedroomNumbers, setBedroomNumbers,
    bathroomNumbers, setBathroomNumbers,
    carportNumbers, setCarportNumbers, 
    isFiltering,
    selectedPropType,
    handleFilterProp, 
    properties,
    onClose 
}) => {

    const [_selectedAmenities, _setSelectedAmenities] = useState(selectedAmenities);
    const [_bedroomNumbers, _setBedroomNumbers] = useState(bedroomNumbers);
    const [_bathroomNumbers, _setBathroomNumbers] = useState(bathroomNumbers);
    const [_carportNumbers, _setCarportNumbers] = useState(carportNumbers);
    const [_filteredProps, _setFilteredProps] = useState(properties);
    const [_isFiltering, _setFiltering] = useState(isFiltering);




    const handleSelectUnselectAmenity = (amenityId) => {
        _setSelectedAmenities(prevSelectedAmenity => 
            prevSelectedAmenity.includes(amenityId)
                ? prevSelectedAmenity.filter(amty => amty !== amenityId)
                : [...prevSelectedAmenity, amenityId]
        );

        setSelectedAmenities(prevSelectedAmenity => 
            prevSelectedAmenity.includes(amenityId)
                ? prevSelectedAmenity.filter(amty => amty !== amenityId)
                : [...prevSelectedAmenity, amenityId]
        );
    } 



    /**
     * Handle Filter adjustments
     */
    useEffect(() => {

        if(_bedroomNumbers == 0 && _bathroomNumbers == 0 && _carportNumbers == 0 && _selectedAmenities == 0 && _selectedAmenities.length == 0) {
            _setFiltering(false);
        }
        else {
            _setFiltering(true);
        }
        _setFilteredProps(
            properties.filter(prop => {
                // Check bedrooms
                const matchesBedrooms = _bedroomNumbers > 0 ? prop.bedroom >= _bedroomNumbers : true;
                // Check bathrooms
                const matchesBathrooms = _bathroomNumbers > 0 ? prop.bath >= _bathroomNumbers : true;
                // Check carports
                const matchesCarports = _carportNumbers > 0 ? prop.carport >= _carportNumbers : true;
                // Check amenities
                const matchesAmenities = _selectedAmenities.length > 0
                ? _selectedAmenities.every(selectedId =>
                    prop.amenities.some(am => am.amenity.id === selectedId)
                )
                : true;

                const matchesPropTypes = selectedPropType !== "" ? prop.property_type.id == selectedPropType : true;
    
                // Return true if all conditions are satisfied
                return matchesPropTypes && matchesBedrooms && matchesBathrooms && matchesCarports && matchesAmenities;
            })
        );
    }, [_bedroomNumbers, _bathroomNumbers, _carportNumbers, _selectedAmenities, properties]);



    const handleClearFilter = () => {
        _setSelectedAmenities([]);
        _setBedroomNumbers(0);
        _setBathroomNumbers(0);
        _setCarportNumbers(0);
        _setFilteredProps(properties);

        setSelectedAmenities([]);
        setBedroomNumbers(0);
        setBathroomNumbers(0);
        setCarportNumbers(0);
        _setFiltering(false);
    }



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
                                <button 
                                className={`property-selling-filter-modal-circle-btn1 ${_bedroomNumbers < 1 ? "disabled" : ""}`}
                                onClick={() => {setBedroomNumbers(_bedroomNumbers - 1); _setBedroomNumbers(_bedroomNumbers - 1)}}
                                disabled={_bedroomNumbers < 1}
                                >
                                    <Icon.DashLg/>
                                </button>

                                {_bedroomNumbers === 0 ? "any" : _bedroomNumbers+" +"}

                                <button 
                                className="property-selling-filter-modal-circle-btn1"
                                onClick={() => {setBedroomNumbers(_bedroomNumbers + 1); _setBedroomNumbers(_bedroomNumbers + 1)}}
                                >
                                    <Icon.PlusLg/>
                                </button>                                    
                            </div>
                        </div>

                        {/* Bathroom */}
                        <div className="d-flex justify-content-between">
                            <div className="text-m2">Bathroom</div>
                            <div className="d-flex w-30 justify-content-between align-items-center">
                                <button 
                                className={`property-selling-filter-modal-circle-btn1 ${_bathroomNumbers < 1 ? "disabled" : ""}`}
                                onClick={() => {setBathroomNumbers(_bathroomNumbers - 1); _setBathroomNumbers(_bathroomNumbers - 1)}}
                                disabled={_bathroomNumbers < 1}
                                >
                                    <Icon.DashLg/>
                                </button>

                                {_bathroomNumbers === 0 ? "any" : _bathroomNumbers+" +"}

                                <button 
                                className="property-selling-filter-modal-circle-btn1"
                                onClick={() => {setBathroomNumbers(_bathroomNumbers + 1); _setBathroomNumbers(_bathroomNumbers + 1)}}
                                >
                                    <Icon.PlusLg/>
                                </button>                                   
                            </div>
                        </div>

                        {/* Carport */}
                        <div className="d-flex justify-content-between">
                            <div className="text-m2">Carport</div>
                            <div className="d-flex w-30 justify-content-between align-items-center">
                                <button 
                                className={`property-selling-filter-modal-circle-btn1 ${_carportNumbers < 1 ? "disabled" : ""}`}
                                onClick={() => {setCarportNumbers(_carportNumbers - 1); _setCarportNumbers(_carportNumbers - 1)}}
                                disabled={_carportNumbers < 1}
                                >
                                    <Icon.DashLg/>
                                </button>
                                {_carportNumbers === 0 ? "any" : _carportNumbers+" +"}

                                <button 
                                className="property-selling-filter-modal-circle-btn1"
                                onClick={() => {setCarportNumbers(_carportNumbers + 1); _setCarportNumbers(_carportNumbers + 1)}}
                                >
                                    <Icon.PlusLg/>
                                </button>                                 
                            </div>
                        </div>                       
                    </div>

                    <div className="hr-line1 mar-y-1"></div>
                    
                    {/* Amenities */}
                    <div className="d-flex flex-direction-y gap2">
                        <div className="text-l3 fw-bold mar-bottom-3">Amenities</div>
                        <div className="d-flex flex-wrap gap3 user-select-none">
                            {amenities.length > 0 && amenities.map(amenity => (
                                <div key={amenity.id} className={`amenity-btn  ${_selectedAmenities.includes(amenity.id) ? "active" : ""}`} onClick={() => handleSelectUnselectAmenity(amenity.id)}>
                                    <img src={`/src/assets/media/icons/${amenity.icon}`} alt="" />
                                    {amenity.amenity_name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Foot */}
                <div className="property-selling-filter-modal-foot">            
                    <button className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={handleClearFilter}>
                        Clear filters
                    </button>

                    <button 
                    onClick={() => {onClose(); handleFilterProp(_filteredProps, _isFiltering)}}
                    className={`primary-btn-black1 text-center`}
                    >
                        {_filteredProps.length > 0 ? `Show ${_filteredProps.length} properties` : 'No exact matches'}                        
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