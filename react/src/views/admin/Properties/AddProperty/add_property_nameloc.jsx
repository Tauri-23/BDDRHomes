import { useRef } from "react";
import { useOutletContext } from "react-router-dom";

export default function AdminAddPropertyNameloc() {
    const {propertyName, setPropertyName, propertyAddress, setPropertyAddress, propertyDesc, setPropertyDesc} = useOutletContext();

    const propNameRef = useRef();
    const propAddressRef = useRef();
    const propDescRef = useRef();

    return(
        <div className="d-flex justify-content-center">
            <div className='d-flex flex-direction-y gapl1'>

                <div className="create-listing-cont">
                    <div className="d-flex flex-direction-y gapl2">
                        <div className="text-l1 fw-bold">What is the property name and where it's located.</div>
                        
                        <div className="d-flex flex-direction-y gap1">
                            <div className='d-flex flex-direction-y gap3'>
                                <div className="text-l2">Name</div>
                                <input 
                                    ref={propNameRef}
                                    onInput={() => setPropertyName(propNameRef.current.value)}
                                    type='text' 
                                    className="edit-text-1 w-100" 
                                    placeholder='Property Name'
                                    value={propertyName ? propertyName : ''}
                                />  
                            </div>

                            <div className='d-flex flex-direction-y gap3'>
                                <div className="text-l2">Address</div>
                                <input 
                                    ref={propAddressRef}
                                    onInput={() => setPropertyAddress(propAddressRef.current.value)}
                                    type='text' 
                                    className="edit-text-1 w-100" 
                                    placeholder='Property Address'
                                    value={propertyAddress ? propertyAddress : ''}
                                />  
                            </div>     


                            <div className='d-flex flex-direction-y gap3'>
                                <div className="text-l2">Tell us about the property</div>
                                <textarea 
                                    ref={propDescRef}
                                    onInput={() => setPropertyDesc(propDescRef.current.value)}
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
        </div>
    );
}