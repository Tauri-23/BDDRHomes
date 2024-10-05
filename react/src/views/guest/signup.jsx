import { useEffect, useRef, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import {isEmptyOrSpaces, isEmail, formatPhoneNumber, usePasswordToggle, notify} from '../../assets/js/utils';
import {ToastContainer} from 'react-toastify';
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';
import PasswordInput from '../../components/password-input';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-cofig';
import EditText1 from '../../components/FormComponents/edit_text_1';
import EditPassword1 from '../../components/FormComponents/edit_password_1';
import { fetchAllProvinces } from '../../Services/ProvinceService';
import { number } from 'prop-types';
import EditPhone1 from '../../components/FormComponents/edit_phone_1';
import EditEmail1 from '../../components/FormComponents/edit_email_1';


export default function Signup() {
    const {setUser, setToken, setUserType} = useStateContext();

    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");

    const [gender, setGender] = useState("Male");
    const [bdate, setBdate] = useState("");
    const [phone, setPhone] = useState("");

    const [uname, setUname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPass, setConPass] = useState("");

    const [provinces, setProvinces] = useState(null);

    const [preferedLoc, setPreferedLoc] = useState([]);
    
    const genderRef = useRef();
    const bdateRef = useRef();
    const phoneRef = useRef();

    useEffect(() => {
        const getAllProvinces = async() => {
            try {
                const data = await fetchAllProvinces();
                setProvinces(data);
            } catch (error) {
                console.error(error);
            }
        }

        getAllProvinces();
    }, []);


    const signupHandler = (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        formData.append('fname', fname);
        formData.append('mname', mname);
        formData.append('lname', lname);
        formData.append('gender', gender);
        formData.append('bdate', bdate);
        formData.append('phone', phone);
        formData.append('uname', uname);
        formData.append('email', email);
        formData.append('pass', password);
        preferedLoc.forEach((loc, index) => {
            formData.append(`prefLoc[${index}]`, parseInt(loc.id));
        });

        // console.log(fname);
        // console.log(mname);
        // console.log(lname);
        // console.log(gender);
        // console.log(bdate);
        // console.log(phone);
        // console.log(uname);
        // console.log(email);
        // console.log(password);
        // console.log(preferedLoc);

        if (isEmptyOrSpaces(fname) || isEmptyOrSpaces(lname) ||
            isEmptyOrSpaces(bdate) || isEmptyOrSpaces(phone) ||
            isEmptyOrSpaces(uname) || isEmptyOrSpaces(email) ||
            isEmptyOrSpaces(password) || isEmptyOrSpaces(conPass) || preferedLoc.length < 1) {

            notify('error', 'Please fill-up the required fields.', 'top-center', 3000);
            return;
        }

        if (!isEmail(email)) {
            notify('error', 'Invalid email format.', 'top-center', 3000);
            return;
        }

        if (password !== conPass) {
            notify('error', 'Passwords do not match.', 'top-center', 3000);
            return;
        }
    
        axiosClient.post('/signup', formData)
        .then(({data}) => {
            createUserWithEmailAndPassword(auth, data.user.email, data.user.password);
            setUser(data.user);
            setToken(data.token);
            setUserType(data.user_type);
            if(data.status === 200) {
                notify('success', data.message, 'top-center', 3000);
            }
            else {
                notify('error', data.message, 'top-center', 3000);
            }
        })
        .catch(error => {
            console.error(error)
        });
        
    }

    const handlePhoneInputChange = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        event.target.value = formattedPhoneNumber; // Update the input field directly
        setPhone(formattedPhoneNumber);
    };

    const addRemovePrefLoc = (loc) => {
        setPreferedLoc(prev =>
            prev.some(prefLoc => prefLoc.id == loc.id)
                ? prev.filter(prefLoc => prefLoc.id !== loc.id)
                : [...prev, loc]
        );        
    }


    return (
        <div className="signinup-cont">
            <div className="sign-up-box">
                <div className="text-center text-l1 fw-bold mar-bottom-1">Sign up to BDDR Homes</div>


                {/* PERSONAL INFOS */}
                <div className="text-l3 mar-bottom-2">Personal Information</div>

                <div className="d-flex mar-bottom-3 gap3">
                    <EditText1
                        width={"w-100"}
                        label={"First name"} 
                        type={"text"} 
                        value={fname} 
                        setFieldValue={setFname}
                        required={true}/>

                    <EditText1
                        width={"w-100"}
                        label={"Middle name"} 
                        type={"text"} 
                        value={mname} 
                        setFieldValue={setMname}
                        required={false}/>

                    <EditText1
                        width={"w-100"}
                        label={"Last name"} 
                        type={"text"} 
                        value={lname} 
                        setFieldValue={setLname}
                        required={true}/>
                </div>

                <div className="d-flex gap3">
                    <div className="d-flex mar-bottom-3 flex-direction-y gap4 w-100">
                        <label htmlFor="gender-in">Gender</label>
                        <select 
                        type="text" 
                        id="gender-in" 
                        name="gender-in" 
                        className="edit-text-1 w-100" 
                        onChange={(e) => setGender(e.target.value)} value={gender}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    
                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="bdate-in">Birth Date</label>
                        <input 
                        type="date" 
                        id="bdate-in" 
                        name="bdate-in" 
                        className="edit-text-1 w-100" 
                        placeholder="Birth Date" 
                        onChange={(e) => setBdate(e.target.value)}/>
                    </div>
                </div>

                <div className="d-flex flex-direction-y gap4">
                    <EditPhone1
                        width={"w-100"}
                        label={"Phone number"} 
                        value={phone} 
                        setFieldValue={setPhone}
                        required={true}/>
                </div>



                {/* CREDENTIALS */}
                <div className="text-l3 mar-bottom-2 mar-top-1">Credentials</div>

                <div className="d-flex gap3 mar-bottom-3">
                    <EditText1
                        width={"w-100"}
                        label={"Username"} 
                        type={"text"} 
                        value={uname} 
                        setFieldValue={setUname}
                        required={true}/>

                    <EditEmail1
                        width={"w-100"}
                        label={"Email"} 
                        type={"text"} 
                        value={email} 
                        setFieldValue={setEmail}
                        required={true}/>
                </div>
                
                <div className="d-flex gap3 w-100">

                    <EditPassword1
                        width={"w-100"} 
                        label={"Password"} 
                        value={password} 
                        setFieldValue={setPassword} 
                        required={true}/>

                    <EditPassword1
                        width={"w-100"} 
                        label={"Confirm password"} 
                        value={conPass} 
                        setFieldValue={setConPass} 
                        required={true}/>
                </div>



                {/* Prefered Location */}
                <div className="text-l3 mar-bottom-2 mar-top-1">Prefered Location</div>

                <div className="d-flex flex-wrap gap3 mar-bottom-l1">
                    {provinces?.length > 0 && provinces.map(loc => (
                        <div 
                        key={loc.id} 
                        onClick={() => addRemovePrefLoc(loc)}
                        className={`prefered-loc-chip ${preferedLoc.some(prefLoc => prefLoc.id == loc.id) ? "active" : ""}`}
                        >
                            {loc.province}
                        </div>
                    ))}
                </div>
                
                


                {/* Action Buttons */}
                <div className="primary-btn-blue1 text-center" onClick={signupHandler}>Create Account</div>
                <div className="text-m2 text-center mar-top-3"><Link to='/signin' className='text-decoration-none color-black2'>Already have an account?</Link></div>

                
            </div>
            <ToastContainer />
        </div>
        
    )
};