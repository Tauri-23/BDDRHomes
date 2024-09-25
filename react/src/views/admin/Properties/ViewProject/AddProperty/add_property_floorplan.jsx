import { useRef } from "react";
import { useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export default function AdminAddPropertyFloorplan() {

    const {
        bedroom, setBedroom, 
        bathroom, setBathroom, 
        carport, setCarport, 
        storey, setStorey,
        lotArea, setLotArea, 
        floorArea, setFloorArea
    } = useOutletContext();
    const lotAreaRef = useRef();
    const floorAreaRef = useRef();

    return(
        <div className="d-flex justify-content-center">
            <div className='d-flex flex-direction-y gapl1'>

                <div className="create-listing-cont">
                    <div className="d-flex flex-direction-y gapl2">
                        <div className="text-l1 fw-bold">Basic floor plan of the property</div>
                        
                        <div className="d-flex flex-direction-y gap1">
                            {/* Bedroom */}
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Bedroom</div>
                                <div className="d-flex gap2 align-items-center">
                                    <button disabled={bedroom < 2} className={`secondary-circular-btn-black1 ${bedroom < 2 ? 'disabled' : ''}`} onClick={() => setBedroom(bedroom - 1)}>
                                        <Icon.Dash className='text-l2'/>
                                    </button>
                                    <div className="text-l2">{bedroom}</div>
                                    <button className="secondary-circular-btn-black1" onClick={() => setBedroom(bedroom + 1)}>
                                        <Icon.Plus className='text-l2'/>
                                    </button>
                                </div>
                            </div>

                            <div className="h-line-general-grey1 w-100"></div>

                            {/* Bathroom */}
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Bathroom</div>
                                <div className="d-flex gap2 align-items-center">
                                    <button disabled={bathroom < 2} className={`secondary-circular-btn-black1 ${bathroom < 2 ? 'disabled' : ''}`} onClick={() => setBathroom(bathroom - 1)}>
                                        <Icon.Dash className='text-l2'/>
                                    </button>
                                    <div className="text-l2">{bathroom}</div>
                                    <button className="secondary-circular-btn-black1" onClick={() => setBathroom(bathroom + 1)}>
                                        <Icon.Plus className='text-l2'/>
                                    </button>
                                </div>
                            </div>       

                            <div className="h-line-general-grey1 w-100"></div>

                            {/* Carport */}
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Car Port</div>
                                <div className="d-flex gap2 align-items-center">
                                    <button disabled={carport < 1} className={`secondary-circular-btn-black1 ${carport < 1 ? 'disabled' : ''}`} onClick={() => setCarport(carport - 1)}>
                                        <Icon.Dash className='text-l2'/>
                                    </button>
                                    <div className="text-l2">{carport}</div>
                                    <button className="secondary-circular-btn-black1" onClick={() => setCarport(carport + 1)}>
                                        <Icon.Plus className='text-l2'/>
                                    </button>
                                </div>
                            </div>

                            <div className="h-line-general-grey1 w-100"></div>

                            {/* Storey */}
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Storey</div>
                                <div className="d-flex gap2 align-items-center">
                                    <button disabled={storey < 2} className={`secondary-circular-btn-black1 ${storey < 2 ? 'disabled' : ''}`} onClick={() => setStorey(storey - 1)}>
                                        <Icon.Dash className='text-l2'/>
                                    </button>
                                    <div className="text-l2">{storey}</div>
                                    <button className="secondary-circular-btn-black1" onClick={() => setStorey(storey + 1)}>
                                        <Icon.Plus className='text-l2'/>
                                    </button>
                                </div>
                            </div> 
                        </div> 


                        <div className="d-flex flex-direction-y gap1">
                            <div className="text-l2 fw-bold">Area</div>
                            <div className="d-flex flex-direction-y gap2">
                                <div className='d-flex flex-direction-y gap3'>
                                    <label htmlFor="lot-area-in" className='text-m1'>Lot area in sqm</label>
                                    <input 
                                        ref={lotAreaRef} 
                                        type="number"
                                        id='lot-area-in'
                                        onInput={() => setLotArea(lotAreaRef.current.value)}
                                        className='edit-text-1 w-100' 
                                        placeholder='Lot Area' 
                                        value={lotArea ? lotArea : ''}
                                        min={0}
                                    />
                                </div>
                                <div className="d-flex flex-direction-y gap3">
                                    <label htmlFor="floor-area-in" className='text-m1'>Floor area in sqm</label>
                                    <input 
                                        ref={floorAreaRef} 
                                        type="number" 
                                        id='floor-area-in'
                                        onInput={() => setFloorArea(floorAreaRef.current.value)}
                                        className='edit-text-1 w-100' 
                                        placeholder='Floor Area' 
                                        value={floorArea ? floorArea : ''}
                                        min={0}
                                    />
                                </div>
                            </div>
                        </div>           
                    </div>           
                </div>
                                
            </div>
        </div>
    );
}