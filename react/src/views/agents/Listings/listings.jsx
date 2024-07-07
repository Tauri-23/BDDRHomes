import { Link, useOutletContext } from 'react-router-dom';
import '/src/assets/css/agent-listings.css';
import * as Icon from 'react-bootstrap-icons';
import { useModal } from '../../../contexts/ModalContext';

export default function AgentListing() {

    const {showModal} = useModal();

    const listings = [
        {
            id: 1,
            image: 'anyana-paris-test.jpeg',
            title: 'Anyana Paris',
            address: 'Antero Soriano Highway in Tanza, Cavite, 4108'
        },
        {
            id: 2,
            image: 'anyana-paris-test.jpeg',
            title: 'Anyana Tokyo',
            address: 'Antero Soriano Highway in Tanza, Cavite, 4108'
        },
    ];

    const handleListingClick = (listing) => {
        showModal('AgentListingOptionModal1', { listing });
    };

    

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
                {listings.map(listing => (
                    <div key={listing.id} className="agent-listing-box" onClick={() => handleListingClick(listing)}>
                        <div className="agent-listing-pic">
                            <img src={`/src/assets/media/properties/${listing.image}`} alt={listing.title} />
                        </div>
                        <div className="agent-listing-desc">
                            <div className="text-m2 fw-bold">{listing.title}</div>
                            <div className="agent-listing-address text-m3">{listing.address}</div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>        
    )
};