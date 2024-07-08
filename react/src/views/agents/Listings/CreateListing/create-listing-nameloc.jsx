import { useRef } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from 'react-router-dom';

export default function AgentCreateListingNameLoc() {
    const {propertyName, setPropertyName, propertyAddress, setPropertyAddress, propertyDesc, setPropertyDesc} = useOutletContext();

    const propNameRef = useRef();
    const propAddressRef = useRef();
    const propDescRef = useRef();

    const nameInput = () => {
        setPropertyName(propNameRef.current.value);
    }
    const addressInput = () => {
        setPropertyAddress(propAddressRef.current.value);
    }
    const descInput = () => {
        setPropertyDesc(propDescRef.current.value);
    }

    return(
        <div className="d-flex justify-content-center">
            <div className='d-flex flex-direction-y gapl1'>

                <div className="create-listing-cont">
                    <div className="d-flex flex-direction-y gapl2">
                        <div className="text-l1 fw-bold">What is the property name and where it's located.</div>
                        
                        <div className='d-flex flex-direction-y gap2'>
                            <div className="text-l2">Name</div>
                            <input 
                                ref={propNameRef}
                                onInput={nameInput}
                                type='text' 
                                className="edit-text-1 w-100" 
                                placeholder='Property Name'
                                value={propertyName ? propertyName : ''}
                            />  
                        </div>

                        <div className='d-flex flex-direction-y gap2'>
                            <div className="text-l2">Address</div>
                            <input 
                                ref={propAddressRef}
                                onInput={addressInput}
                                type='text' 
                                className="edit-text-1 w-100" 
                                placeholder='Property Address'
                                value={propertyAddress ? propertyAddress : ''}
                            />  
                        </div>     


                        <div className='d-flex flex-direction-y gap2'>
                            <div className="text-l2">Tell us about the property</div>
                            <textarea 
                                ref={propDescRef}
                                onInput={descInput}
                                className="edit-text-1 w-100" 
                                style={{height: '200px', resize: 'none'}}
                                value={propertyDesc ? propertyDesc : ''}
                            >

                            </textarea>
                        </div>                        
                    </div>           
                </div>
                                
            </div>
        </div>
    );
}