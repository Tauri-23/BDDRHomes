import React, { useImperativeHandle, useRef } from "react";
import { usePasswordToggle } from "../assets/js/utils"
import * as Icon from 'react-bootstrap-icons';

const PasswordInput = ({id, label ,innerRef}) => {
    const {visible, togglePasswordVisibility} = usePasswordToggle();
    const inputRef = useRef(innerRef);

    const inputType = visible ? 'text' : 'password';
    const iconComponent = visible ? <Icon.EyeSlashFill/> : <Icon.EyeFill/>;

    return (
        <div className="d-flex flex-direction-y gap4 w-100">
            <label htmlFor={id}>{label}</label>
            <div className="d-flex position-relative align-items-center w-100">
                <input ref={inputRef} type={inputType} id={id} name={id} className="edit-text-1 w-100" />
                <div className="position-absolute right3 seePassIcon" onClick={togglePasswordVisibility}>
                    {iconComponent}
                </div>
            </div>
        </div>
    );
};

export default PasswordInput;