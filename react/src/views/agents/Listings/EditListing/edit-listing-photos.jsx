import { useEffect, useRef, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import { notify } from "../../../../assets/js/utils";
import axiosClient from "../../../../axios-client";

import {closestCorners, DndContext} from '@dnd-kit/core';
import {arrayMove, rectSortingStrategy, SortableContext} from '@dnd-kit/sortable';
import { useSortable } from "@dnd-kit/sortable";
import { EditListingPhotoCard } from "../../../../components/AgentEditListing/edit_listing_photo_card";

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
            notify('error', 'Photos could not be less than 5.', 'top-center', 3000);
            return;
        }

        const photoToRemove = photos.filter(photo => photo.id === photoId);
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
                notify('success', data.message, 'top-center', 3000);
            }
            else {
                notify('error', data.message, 'top-center', 3000);
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
                const updatedPhotos = [...photos, ...data.photos];
                setPhotos(updatedPhotos);

                notify('success', data.message, 'top-center', 3000);
            }
            else {
                notify('error', data.message, 'top-center', 3000);
                console.error(data.message);
            }
        })
        .catch((error) => {console.error(error)});
    }



    /*
    |   Drag
    */
    const getPhotoPos = id => photos.findIndex(photo => 
        photo.id === id
    );

    const handleDragEnd = (event) => { 
        const {active, over} = event;

        if(active.id === over.id) return;

        setPhotos(photos => {
            const originalPos = getPhotoPos(active.id)
            const newPos = getPhotoPos(over.id);

            return arrayMove(photos, originalPos, newPos);            
        });

        setPhotos(photos => {
            const formData = new FormData();
            photos.forEach((photo, index) => {
                formData.append(`photos[${index}]`, photo.id);
            });

            axiosClient.post('/update-prop-photo-sequence', formData)
            return photos;
        })
    }


    
    return(
        <>
            <div className="d-flex justify-content-between mar-bottom-l2">
                <div className="text-l1 fw-bold">
                    Photos
                </div>
                
                <div className="d-flex gap2 align-items-center">
                    <div className="primary-btn-grey2 color-black" onClick={() => setEditPhotos(!isEditPhotos)}>
                        {isEditPhotos ? 'Cancel Manage Photos' : 'Manage Photos'}
                    </div>
                    <div className="circle-btn-1" onClick={handleAddPhoto}>
                        <Icon.PlusLg className='text-m1'/>
                    </div>
                </div>
            </div>

            <div className={`text-m2 color-black3 mar-bottom-l2 fst-italic fw-bold`}>
                {!isEditPhotos 
                ? (<>TIP: <br/> <div className="mar-start-3 fst-italic">you can drag and drop photos to your prefered sequence (the first one is the thumbnail for your listing).</div></>)
                : (<>TIP: <br/> <div className="mar-start-3 fst-italic">Manage Photo: you can remove photos.</div></>)}
                
            </div>

            <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
            >
                <div className="d-flex flex-wrap gap2">
                    <SortableContext 
                        items={photos.map(photo => photo.id)}  // Ensure `items` is just the IDs
                        strategy={rectSortingStrategy}
                    >
                        {photos.map(photo => 
                            <EditListingPhotoCard
                                id={photo.id}
                                photo={photo}
                                isEditPhotos={isEditPhotos}
                                handleRemovePhoto={() => handleRemovePhoto(photo.id, photo.filename)}
                                key={photo.id}
                            />
                        )}
                    </SortableContext>
                </div>
            </DndContext>

            
            
        </>
    );
}