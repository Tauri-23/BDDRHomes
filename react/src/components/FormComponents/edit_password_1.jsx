import { useState } from "react";
import { isEmptyOrSpaces, usePasswordToggle } from "../../assets/js/utils";
import * as Icon from "react-bootstrap-icons";

const EditPassword1 = ({width, label, value, setFieldValue, required}) => {
    const [invalid, setInvalid] = useState(false);
    const { visible, togglePasswordVisibility } = usePasswordToggle();
    const handleOnBlur = (e) => {
        if(required && isEmptyOrSpaces(e.target.value)) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }
    }

    return(
        <div className={`custom-edit-text-1  ${width}`}>
            <div className={`custom-edit-text-1-label ${invalid ? 'invalid' : ''}`}>{label} {!required && (<span>optional</span>)}</div>
            <input 
                type={visible ? "text" : "password"} 
                className={`custom-edit-text-1-input ${invalid ? 'invalid' : ''}`} 
                onInput={(e) => {setFieldValue(e.target.value); setInvalid(false)}}
                onBlur={handleOnBlur} 
                value={value} />

            <div className={`custom-edit-text-1-error ${invalid ? '' : 'd-none'}`}>
                <Icon.ExclamationCircleFill/>
                <div>{label} is required</div>
            </div>

            <div className="custom-edit-text-1-see-pass" onClick={togglePasswordVisibility}>
                {visible ? <Icon.EyeSlashFill/> : <Icon.EyeFill/>}
            </div>
        </div>
    )
}

export default EditPassword1;