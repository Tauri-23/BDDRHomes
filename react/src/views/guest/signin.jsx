import { useRef } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import axiosClient from '../../axios-client';

const notify = (type, message) => {
    if(type == 'success') {
        toast.success(message, {
            position: "top-center",
            autoClose: 5000,
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
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
}

export default function Signin() {
    const email_uname_phone_ref = useRef();
    const passRef = useRef();

    const loginHandler = (ev) => {
        ev.preventDefault();
        const payload = {
            email_uname_phone: email_uname_phone_ref.current.value,
            pass: passRef.current.value,
        }
    
        axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
        .catch(error => {
            console.log(error);
            const response = error.response;
            if(response && response.status === 422) {
                console.log(response.data.errors);
            }
        });
    }

    return (
        <div className="signinup-cont">
            <div className="sign-in-box">
                <div className="text-center text-l1 fw-bold mar-bottom-1">Login</div>

                {/* Email Input */}
                <div className="d-flex mar-bottom-3">
                    <label htmlFor="uname-email-phone-in"></label>
                    <input ref={email_uname_phone_ref} type="text" id="uname-email-phone-in" name="uname-email-phone-in" className="edit-text-1 w-100" placeholder="Username, Email or Phone." />
                </div>

                {/* Password Input */}
                <div className="d-flex mar-bottom-3">
                    <label htmlFor="pass-in"></label>
                    <div className="d-flex position-relative align-items-center w-100">
                        <input ref={passRef} type="text" id="pass-in" name="pass-in" className="edit-text-1 w-100" placeholder="Password" />
                        <Icon.EyeFill className='position-absolute right3'/>
                    </div>
                    
                </div>

                {/* Remember me and Forgot Password */}
                <div className="d-flex justify-content-between text-m3 mar-bottom-1">
                    <div className="d-flex align-items-center gap4">
                        <input type="checkbox" name="remember-me-chkbx" id="remember-me-chkbx" />
                        <label htmlFor="remember-me-chkbx" className="cursor-pointer">Remember me</label>                        
                    </div>

                    <div className="cursor-pointer">Forgot Password</div>
                </div>

                {/* Action Buttons */}
                <div onClick={loginHandler} className="primary-btn-blue1 text-center mar-bottom-3">Login</div>
                <Link to='/signup' className='text-decoration-none'><div className="secondary-btn-blue1 text-center color-blue1">Create account</div></Link>
                
            </div>
        </div>
    )
};