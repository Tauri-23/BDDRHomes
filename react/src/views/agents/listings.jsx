import { useOutletContext } from 'react-router-dom';
import '/src/assets/css/agent-listings.css';
import * as Icon from 'react-bootstrap-icons';

export default function AgentListing() {

    const {setListingOptionModalVisibility} = useOutletContext();

    const showListingOptionModal = () => {
        setListingOptionModalVisibility(true)
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
                    <div className="circle-btn-1">
                        <Icon.PlusLg className='text-m1'/>
                    </div>
                </div>                
            </div>

            {/* Listings */}
            <div className="agent-listing-box" onClick={showListingOptionModal}>
                <div className="agent-listing-pic">
                    <img src="" alt="" />
                </div>
                <div className="agent-listing-desc">
                    <div className="text-m2 fw-bold">Anyana Paris</div>
                    <div className="agent-listing-address text-m3">Antero Soriano Highway in Tanza, Cavite, 4108asdas dasdasdasd asdasd</div>
                </div>
            </div>
        </div>        
    )
};