import { useState } from "react";
import { isEmptyOrSpaces } from "../../assets/js/utils";
import * as Icon from "react-bootstrap-icons";

const EditText1 = ({width, label, type, value, setFieldValue, required}) => {
    const [invalid, setInvalid] = useState(false);

    const handleOnBlur = (e) => {
        if(required && isEmptyOrSpaces(e.target.value)) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }
    }

    return(
        <div className={`custom-edit-text-1  ${width}`}>
            <div className={`custom-edit-text-1-label ${invalid ? 'invalid' : ''}`}>{label}</div>
            <input 
                type={type} 
                className={`custom-edit-text-1-input ${invalid ? 'invalid' : ''}`} 
                onInput={(e) => {setFieldValue(e.target.value); setInvalid(false)}}
                onBlur={handleOnBlur} 
                value={value} />

            <div className={`custom-edit-text-1-error ${invalid ? '' : 'd-none'}`}>
                <Icon.ExclamationCircleFill/>
                <div>{label} is required</div>
            </div>
        </div>
    )
}

export default EditText1;