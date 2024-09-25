import { useEffect, useRef, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AdminViewProjectNavbar = ({title}) => {
    const [displayAddBox, setDisplayAddBox] = useState(false);

    const addPopupBoxRef = useRef(null);

    const toggleAddPopupBox = (event) => {
        event.stopPropagation();
        setDisplayAddBox(!displayAddBox);
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        // cleanup
        return () => {
            window.removeEventListener('click', handleClickOutside);
        }
    }, []);

    const handleClickOutside = (event) => {
        if(addPopupBoxRef.current &&  !addPopupBoxRef.current.contains(event.target)) {
            setDisplayAddBox(false);
        }
    }
    
    return(
        <div className="mar-bottom-l1 d-flex flex-direction-y gap2 position-relative">
            <div className="admin-properties-developers-nav">
                <div className="text-l1 fw-bold">{title}</div>
                <div className="d-flex align-items-center gap3">
                    <div className="circle-btn-1">
                        <Icon.Search className='text-m1'/>
                    </div>
                    
                    <div className='color-black1' onClick={toggleAddPopupBox}>
                        <div className="circle-btn-1">
                            <Icon.PlusLg className='text-m1'/>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={addPopupBoxRef} className={`add-properties-developers-popupbox1 ${displayAddBox ? '' : 'd-none'}`}>
                <Link onClick={toggleAddPopupBox} to={'/BDDRAdmin/Properties&Developers/AddProperty'} className="nav-modal1-link">Add Property</Link>
            </div>
        </div>
    );
}

export default AdminViewProjectNavbar;