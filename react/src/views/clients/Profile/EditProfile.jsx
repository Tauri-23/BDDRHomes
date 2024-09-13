import * as Icon from "react-bootstrap-icons";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/ModalContext";
import axiosClient from "../../../axios-client";
import { notify } from "../../../assets/js/utils";
import { ToastContainer } from "react-toastify";

export default function ClientEditProfile() {
    const {user, setUser} = useStateContext();
    const {showModal} = useModal();
    const [newPfp, setNewPfp] = useState(null);

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    }

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        setNewPfp(...imageFiles);
    }

    const handleChangePfp = () => {
        console.log(newPfp);
        const formData = new FormData();
        formData.append('client_id', user.id);
        formData.append('pfp', newPfp);

        axiosClient.post('/update-client-pfp', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify("default", data.message, "lower-left", 3000);
                setUser(data.client);
            } else {
                notify("error", data.message, "lower-left", 3000);
            }
        });
    }

    
    /*
    | Show Modal
    */
    useEffect(() => {
        if(newPfp !== null && newPfp !== undefined) {
            showModal('ClientEditPfpModal1', {pfp: newPfp, handleChangePfp});
        }
    }, [newPfp]);


    return(
        <>
            <div className="content2">
                <div className="client-profile-outer-cont">
                    <div className="client-profile-left-container">

                        <div className="position-relative d-flex">
                            <div className="client-edit-profile-pfp">
                                {user.pfp
                                ? (<img src={`/src/assets/media/clients/pfp/${user.pfp}`} alt="" />)
                                : (<div>{user.firstname[0]}</div>)}
                            </div>
                            <div className="client-edit-profile-edit-pfp-btn" onClick={handleUploadClick}>
                                <Icon.CameraFill/> Edit
                                <input 
                                    type="file" 
                                    id="fileInput"
                                    className='d-none'
                                    multiple 
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                    </div>
                    <div className="client-profile-right-container bg-info"></div>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}