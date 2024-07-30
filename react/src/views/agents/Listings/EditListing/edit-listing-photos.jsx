import { useEffect, useRef, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import { notify } from "../../../../assets/js/utils";
import axiosClient from "../../../../axios-client";

export default function AgentEditListingPhotos() {
    const {showModal} = useModal();
    const {id, photos, setPhotos} = useOutletContext();
    const [isEditPhotos, setEditPhotos] = useState(false);
    const [addPhotos, setAddPhotos] = useState([]); 



    /*
    |    Used in debugging
    */
    // useEffect(() => {
    //     console.log('addPhotos is updated', addPhotos);
    // }, [addPhotos]);
    // useEffect(() => {
    //     console.log('photos is updated', photos);
    // }, [photos]);



    /*
    |    Remove Photo
    */
    const handleRemovePhoto = (photoId, filename) => {
        if(photos.length < 6) {
            notify('error', 'Photos could not be less than 5.', 3000);
            return;
        }

        const photoToRemove = photos.filter(photo => photo.id === photoId);
        console.log(photoToRemove);
        showModal('AgentEditListisngDelPhotoModal1', {
            photo: photoToRemove,
            removePhotoHandler: () => handleRemovePhotoPost(photoId, filename)
        });
    };

    const handleRemovePhotoPost = (photoId, filename) => { 
        
        const formData = new FormData();
        formData.append('id', photoId);
        formData.append('filename', filename);

        axiosClient.post('/remove-published-prop-photo', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setPhotos(photosToRemove => 
                    photosToRemove.filter(photo => photo.id !== photoId)
                );
                notify('success', data.message, 3000);
            }
            else {
                notify('error', data.message, 3000);
            }
        })
        .catch(error => console.error(error));

        
    }



    /*
    |    Add Photo
    */
    const handleAddPhoto = () => {
        setAddPhotos([]);
        showModal('AgentEditListingAddPhotoModal1', {
            addPhotoHandler: handleAddPhotosPost,
            addPhotos: [],
            setAddPhotos
        });
    }
    
    const handleAddPhotosPost = () => {
        const formData = new FormData();
        
        formData.append('propertyId', id);

        setAddPhotos(currentAddPhotos => {
            
            currentAddPhotos.map((photo, index) => {
                formData.append(`photo[${index}]`, photo);
            })
            return currentAddPhotos;
        })

        axiosClient.post('/add-published-prop-photo', formData)
        .then(({data}) => {
            if(data.status === 200) {
                console.log(data.photos);
                
                const updatedPhotos = [...photos, ...data.photos];
                setPhotos(updatedPhotos);

                notify('success', data.message, 3000);
            }
            else {
                notify('error', data.message, 3000);
                console.error(data.message);
            }
        })
        .catch((error) => {console.error(error)});
    }


    
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
                    <div className="circle-btn-1" onClick={handleAddPhoto}>
                        <Icon.PlusLg className='text-m1'/>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap gap2">
                {photos.map(photo => 
                    <div key={photo.id} className="edit-listing-photo">
                        
                        <img src={`/src/assets/media/properties/${photo.filename}`}/>

                        <div 
                        onClick={() => handleRemovePhoto(photo.id, photo.filename)}
                        className={`secondary-circular-btn-black1 top3 right3 position-absolute ${isEditPhotos ? '' : 'd-none'}`}>
                            <Icon.XLg/>
                        </div>
                    </div>                    
                )}
            </div>
            
        </>
    );
}