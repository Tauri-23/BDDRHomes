import { Link, useOutletContext } from 'react-router-dom';
import '/src/assets/css/agent-listings.css';
import * as Icon from 'react-bootstrap-icons';
import { useModal } from '../../../contexts/ModalContext';
import { useEffect, useState } from 'react';
import { fetchAgentPublishedProperties } from '../../../Services/AgentListingService';
import { useStateContext } from '../../../contexts/ContextProvider';
import { SkeletonListingBox } from '../../../Skeletons/agent-listing-skeletons';
import { AgentListingBox1 } from '../../../components/AgentComponents/agent_listing_box1';
import axiosClient from '../../../axios-client';
import { notify } from '../../../assets/js/utils';
import { SkeletonPropertyBox } from '../../../Skeletons/property_skeletons';

export default function AgentListing() {

    const {showModal} = useModal();
    const [propertyListings, setPropertyListings] = useState(null);
    const {user} = useStateContext();
    
    useEffect(() => {
        const getListedProperties = async () => {
            try {
                const data = await fetchAgentPublishedProperties(user.id);
                setPropertyListings(data);
            } catch (error) {
                console.error(error);
            }
        };

        getListedProperties();        
    }, []);



    /*
    |   Debugging
    */
    useEffect(() => {
        console.log(propertyListings);
    }, [propertyListings]);

    

    const handleRemovePropertyPost = (propId) => {
        const formData = new FormData();
        formData.append('propId', propId);            

        axiosClient.post('/delete-property-permanently', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setListing(prevListings => {
                    return prevListings.filter(prevListing => prevListing.id !== propId);
                })
                notify('default', data.message, 'bottom-left', 3000);
            } else {
                notify('default', data.message, 'bottom-left', 3000);
            }
        }).catch(error => {console.error(error)});
    }

    const handleRemovePropertyConfirmation = (listing) => {
        showModal('AgentDelListingConfirmationModal1', {listing, handleRemovePropertyPost});
    }

    const handleListingClick = (listing) => {
        showModal('AgentListingOptionModal1', { listing, handleRemovePropertyConfirmation});
    };
    
    return (
        <div className="content1">
            {/* upper part */}
            <div className={`d-flex justify-content-between mar-bottom-l1 ${propertyListings?.length > 0 ? '' : 'd-none'}`}>
                <div className="text-l1 fw-bold">Properties Listed</div>
    
                <div className="d-flex align-items-center gap3">
                    <div className="circle-btn-1">
                        <Icon.Search className='text-m1'/>
                    </div>
                    <Link to={'/BDDRAgent/CreateListing'} className='color-black1'>
                        <div className="circle-btn-1">
                            <Icon.PlusLg className='text-m1'/>
                        </div>
                    </Link>
                    
                </div>                
            </div>
    
            {/* Listings */}
            <div className="d-flex flex-wrap gap1">
                {propertyListings && (
                    propertyListings.map(property => (
                    <AgentListingBox1 key={property.id} property={property.property} handleListingClick={handleListingClick} />
                )))}

                {!propertyListings && Array.from({length:10}, (_, index) => index).map(x =>(
                    <SkeletonPropertyBox key={x}/>
                ))}                
            </div>

            {propertyListings?.length < 1 && (
                <div className="d-flex flex-direction-y gap3 align-items-start w-100">
                    <div className="text-l1 fw-bold">Properties Listed</div>
                    <div className="hr-line1 mar-y-2"></div>
                    <div className="text-l3">There are no property listed yet.</div>
                    <Link to={'/BDDRAgent/CreateListing'} className="secondary-btn-black1 color-black1">Add Property Listing</Link>
                </div>
            )}
            
        </div>        
    )
    
};