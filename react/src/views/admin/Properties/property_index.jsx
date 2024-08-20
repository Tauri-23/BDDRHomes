import { Link, useOutletContext } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { fetchPublishedProperties } from "../../../Services/GeneralPropertiesService";
import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/ModalContext";
import { AdminPropertyBox1 } from "../../../components/AdminComponents/admin_property_box1";
import { SkeletonPropertyBox } from "../../../Skeletons/property_skeletons";

export default function AdminPropertyIndex() {
    const {showModal} = useModal();
    const {isSidenavOpen} = useOutletContext();
    const [properties, setProperties] = useState(null);



    useEffect(() => {
        const getPublishedProperties = async () => {
            try {
                const data = await fetchPublishedProperties();
                setProperties(data);
            } catch (error) {
                console.error(error);
            }
        };

        getPublishedProperties();        
    }, []);



    const handleRemovePropertyConfirmation = (listing) => {
        showModal('AgentDelListingConfirmationModal1', {listing, handleRemovePropertyPost});
    }

    const handleListingClick = (property) => {
        showModal('AdminPropertiesOptionModal1', { property, handleRemovePropertyConfirmation});
    };


    
    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {/* Option Bar */}
            <div className="admin-agent-nav mar-bottom-l1">
                <div className="text-l1 fw-bold">Properties</div>

                <div className="d-flex align-items-center gap3">
                    <div className="circle-btn-1">
                        <Icon.Search className='text-m1'/>
                    </div>
                    
                    <Link to={'AddProperty'} className='color-black1'>
                        <div className="circle-btn-1">
                            <Icon.PlusLg className='text-m1'/>
                        </div>
                    </Link>
                    
                </div>  
            </div>

            {/* Listings */}
            <div className="d-flex flex-wrap gap1">
                {properties && (
                    properties.map(property => (
                    <AdminPropertyBox1 key={property.id} property={property} handleListingClick={handleListingClick} />
                )))}

                {!properties && Array.from({length:10}, (_, index) => index).map(x =>(
                    <SkeletonPropertyBox key={x}/>
                ))}
            </div>
        </div>
    );
}