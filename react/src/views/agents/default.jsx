import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { AgentNavbar1 } from "../../components/agent_navbar_1";

import '/src/assets/css/agent-listings.css';

export default function AgentDefault() {
    const { user, token, setUser, setToken } = useStateContext();
    const location = useLocation();    

    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser(data);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        setUser({});
                        setToken(null);
                    }
                });
        }
    }, [token, setUser, setToken]);

    const onLogout = (ev) => {
        axiosClient.post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
                setUserType(null);
            });
    };

    // Handle redirection in the component body
    if (!token) {
        return <Navigate to="/" />;
    }




    // Modals
    const [listingOptionModalVisibility, setListingOptionModalVisibility] = useState(false);

    const listingOptionModal = listingOptionModalVisibility ? '' : 'd-none';
    return (
        <div className="w-100 h-100 position-relative">
            {/* Modals */}
            <div className= {`modal1 ${listingOptionModal}`}>
                <div className="modal-box3">
                    <div className="circle-btn1 text-l1">
                        <Icon.X/>
                    </div>

                    {/* Image */}
                    <div className="listing-option-modal-pic">
                        <img src="" alt="" />
                    </div>

                    {/* Desc */}
                    <div className="text-m2 fw-bold text-center">Anyana Paris</div>
                    <div className="text-m3 text-center mar-bottom-1">Anyana Paris</div>

                    {/* Btns */}
                    <div className="d-flex flex-direction-y gap3">
                        <div className="primary-btn-black1 text-center">Edit Listing</div>
                        <div className="secondary-btn-black2 text-center">Remove Listing</div>
                    </div>
                </div>
            </div>



            <AgentNavbar1 onLogout={onLogout}/>

            <Outlet context={{ setListingOptionModalVisibility }}/>
        </div>
    );
}
