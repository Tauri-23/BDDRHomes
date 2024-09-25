import { useOutletContext } from "react-router-dom";
import { formatToPhilPeso } from "../../../../../assets/js/utils";
import { useEffect } from "react";
import { calcMonthlyAmort } from "../../../../../Services/CalculationsService";

export default function AdminAddPropertyFinal() {

    const {
        project,
        selectedTypes,
        photos, 

        projectModel,
        propertyTurnover,

        bedroom,
        bathroom,
        carport,
        lotArea,
        floorArea,
        selectedPropertyAmenities,
        selectedPropertyFinancing,

        TCP,
        termOfBankFinancing, 
        bankInterestRate, 
        DPPercent,
    } = useOutletContext();

    // Divide the amenities into two halves
    const middleIndex = Math.ceil(selectedPropertyAmenities.length / 2);
    const firstHalfAmenities = selectedPropertyAmenities.slice(0, middleIndex);
    const secondHalfAmenities = selectedPropertyAmenities.slice(middleIndex);

    const loanable = (TCP * (100 - DPPercent)) / 100;

    return(
        <div className="d-flex justify-content-center">
            <div className="create-listing-cont d-flex flex-direction-y gapl1 padding-y-1">
                <div className="d-flex flex-direction-y gap2">
                    <div className="text-m1 fw-bold">Final Step</div>
                    <div className="text-xl2 fw-bold">You've finally filled out the form; the only thing to do is publish your listing.</div>
                    <div className="text-l3">Please check the preview below, and if you're happy with the information, you can click the publish button.</div>
                </div>

                <div className="h-line-general-grey1"></div>               


                <div className="d-flex flex-direction-y gap1">
                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Property Name: </div>
                        <div className="text-l3 fw-bold">{project.project_name}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Property Model: </div>
                        <div className="text-l3 fw-bold">{projectModel}</div>
                    </div>
                    
                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Property Developer: </div>
                        <div className="text-l3 fw-bold">{project.developer.name}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Property Address: </div>
                        <div className="text-l3 fw-bold">{project.city_denormalized} {project.province_denormalized}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Property Turnover: </div>
                        <div className="text-l3 fw-bold">{propertyTurnover}</div>
                    </div>

                    {/* <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Property Description: </div>
                        <div className="text-l3 about-content">{propertyDesc}</div>
                    </div> */}

                    <div className="d-flex flex-direction-y gap3 mar-top-1">
                        <div className="text-l3 fw-bold mar-bottom-3">Basic Specs: </div>
                        
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-direction-y gap3">
                                <div className="listing-spec-box2">
                                    <img src="/src/assets/media/icons/bed.svg" className="icon-s" alt="Bedroom"/>
                                    <div className="text-m1">Bedroom: {bedroom}</div>
                                </div>
                                <div className="listing-spec-box2">
                                    <img src="/src/assets/media/icons/bathtub.svg" className="icon-s" alt="Bedroom"/>
                                    <div className="text-m1">Bath: {bathroom}</div>
                                </div>

                                <div className="listing-spec-box2">
                                    <img src="/src/assets/media/icons/garages.svg" className="icon-s" alt="Bedroom"/>
                                    <div className="text-m1">Carport: {carport}</div>
                                </div>
                            </div>

                            <div className="d-flex flex-direction-y gap3">
                                <div className="listing-spec-box2">
                                    <img src="/src/assets/media/icons/area.svg" className="icon-s" alt="Bedroom"/>
                                    <div className="text-m1">Lot area: {lotArea}sqm</div>
                                </div>
                                <div className="listing-spec-box2">
                                    <img src="/src/assets/media/icons/area.svg" className="icon-s" alt="Bedroom"/>
                                    <div className="text-m1">Floor area: {floorArea}sqm</div>
                                </div>

                                <div className="listing-spec-box2">
                                    <img src="/src/assets/media/icons/house.svg" className="icon-s" alt="Bedroom"/>
                                    <div className="text-m1">House type: {selectedTypes.type_name}</div>
                                </div>
                            </div>                           
                        </div>
                    </div>

                    <div className="d-flex flex-direction-y gap3 mar-top-1">
                        <div className="text-l3 fw-bold mar-bottom-3">Amenities: </div>
                        
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-direction-y gap3">
                                {firstHalfAmenities.map((amenity) => (
                                    <div key={amenity.id} className="listing-spec-box2">
                                        <img src={`/src/assets/media/icons/${amenity.icon}`} className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">{amenity.amenity_name}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex flex-direction-y gap3">
                                {secondHalfAmenities.map((amenity) => (
                                    <div key={amenity.id} className="listing-spec-box2">
                                        <img src={`/src/assets/media/icons/${amenity.icon}`} className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">{amenity.amenity_name}</div>
                                    </div>
                                ))}
                            </div>                      
                        </div>
                    </div>

                    <div className="d-flex flex-direction-y gap3 mar-top-1">
                        <div className="text-l3 fw-bold mar-bottom-3">Photos: </div>
                        
                        <div className="d-flex w-100 flex-wrap gap3">
                            {photos.map((photo, index) => (
                                <div key={index} className="photos-preview-box">
                                    <img 
                                    key={index} 
                                    src={URL.createObjectURL(photo)} 
                                    alt={`Photo ${index + 1}`} 
                                    className="photo-preview"
                                    />
                                </div>          
                            ))}
                        </div>
                    </div>

                    <div className="d-flex flex-direction-y gap3 mar-top-1">
                        <div className="text-l3 fw-bold mar-bottom-3">Financing: </div>
                        
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-direction-y gap3">
                                {selectedPropertyFinancing.map((financing) => (
                                    <div key={financing.id} className="listing-spec-box2">
                                        <img src={`/src/assets/media/icons/${financing.icon}`} className="icon-s" alt="Bedroom"/>
                                        <div className="text-m1">{financing.financing_type}</div>
                                    </div>
                                ))}
                            </div>                 
                        </div>
                    </div>

                    {/* <div className="d-flex flex-direction-y gap3 mar-top-1">
                        <div className="text-l3 fw-bold mar-bottom-3">Price: </div>
                        <div className="text-l3 about-content">{propertyDesc}</div>
                    </div> */}
                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Total Contract Price: </div>
                        <div className="text-l3 fw-bold">{formatToPhilPeso(TCP)}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Down Payment ({DPPercent}%):</div>
                        <div className="text-l3 fw-bold">{formatToPhilPeso(TCP * DPPercent / 100)}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Loanable ({100 - DPPercent}%): </div>
                        <div className="text-l3 fw-bold">{formatToPhilPeso(loanable)}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Monthly Amortization: </div>
                        <div className="text-l3 fw-bold">{termOfBankFinancing.map(bank => (
                            <div className="text-l3 fw-bold">{bank} years - {formatToPhilPeso(calcMonthlyAmort(loanable, bank, 0, bankInterestRate))}</div>
                        ))}</div>
                    </div>

                    <div className="d-flex flex-direction-y gap4">
                        <div className="text-m1">Required Income: </div>
                        <div className="text-l3 fw-bold">
                            {formatToPhilPeso(calcMonthlyAmort(loanable, termOfBankFinancing[termOfBankFinancing.length - 1], 0, bankInterestRate) / .35)} - 
                            {formatToPhilPeso(calcMonthlyAmort(loanable, termOfBankFinancing[0], 0, bankInterestRate) / .35)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}