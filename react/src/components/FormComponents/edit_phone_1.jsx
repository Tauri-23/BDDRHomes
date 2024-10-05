import { useState } from "react";
import { formatPhoneNumber, isEmptyOrSpaces } from "../../assets/js/utils";
import * as Icon from "react-bootstrap-icons";

const EditPhone1 = ({width, label, type, value, setFieldValue, required}) => {
    const [invalid, setInvalid] = useState(false);
    const [invalidLength, setInvalidLength] = useState(false);

    const handleOnBlur = (e) => {
        if(required && isEmptyOrSpaces(e.target.value)) {
            setInvalid(true);
        } else {
            setInvalid(false);
        }

        if(e.target.value.length !== 12 && !isEmptyOrSpaces(e.target.value)) {
            setInvalidLength(true);
        } else {
            setInvalidLength(false);
        }
    }

    const handlePhoneInputChange = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        event.target.value = formattedPhoneNumber; // Update the input field directly
        setFieldValue(formattedPhoneNumber);
    };

    return(
        <div className={`custom-edit-text-1  ${width}`}>
            <div className={`custom-edit-text-1-label ${invalid || invalidLength ? 'invalid' : ''}`}>{label} {!required && (<span>optional</span>)}</div>
            <input 
                type={"text"} 
                className={`custom-edit-text-1-input ${invalid || invalidLength ? 'invalid' : ''}`} 
                onInput={(e) => {handlePhoneInputChange(e); setInvalid(false); setInvalidLength(false)}}
                onBlur={handleOnBlur} 
                maxLength={10}
                value={value} />

            <div className={`custom-edit-text-1-error ${invalid ? '' : 'd-none'}`}>
                <Icon.ExclamationCircleFill/>
                <div>{label} is required</div>
            </div>

            <div className={`custom-edit-text-1-error ${invalidLength ? '' : 'd-none'}`}>
                <Icon.ExclamationCircleFill/>
                <div>{label} is invalid</div>
            </div>
        </div>
    )
}

export default EditPhone1;