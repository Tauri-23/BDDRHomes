import { useOutletContext } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useEffect, useRef, useState } from "react";
import axiosClient from "../../../../axios-client";
import { notify } from "../../../../assets/js/utils";

export default function AdminEditPropertyFloorplan() {
    const {id, bedroom, bath, carport, lotArea, floorArea, setListing} = useOutletContext();
    const [_bedroom, _setBedroom] = useState(Number(bedroom));
    const [_bath, _setBath] = useState(Number(bath));
    const [_carport, _setCarport] = useState(Number(carport));
    const [_lotArea, _setLotArea] = useState(lotArea);
    const [_floorArea, _setFloorArea] = useState(floorArea);
    const [isSaveBtnEnabled, setSaveBtnEnabled] = useState(false);

    const lotAreaRef = useRef();
    const floorAreaRef = useRef();

    useEffect(() => {
        if((bedroom == _bedroom) && (bath == _bath) && (carport == _carport) && (lotArea == _lotArea) && (floorArea == _floorArea)) {
            setSaveBtnEnabled(false);
        }
        else {
            setSaveBtnEnabled(true);
        }        
    });


    const handleSaveBtn = () => {    

        const formData = new FormData();
        formData.append('id', id);
        formData.append('bedroom', _bedroom);
        formData.append('bath', _bath);
        formData.append('carport', _carport);
        formData.append('lotArea', _lotArea);
        formData.append('floorArea', _floorArea);        

        axiosClient.post('/general-update-published-property-floorplan', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify('success', data.message, 'top-center', 3000);
                setListing((listing) =>{
                    const updatedFloorplan = {...listing};
                    updatedFloorplan[0].bedroom = _bedroom;
                    updatedFloorplan[0].bath = _bath;
                    updatedFloorplan[0].carport = _carport;
                    updatedFloorplan[0].lot_area = _lotArea;
                    updatedFloorplan[0].floor_area = _floorArea;

                    return updatedFloorplan;                    
                });
            }
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return(
        <div className="d-flex w-100 h-100 flex-direction-y justify-content-between">
            <div>
                <div className="text-l1 mar-bottom-l2 fw-bold">Floorplan</div>

                <div className="d-flex flex-direction-y gapl1">

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

                    <div className="d-flex flex-direction-y gap2">
                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="lot-area">Lot area in sqm</label>
                            <input ref={lotAreaRef} type="number" id="lot-area" className="edit-text-1" onInput={() => _setLotArea(lotAreaRef.current.value)} value={_lotArea} />
                        </div>

                        <div className="d-flex flex-direction-y gap4">
                            <label htmlFor="floor-area">Floor area in sqm</label>
                            <input ref={floorAreaRef} type="number" id="floor-area" className="edit-text-1" onInput={() => _setFloorArea(floorAreaRef.current.value)} value={_floorArea} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="save-btn-cont d-flex justify-content-center align-items-center">
                <button 
                onClick={() => handleSaveBtn()}
                disabled={!isSaveBtnEnabled} 
                className={`primary-btn-black1 ${isSaveBtnEnabled ? '' : 'disabled'}`}
                >
                    Save
                </button>
            </div>

        </div>
    );
}