import { useState } from "react";
import { isEmail, isEmptyOrSpaces } from "../../assets/js/utils";
import * as Icon from "react-bootstrap-icons";

const EditEmail1 = ({width, label, type, value, setFieldValue, required}) => {
    const [invalid, setInvalid] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleOnBlur = (e) => {
        if(required && isEmptyOrSpaces(e.target.value)) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }

        if(!isEmail(e.target.value) && !isEmptyOrSpaces(e.target.value)) {
            setInvalidEmail(true);
        } else {
            setInvalidEmail(false);
        }
    }

    return(
        <div className={`custom-edit-text-1  ${width}`}>
            <div className={`custom-edit-text-1-label ${invalid || invalidEmail ? 'invalid' : ''}`}>{label} {!required && (<span>optional</span>)}</div>
            <input 
                type={"text"} 
                className={`custom-edit-text-1-input ${invalid || invalidEmail ? 'invalid' : ''}`} 
                onInput={(e) => {setFieldValue(e.target.value); setInvalid(false)}}
                onBlur={handleOnBlur} 
                value={value} />

            <div className={`custom-edit-text-1-error ${invalid ? '' : 'd-none'}`}>
                <Icon.ExclamationCircleFill/>
                <div>{label} is required</div>
            </div>

            <div className={`custom-edit-text-1-error ${invalidEmail ? '' : 'd-none'}`}>
                <Icon.ExclamationCircleFill/>
                <div>invalid {label} format</div>
            </div>
        </div>
    )
}

export default EditEmail1;