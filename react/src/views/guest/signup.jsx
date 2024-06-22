import { useRef } from 'react';
import * as Icon from 'react-bootstrap-icons';
import {isEmptyOrSpaces, isEmail} from '../../assets/js/utils';
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';

const notify = (type, message, ms) => {
    if(type == 'success') {
        toast.success(message, {
            position: "top-center",
            autoClose: ms,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    else if(type === 'error') {
        toast.error(message, {
            position: "top-center",
            autoClose: ms,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}


export default function Signup() {
    const fnameRef = useRef();
    const mnameRef = useRef();
    const lnameRef = useRef();
    const genderRef = useRef();
    const bdateRef = useRef();
    const phoneRef = useRef();

    const unameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const conpassRef = useRef();

    const {setUser, setToken} = useStateContext();

    // const formatPhoneNum = (event) => {
    //     phoneNum.on('input', function () {
    //         let rawPhoneNumber = $(this).val().replace(/\D/g, '');
    
    //         rawPhoneNumber = rawPhoneNumber.replace(/^0+/, '');
    
    //         if (rawPhoneNumber.length <= 10) {
    //             let formattedPhoneNumber = rawPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
    
    //             $(this).val(formattedPhoneNumber);
    //         }
    //     });
    // };

    const signupHandler = (ev) => {
        ev.preventDefault();
        const payload = {
            fname: fnameRef.current.value,
            mname: mnameRef.current.value,
            lname: lnameRef.current.value,
            gender: genderRef.current.value,
            bdate: bdateRef.current.value,
            phone: phoneRef.current.value,
            uname: unameRef.current.value,
            email: emailRef.current.value,
            pass: passRef.current.value,
            conpass: conpassRef.current.value,
        }

        if (isEmptyOrSpaces(payload.fname) || isEmptyOrSpaces(payload.lname) ||
            isEmptyOrSpaces(payload.bdate) || isEmptyOrSpaces(payload.phone) ||
            isEmptyOrSpaces(payload.uname) || isEmptyOrSpaces(payload.email) ||
            isEmptyOrSpaces(payload.pass) || isEmptyOrSpaces(payload.conpass)) {

            notify('error', 'Please fill-up the required fields.', 3000);
            return;
        }

        if (!isEmail(payload.email)) {
            notify('error', 'Invalid email format.', 3000);
            return;
        }

        if (payload.pass !== payload.conpass) {
            notify('error', 'Passwords do not match.', 3000);
            return;
        }
    
        axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
        .catch(error => {
            const response = error.response;
            if(response && response.status === 422) {
                console.log(response.data.errors);
            }
        });
        
    }


    return (
        <div className="signinup-cont">
            <div className="sign-up-box">
                <div className="text-center text-l1 fw-bold mar-bottom-1">Sign up to BDDR Homes</div>


                {/* PERSONAL INFOS */}
                <div className="text-l3 mar-bottom-2">Personal Information</div>

                <div className="d-flex mar-bottom-3 gap3">
                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="fname-in">First name</label>
                        <input ref={fnameRef} type="text" id="fname-in" name="fname-in" className="edit-text-1 w-100" placeholder="e.g. Juan" />
                    </div>

                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="mname-in">Middle name <sup className='mar-start-4 fst-italic'>Optional</sup></label>
                        <input ref={mnameRef} type="text" id="mname-in" name="mname-in" className="edit-text-1 w-100" placeholder="e.g. Santos" />
                    </div>

                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="lname-in">Last name</label>
                        <input ref={lnameRef} type="text" id="lname-in" name="lname-in" className="edit-text-1 w-100" placeholder="e.g. Dela Cruz" />
                    </div>

                </div>

                <div className="d-flex gap3">
                    <div className="d-flex mar-bottom-3 flex-direction-y gap4 w-100">
                        <label htmlFor="gender-in">Gender</label>
                        <select ref={genderRef} type="text" id="gender-in" name="gender-in" className="edit-text-1 w-100">
                            <option value="Male">Male</option>
                            <option value="Male">Female</option>
                        </select>
                    </div>
                    
                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="bdate-in">Birth Date</label>
                        <input ref={bdateRef} type="date" id="bdate-in" name="bdate-in" className="edit-text-1 w-100" placeholder="Birth Date" />
                    </div>
                </div>

                <div className="d-flex flex-direction-y gap4">
                    <label htmlFor="phone-in">Phone Number</label>
                    <input ref={phoneRef} type="text" id="phone-in" name="phone-in" className="edit-text-1 w-100" placeholder="9XX XXX XXXX" maxLength={10} />
                </div>



                {/* CREDENTIALS */}
                <div className="text-l3 mar-bottom-2 mar-top-1 mar-bottom-2">Credentials</div>

                <div className="d-flex gap3 mar-bottom-3">
                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="uname-in">Username</label>
                        <input ref={unameRef} type="text" id="uname-in" name="uname-in" className="edit-text-1 w-100" placeholder="e.g. juan123" />
                    </div>

                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="email-in">Email</label>
                        <input ref={emailRef} type="text" id="email-in" name="email-in" className="edit-text-1 w-100" placeholder="Email" />
                    </div>
                </div>
                
                <div className="d-flex gap3 w-100 mar-bottom-l1">
                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="pass-in">Password</label>
                        <div className="d-flex position-relative align-items-center w-100">
                            <input ref={passRef} type="password" id="pass-in" name="pass-in" className="edit-text-1 w-100" />
                            <Icon.EyeFill className='position-absolute right3'/>
                        </div>
                    </div>

                    <div className="d-flex flex-direction-y gap4 w-100">
                        <label htmlFor="con-pass-in">Confirm Password</label>
                        <div className="d-flex position-relative align-items-center w-100">
                            <input ref={conpassRef} type="password" id="con-pass-in" name="con-pass-in" className="edit-text-1 w-100" />
                            <Icon.EyeFill className='position-absolute right3'/>
                        </div>
                    </div>
                </div>


                {/* Action Buttons */}
                <div className="primary-btn-blue1 text-center" onClick={signupHandler}>Create Account</div>
                <div className="text-m2 text-center mar-top-3"><Link to='/signin' className='text-decoration-none color-black2'>Already have an account?</Link></div>

                
            </div>
            <ToastContainer />
        </div>
        
    )
};