import { useOutletContext } from "react-router-dom";

export default function AdminAddPropertyIndex() {
    const {isSidenavOpen} = useOutletContext();
    
    return(
        <div className="d-flex justify-content-center">
            <div className="create-listing-cont d-flex flex-direction-y gap2">
                <div className="text-m1 fw-bold">Step 1</div>
                <div className="text-xl2 fw-bold">Tell us about the property</div>
                <div className="text-l3">Tell us about the name of the property, address, and what type it is.</div>
            </div>
            
        </div>
    );
}