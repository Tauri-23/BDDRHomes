import * as Icon from "react-bootstrap-icons";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useEffect, useState } from "react";
import { useModal } from "../../../contexts/ModalContext";
import axiosClient from "../../../axios-client";
import { notify } from "../../../assets/js/utils";
import { ToastContainer } from "react-toastify";
import EditText1 from "../../../components/FormComponents/edit_text_1";
import ClientEditProfileInfo1 from "../../../components/ClientComponents/client_edit_profile_info1";
import { fetchAllClientPreferedLoc } from "../../../Services/ClientPreferedLocService";
import { Link } from "react-router-dom";

export default function ClientEditProfile() {
    const {user, setUser} = useStateContext();
    const {showModal} = useModal();
    const [newPfp, setNewPfp] = useState(null);

    const [preferedLoc, setPreferedLoc] = useState(null);

    const [isEditName, setEditName] = useState(false);
    const [isEditEmail, setEditEmail] = useState(false);
    const [isEditPhone, setEditPhone] = useState(false);

    const [newFname, setNewFname] = useState(user.firstname);
    const [newMname, setNewMname] = useState(user.middlename);
    const [newLname, setNewLname] = useState(user.lastname);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newPhone, setNewPhone] = useState(user.phone);

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

    useEffect(() => {
        const getPreferedLocation = async() => {
            try {
                const data = await fetchAllClientPreferedLoc(user.id);
                setPreferedLoc(data);
            } catch(error) {console.error(error)}
        }

        getPreferedLocation();
    }, []);


    /**
    | Debugging
    */
    useEffect(() => {
        console.log(preferedLoc);
    }, [preferedLoc]);

    
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
                <div className="d-flex ">
                    <Link to={'/BDDRClient/Profile'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                        <Icon.ChevronLeft/>
                        Back
                    </Link>
                </div> 

                <div className="client-profile-outer-cont">
                    {/* Left */}
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

                    {/* Right */}
                    <div className="client-profile-right-container">
                        {/* Personal Information */}
                        <div className="text-l1 fw-bold mar-bottom-3 color-black2">Personal Information</div>

                        <ClientEditProfileInfo1
                            oldInfo={user.firstname} oldInfo2={user.middlename} oldInfo3={user.lastname}
                            newInfo={newFname} newInfo2={newMname} newInfo3={newLname} 
                            setNewInfo={setNewFname} setNewInfo2={setNewMname} setNewInfo3={setNewLname}
                        
                            isEditInfo={isEditName} setEditInfo={setEditName}
                            title={"Name"}
                            label={"Firstname"} label2={"Middlename"} label3={"Lastname"}
                            />

                        <div className="hr-line1 mar-top-2 mar-bottom-2"></div>

                        <ClientEditProfileInfo1
                            oldInfo={user.email}
                            newInfo={newEmail}
                            setNewInfo={setNewEmail}
                        
                            isEditInfo={isEditEmail} setEditInfo={setEditEmail}
                            title={"Email"}
                            label={"Email"}
                            />

                        <div className="hr-line1 mar-top-2 mar-bottom-2"></div>
                        
                        <ClientEditProfileInfo1
                            oldInfo={user.phone}
                            newInfo={newPhone}
                            setNewInfo={setNewPhone}
                        
                            isEditInfo={isEditPhone} setEditInfo={setEditPhone}
                            title={"Phone"}
                            label={"Phone"}
                            />

                        <div className="hr-line1 mar-top-2 mar-bottom-2"></div>

                        <div className="text-l1 fw-bold mar-bottom-3 color-black2 d-flex justify-content-between align-items-center">
                            Prefered Location
                            <div className="text-m2 text-decoration-underline cursor-pointer">Edit</div>
                        </div>

                        <div className="d-flex flex-wrap gap3">
                            {preferedLoc && preferedLoc.map(prefLoc => (
                                <div key={prefLoc.id} className="prefered-loc-chip">{prefLoc.province.province}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}