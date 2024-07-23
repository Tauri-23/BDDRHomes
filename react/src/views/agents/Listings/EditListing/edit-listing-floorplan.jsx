import { useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export default function AgentEditListingFloorplan() {
    const {bedroom, bath, carport, lotArea, floorArea} = useOutletContext();
    const [_bedroom, _setBedroom] = useState(Number(bedroom));
    const [_bath, _setBath] = useState(Number(bath));
    const [_carport, _setCarport] = useState(Number(carport));
    const [_lotArea, _setLotArea] = useState(lotArea);
    const [_floorArea, _setFloorArea] = useState(floorArea);

    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div>
                <div className="text-l1 mar-bottom-l2 fw-bold">Floorplan</div>

                <div className="d-flex flex-direction-y gap2">

                <div className="d-flex flex-direction-y gap1">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Bedroom</div>
                                <div className="d-flex gap2 align-items-center">
                                    <button disabled={_bedroom < 2} className={`secondary-circular-btn-black1 ${_bedroom < 2 ? 'disabled' : ''}`} onClick={() => _setBedroom(_bedroom - 1)}>
                                        <Icon.Dash className='text-l2'/>
                                    </button>
                                    <div className="text-l2">{_bedroom}</div>
                                    <button className="secondary-circular-btn-black1" onClick={() => _setBedroom(_bedroom + 1)}>
                                        <Icon.Plus className='text-l2'/>
                                    </button>
                                </div>
                            </div>

                            <div className="h-line-general-grey1 w-100"></div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Bathroom</div>
                                <div className="d-flex gap2 align-items-center">
                                    <button disabled={_bath < 2} className={`secondary-circular-btn-black1 ${_bath < 2 ? 'disabled' : ''}`} onClick={() => _setBath(_bath - 1)}>
                                        <Icon.Dash className='text-l2'/>
                                    </button>
                                    <div className="text-l2">{_bath}</div>
                                    <button className="secondary-circular-btn-black1" onClick={() => _setBath(_bath + 1)}>
                                        <Icon.Plus className='text-l2'/>
                                    </button>
                                </div>
                            </div>       

                            <div className="h-line-general-grey1 w-100"></div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Car Port</div>
                                <div className="d-flex gap2 align-items-center">
                                    <button disabled={_carport < 1} className={`secondary-circular-btn-black1 ${_carport < 1 ? 'disabled' : ''}`} onClick={() => _setCarport(_carport - 1)}>
                                        <Icon.Dash className='text-l2'/>
                                    </button>
                                    <div className="text-l2">{_carport}</div>
                                    <button className="secondary-circular-btn-black1" onClick={() => _setCarport(_carport + 1)}>
                                        <Icon.Plus className='text-l2'/>
                                    </button>
                                </div>
                            </div>  
                        </div> 

                </div>
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center">
                <button disabled className="primary-btn-black1 disabled">Save</button>
            </div>

        </div>
    );
}