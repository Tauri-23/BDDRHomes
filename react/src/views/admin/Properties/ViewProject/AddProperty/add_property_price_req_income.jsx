import { useRef } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from 'react-router-dom';

export default function AdminAddPropertyPriceReqIncome() {

    const {
        TCP,
        setTCP,
        selectedPropertyFinancing,
        termOfBankFinancing, 
        setTermOfBankFinancing,
        bankInterestRate, 
        setBankInterestRate,
        DPPercent,
        setDPPercent,
        termOfDP,
        setTermOfDP,
    } = useOutletContext();

    const handleSelectBankTerm = (term) => {
        setTermOfBankFinancing(prev => {
            const updated = prev.includes(term)
                ? prev.filter(prevTerm => prevTerm !== term)
                : [...prev, term]
            return updated.sort(function(a, b){return a - b});
        });
    }


    return(
        <div className="d-flex justify-content-center">
            <div className='d-flex flex-direction-y gapl1'>

                <div className="create-listing-cont">
                    <div className="d-flex flex-direction-y gapl2">
                        <div className="text-l1 fw-bold">Price and terms</div>

                        <div className="d-flex flex-direction-y gap1">
                            <div className="d-flex flex-direction-y gap2">

                                <div className='d-flex flex-direction-y gap3'>
                                    <label htmlFor="tcp-in" className='text-m1'>Total Contract Price</label>
                                    <input 
                                        type="number"
                                        id='tcp-in'
                                        onInput={(e) => setTCP(e.target.value)}
                                        className='edit-text-1 w-100' 
                                        placeholder='Total Contract Price' 
                                        value={TCP || ''}
                                        min={0}
                                    />
                                </div>

                                <div className='d-flex flex-direction-y gap3 mar-bottom-1'>
                                    <label htmlFor="dp-in" className='text-m1'>Down Payment %</label>
                                    <input 
                                        type="number"
                                        id='dp-in'
                                        onInput={(e) => setDPPercent(e.target.value)}
                                        className='edit-text-1 w-100' 
                                        placeholder='e.g. 15' 
                                        value={DPPercent || ''}
                                        min={0}
                                    />
                                </div>


                                {selectedPropertyFinancing.map(propFinancing => (
                                    <>
                                        {propFinancing.id == "952734" && (
                                            <div className='d-flex flex-direction-y gap2'>
                                                <div className="text-l3 fw-bold">For {propFinancing.financing_type}</div>

                                                <div className='d-flex flex-direction-y gap3'>
                                                    <label htmlFor="tcp-in" className='text-m1'>Terms</label>
                                                    <div className="d-flex flex-wrap gap3">
                                                        {Array.from({length: 20}, (_, index) => index).map(x => (
                                                            <div className={`${termOfBankFinancing.includes(x + 1) ? 'primary' : 'secondary'}-btn-black1`} key={x} onClick={() => handleSelectBankTerm(x + 1)}>{x + 1} years</div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className='d-flex flex-direction-y gap3'>
                                                    <label htmlFor="bank-r-in" className='text-m1'>Interest Rate in %</label>
                                                    <input 
                                                        type="number"
                                                        id='bank-r-in'
                                                        onInput={(e) => setBankInterestRate(e.target.value)}
                                                        className='edit-text-1 w-100' 
                                                        placeholder='e.g. 10' 
                                                        value={bankInterestRate || ''}
                                                        min={0}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ))}
                                
                            </div>
                        </div>           
                    </div>           
                </div>
                                
            </div>
        </div>
    );
}