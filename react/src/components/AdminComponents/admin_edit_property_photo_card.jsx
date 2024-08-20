import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import * as Icon from 'react-bootstrap-icons';

export const AdminEditPropertyPhotoCard = ({ id, photo, isEditPhotos, handleRemovePhoto }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = !isEditPhotos
        ? useSortable({ id })
        : { attributes: {}, listeners: {}, setNodeRef: (node) => node, transform: {}, transition: {} };
    
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    };
    
    const handleClick = (event) => {
        handleRemovePhoto();
    }

    return (
        <div
            className="edit-property-photo"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >
            <img
                draggable={false}
                src={`/src/assets/media/properties/${photo.filename}`}
                alt="Photo"
            />
            {isEditPhotos && (
                <div
                    onClick={(event) => {handleClick(event)}}
                    className="secondary-circular-btn-black1 top3 right3 position-absolute"
                    style={{ pointerEvents: 'auto', zIndex: 10 }}
                >
                    <Icon.XLg />
                </div>
            )}
        </div>
    );
};
