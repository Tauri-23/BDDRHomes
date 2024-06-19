import * as Icon from 'react-bootstrap-icons';

export default function Signin() {
    return (
        <div className="signinup-cont">
            <div className="sign-in-box">
                <div className="text-center text-l1 fw-bold mar-bottom-1">Login</div>

                {/* Email Input */}
                <div className="d-flex mar-bottom-3">
                    <label htmlFor="uname-email-phone-in"></label>
                    <input type="text" id="uname-email-phone-in" name="uname-email-phone-in" className="edit-text-1 w-100" placeholder="Username, Email or Phone." />
                </div>

                {/* Password Input */}
                <div className="d-flex mar-bottom-3">
                    <label htmlFor="pass-in"></label>
                    <div className="d-flex position-relative align-items-center w-100">
                        <input type="text" id="pass-in" name="pass-in" className="edit-text-1 w-100" placeholder="Password" />
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
                <div className="primary-btn-blue1 text-center mar-bottom-3">Login</div>
                <div className="secondary-btn-blue1 text-center color-blue1">Create account</div>
            </div>
        </div>
    )
};