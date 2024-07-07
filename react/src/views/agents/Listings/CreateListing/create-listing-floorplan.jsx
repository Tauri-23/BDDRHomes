import * as Icon from 'react-bootstrap-icons';

export default function AgentCreateListingFloorPlan() {
    return(
        <div className="d-flex justify-content-center">
            <div className='d-flex flex-direction-y gapl1'>

                <div className="create-listing-cont">
                    <div className="d-flex flex-direction-y gapl2">
                        <div className="text-l1 fw-bold">Basic floor plan of the property</div>
                        
                        <div className="d-flex flex-direction-y gap1">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Bedroom</div>
                                <div className="d-flex gap2 align-items-center">
                                    <div className="secondary-btn2-black1">
                                        <Icon.Dash className='text-l3'/>
                                    </div>
                                    <div className="text-l2">1</div>
                                    <div className="secondary-btn2-black1">
                                        <Icon.Plus className='text-l3'/>
                                    </div>
                                </div>
                            </div>

                            <div className="h-line-general-grey1 w-100"></div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Bathroom</div>
                                <div className="d-flex gap2 align-items-center">
                                    <div className="secondary-btn2-black1">
                                        <Icon.Dash className='text-l3'/>
                                    </div>
                                    <div className="text-l2">1</div>
                                    <div className="secondary-btn2-black1">
                                        <Icon.Plus className='text-l3'/>
                                    </div>
                                </div>
                            </div>       

                            <div className="h-line-general-grey1 w-100"></div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="text-m1">Car Port</div>
                                <div className="d-flex gap2 align-items-center">
                                    <div className="secondary-btn2-black1">
                                        <Icon.Dash className='text-l3'/>
                                    </div>
                                    <div className="text-l2">0</div>
                                    <div className="secondary-btn2-black1">
                                        <Icon.Plus className='text-l3'/>
                                    </div>
                                </div>
                            </div>  
                        </div> 


                        <div className="d-flex flex-direction-y gap1">
                            <div className="text-l2 fw-bold">Area</div>
                            <div className="d-flex flex-direction-y gap2">
                                <input type="number" className='edit-text-1' placeholder='Lot Area'/>
                                <input type="number" className='edit-text-1' placeholder='Floor Area'/>
                            </div>
                        </div>           
                    </div>           
                </div>
                                
            </div>
        </div>
    );
}