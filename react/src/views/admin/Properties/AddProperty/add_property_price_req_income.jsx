import { useRef } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from 'react-router-dom';

export default function AdminAddPropertyPriceReqIncome() {

    const {monthlyAmortization, setMonthlyAmortization, requiredIncome, setRequiredIncome} = useOutletContext();


    return(
        <div className="d-flex justify-content-center">
            <div className='d-flex flex-direction-y gapl1'>

                <div className="create-listing-cont">
                    <div className="d-flex flex-direction-y gapl2">
                        <div className="text-l1 fw-bold">Price and required income of the property</div>

                        <div className="d-flex flex-direction-y gap1">
                            <div className="d-flex flex-direction-y gap2">
                                <div className='d-flex flex-direction-y gap3'>
                                    <label htmlFor="lot-area-in" className='text-m1'>Monthly Amortization</label>
                                    <input 
                                        type="number"
                                        id='lot-area-in'
                                        onInput={(e) => setMonthlyAmortization(e.target.value)}
                                        className='edit-text-1 w-100' 
                                        placeholder='Monthly Amortization' 
                                        value={monthlyAmortization || ''}
                                        min={0}
                                    />
                                </div>
                                <div className="d-flex flex-direction-y gap3">
                                    <label htmlFor="floor-area-in" className='text-m1'>Required income</label>
                                    <input 
                                        type="number" 
                                        id='floor-area-in'
                                        onInput={(e) => setRequiredIncome(e.target.value)}
                                        className='edit-text-1 w-100' 
                                        placeholder='Required Income' 
                                        value={requiredIncome || ''}
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