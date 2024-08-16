import React, { useImperativeHandle, useRef, forwardRef } from "react";
import { usePasswordToggle } from "../assets/js/utils";
import * as Icon from 'react-bootstrap-icons';

const PasswordInput = forwardRef(({ id, label, placeholder }, ref) => {
    const { visible, togglePasswordVisibility } = usePasswordToggle();
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        get value() {
            return inputRef.current.value;
        }
    }));

    const inputType = visible ? 'text' : 'password';
    const iconComponent = visible ? <Icon.EyeSlashFill /> : <Icon.EyeFill />;

    return (
        <div className="d-flex flex-direction-y gap4 w-100">
            {label && (
                <label htmlFor={id}>{label}</label>
            )}
            
            <div className="d-flex position-relative align-items-center w-100">
                <input ref={inputRef} type={inputType} id={id} name={id} className="edit-text-1 w-100" placeholder={`${placeholder || ''}`}/>
                <div className="position-absolute right3 seePassIcon" onClick={togglePasswordVisibility}>
                    {iconComponent}
                </div>
            </div>
        </div>
    );
});

export default PasswordInput;
