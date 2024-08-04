import * as Icon from 'react-bootstrap-icons';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ViewPropertyShowAllPhotosModal2 = ({photos, onClose }) => {

    return(
        <div className= {`modal2 content2`}>
            <div className="d-flex justify-content-start mar-bottom-1">
                <div onClick={() => onClose()} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                    <Icon.ChevronLeft/>
                    Back
                </div>                
            </div>

            <div className="img-grid-row">
                <div className="img-grid-column cursor-pointer">
                    {photos.map(photo => (
                        <img src={`/src/assets/media/properties/${photo.filename}`} alt={photo.filename} />          
                    ))}
                </div>  
            </div>          
        </div>
    );
};

ViewPropertyShowAllPhotosModal2.propTypes = {
    onClose: propTypes.func.isRequired,
};