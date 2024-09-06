import { useRef } from "react";
import { useOutletContext } from "react-router-dom";

export default function AdminAddPropertyNameloc() {
    const {
        projectName, setProjectName, 
        projectModel, setProjectModel,
        propertyProvince, setPropertyProvince,
        propertyCity, setPropertyCity
    } = useOutletContext();

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
                                <div className="text-l2">Project name</div>
                                <input 
                                    onInput={(e) => setProjectName(e.target.value)}
                                    type='text' 
                                    className="edit-text-1 w-100" 
                                    placeholder='Property Name'
                                    value={projectName || ''}
                                />  
                            </div>

                            <div className='d-flex flex-direction-y gap3'>
                                <div className="text-l2">Project model</div>
                                <input 
                                    onInput={(e) => setProjectModel(e.target.value)}
                                    type='text' 
                                    className="edit-text-1 w-100" 
                                    placeholder='Property Name'
                                    value={projectModel || ''}
                                />  
                            </div>

                            <div className='d-flex flex-direction-y gap3'>
                                <div className="text-l2">Address</div>
                                <div className="d-flex gap3">
                                    <input 
                                        ref={propAddressRef}
                                        onInput={(e) => setPropertyProvince(e.target.value)}
                                        type='text' 
                                        className="edit-text-1 w-100" 
                                        placeholder='Province'
                                        value={propertyProvince || ''}
                                    />  

                                    <input 
                                        ref={propAddressRef}
                                        onInput={(e) => setPropertyCity(e.target.value)}
                                        type='text' 
                                        className="edit-text-1 w-100" 
                                        placeholder='City'
                                        value={propertyCity || ''}
                                    /> 
                                </div>
                            </div>     


                            {/* <div className='d-flex flex-direction-y gap3'>
                                <div className="text-l2">Tell us about the property</div>
                                <textarea 
                                    ref={propDescRef}
                                    onInput={() => setPropertyDesc(propDescRef.current.value)}
                                    className="edit-text-1 w-100" 
                                    style={{height: '200px', resize: 'none'}}
                                    value={propertyDesc ? propertyDesc : ''}
                                >

                                </textarea>
                            </div> */}
                        </div>                     
                    </div>           
                </div>
                                
            </div>
        </div>
    );
}