import * as Icon from 'react-bootstrap-icons';

export default function AgentCreateListingNameLoc() {
    return(
        <div className="d-flex justify-content-center">
            <div className='d-flex flex-direction-y gapl1'>

                <div className="create-listing-cont">
                    <div className="d-flex flex-direction-y gapl2">
                        <div className="text-l1 fw-bold">What is the property name and where it's located.</div>
                        
                        <div className='d-flex flex-direction-y gap2'>
                            <div className="text-l2">Name</div>
                            <input type='text' className="edit-text-1 w-100" placeholder='Property Name'/>  
                        </div>

                        <div className='d-flex flex-direction-y gap2'>
                            <div className="text-l2">Address</div>
                            <input type='text' className="edit-text-1 w-100" placeholder='Property Address'/>  
                        </div>     


                        <div className='d-flex flex-direction-y gap2'>
                            <div className="text-l2">Tell us about the property</div>
                            <textarea className="edit-text-1 w-100" style={{height: '200px', resize: 'none'}}>

                            </textarea>
                        </div>                        
                    </div>           
                </div>
                                
            </div>
        </div>
    );
}