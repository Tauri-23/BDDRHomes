import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from "react-router-dom";

export default function AgentEditListingPhotos() {
    const {photos} = useOutletContext();
    
    return(
        <>
            <div className="text-l1 d-flex justify-content-between mar-bottom-l2">
                Photos
                <div className="circle-btn-1">
                    <Icon.PlusLg className='text-m1'/>
                </div>
            </div>
            <div className="d-flex flex-wrap gap2">
                {photos.map(photo => 
                    <div key={photo.id} className="edit-listing-photo">
                        <img src={`/src/assets/media/properties/${photo.filename}`}/>
                    </div>                    
                )}
            </div>
            
        </>
    );
}