import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from "react-router-dom";

export default function AgentEditListingPhotos() {
    const {photos} = useOutletContext();
    const [isEditPhotos, setEditPhotos] = useState(false);
    
    return(
        <>
            <div className="d-flex justify-content-between mar-bottom-l2">
                <div className="text-l1 fw-bold">
                    Photos
                </div>
                
                <div className="d-flex gap2 align-items-center">
                    <div className="primary-btn-grey2 color-black" onClick={() => setEditPhotos(!isEditPhotos)}>
                        Edit
                    </div>
                    <div className="circle-btn-1">
                        <Icon.PlusLg className='text-m1'/>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap gap2">
                {photos.map(photo => 
                    <div key={photo.id} className="edit-listing-photo">
                        
                        <img src={`/src/assets/media/properties/${photo.filename}`}/>

                        <div 
                        className={`secondary-circular-btn-black1 top3 right3 position-absolute ${isEditPhotos ? '' : 'd-none'}`}>
                            <Icon.XLg/>
                        </div>
                    </div>                    
                )}
            </div>
            
        </>
    );
}