import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const AdminEditPropertyAddPhotoModal1 = ({ addPhotoHandler, addPhotos, setAddPhotos, onClose }) => {
    const divPhotoInputRef = useRef();
    const [internalPhotos, setInternalPhotos] = useState(addPhotos);
    const [isAddBtnDisabled, setAddBtnDisabled] = useState(true);


    useEffect(() => {
        if(internalPhotos.length > 0) {
            setAddBtnDisabled(false);
        }
        else {
            setAddBtnDisabled(true);
        }
    }, [internalPhotos])


    const handledrop = (event) => {
        event.preventDefault();
        event.stopPropagation();

        divPhotoInputRef.current.classList.remove('active');

        const files = Array.from(event.dataTransfer.files);
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        const updatedPhotos = [...addPhotos, ...imageFiles];
        const updatedInternalPhotos = [...internalPhotos, ...imageFiles];

        setAddPhotos(updatedPhotos);
        setInternalPhotos(updatedInternalPhotos);
    };

    const onDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        divPhotoInputRef.current.classList.add('active');
    }

    const onDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        divPhotoInputRef.current.classList.remove('active');
    }

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    }

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        const updatedPhotos = [...addPhotos, ...imageFiles];
        const updatedInternalPhotos = [...internalPhotos, ...imageFiles];

        setAddPhotos(updatedPhotos);
        setInternalPhotos(updatedInternalPhotos);
    }

    const deletePhoto = (index) => {
        const updatedPhotos = [...addPhotos];
        const updatedInternalPhotos = [...internalPhotos];
        updatedPhotos.splice(index, 1);
        updatedInternalPhotos.splice(index, 1);

        setAddPhotos(updatedPhotos);
        setInternalPhotos(updatedInternalPhotos);
    }

    return(
        <div className= {`modal1`}>
            <div className="modal-box2 d-flex flex-direction-y gap1">
                <div className="circle-btn1 text-l1" onClick={onClose}>
                    <Icon.X/>
                </div>

                {/* Desc */}
                <div className="text-m1 fw-bold text-center">Add listing photos</div>


                <div className={`edit-listing-add-photo-modal-pic-cont ${internalPhotos.length < 1 ? 'd-flex align-items-center' : ''}`}>
                    {internalPhotos.length > 0 && (
                        <div className="photos-preview-cont mar-bottom-1">
                            
                            {internalPhotos.map((photo, index) => (
                                <div 
                                key={index}
                                className="photos-preview-box"
                                >
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
                    ref={divPhotoInputRef}
                    className={`create-listing-add-photo-cont1 mar-bottom-1`}
                    onDragOver={(event) => event.preventDefault()}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={handledrop}
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

                {/* Btns */}
                <div className="d-flex flex-direction-y gap3">
                        
                    <button 
                    onClick={() => {addPhotoHandler(); onClose();}} 
                    disabled={isAddBtnDisabled}
                    className={`primary-btn-black1 text-center ${isAddBtnDisabled ? 'disabled' : ''}`}
                    >
                        Add
                    </button>
                    
                    <div className="secondary-btn-black2 text-center d-flex gap3 align-items-center justify-content-center" onClick={onClose}>
                        Cancel
                    </div>
                </div>             

                
            </div>
        </div>
    );
};

AdminEditPropertyAddPhotoModal1.propTypes = {
    onClose: propTypes.func.isRequired,
    addPhotoHandler: propTypes.func.isRequired
};

export default AdminEditPropertyAddPhotoModal1;