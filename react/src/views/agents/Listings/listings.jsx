import { Link, useOutletContext } from 'react-router-dom';
import '/src/assets/css/agent-listings.css';
import * as Icon from 'react-bootstrap-icons';
import { useModal } from '../../../contexts/ModalContext';
import { useEffect, useState } from 'react';
import { fetchAgentPublishedProperties } from '../../../Services/AgentListingService';
import { useStateContext } from '../../../contexts/ContextProvider';

export default function AgentListing() {

    const {showModal} = useModal();
    const [listings, setListing] = useState([]);
    const {user} = useStateContext();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        console.log(user.user.id);
        const getListedProperties = async () => {
            try {
                const data = await fetchAgentPublishedProperties(user.user.id);
                setListing(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        getListedProperties();        
    }, []);

    const handleListingClick = (listing) => {
        showModal('AgentListingOptionModal1', { listing });
    };


    useEffect(() => {
        console.log(listings);
    }, [listings]);
    
    if(!loading){
        return (
            <div className="content1">
                {/* upper part */}
                <div className="d-flex justify-content-between mar-bottom-l1">
                    <div className="text-l1 fw-bold">Listings</div>
    
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
                    {listings.data.map(listing => (
                        <div key={listing.id} className="agent-listing-box" onClick={() => handleListingClick(listing)}>
                            <div className="agent-listing-pic">
                                <img src={`/src/assets/media/properties/${listing.photos[1].filename}`} alt={listing.title} />
                            </div>
                            <div className="agent-listing-desc">
                                <div className="text-m2 fw-bold">{listing.name}</div>
                                <div className="agent-listing-address text-m3">{listing.address}</div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>        
        )
    }
    
};