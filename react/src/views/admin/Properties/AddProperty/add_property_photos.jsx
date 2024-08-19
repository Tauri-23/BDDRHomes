import { useRef, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useOutletContext } from 'react-router-dom';

export default function AdminAddPropertyPhotos() {    
    const {photos, setPhotos} = useOutletContext();
    const dragPicContainerRef = useRef(null);

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dragPicContainerRef.current.classList.remove('active'); 
        const files = Array.from(event.dataTransfer.files);
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        const updatedPhotos = [...photos, ...imageFiles];
        setPhotos(updatedPhotos);
    };

    const onDragEnter = (event) => { 
        event.preventDefault();
        event.stopPropagation();
        dragPicContainerRef.current.classList.add('active'); 
    }

    const onDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dragPicContainerRef.current.classList.remove('active'); 
    };

    const deletePhoto = (index) => {
        const updatedPhotos = [...photos];
        updatedPhotos.splice(index, 1);
        setPhotos(updatedPhotos);        
    }

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        const updatedPhotos = [...photos, ...imageFiles];
        setPhotos(updatedPhotos);
    };

    return (
        <div className="d-flex justify-content-center padding-bottom-1">
            <div className="d-flex flex-direction-y gap1">
                <div className="text-l1 fw-bold mar-bottom-1">Add some photos of your property</div>

                {photos.length > 0 && (
                    <div className="photos-preview-cont">
                        
                        {photos.map((photo, index) => (
                            <div className="photos-preview-box">
                                <div className="photos-preview-box-option-btn" onClick={() => deletePhoto(index)}>
                                    <Icon.XLg/>
                                </div>

                                <img 
                                key={index} 
                                src={URL.createObjectURL(photo)} 
                                alt={`Photo ${index + 1}`} 
                                className="photo-preview"
                                />
                            </div>          
                        ))}
                    </div>
                )}

                <div 
                    ref={dragPicContainerRef}
                    className={`create-listing-add-photo-cont1`}
                    onDragOver={(event) => event.preventDefault()}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="d-flex flex-direction-y gap2">
                        <img src="/src/assets/media/icons/gallery.svg" className='icon-l m-auto' alt="" />
                        <div className="text-l3">Drag some photos of the property here</div>
                        <div 
                            className="text-m2 text-center text-decoration-underline"
                            onClick={handleUploadClick}
                        >
                            upload photos
                        </div>
                        <input 
                            type="file" 
                            id="fileInput"
                            className='d-none'
                            multiple 
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                </div>                
            </div>
        </div>
    );
}
