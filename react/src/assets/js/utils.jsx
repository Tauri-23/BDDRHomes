import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';

/*
|----------------------------------------
| Empty or spaces string checker
|----------------------------------------
*/
/**
 * 
 * @param {string} str
 */
export function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}


/*
|----------------------------------------
| Email Validator 
|----------------------------------------
*/
/**
 * 
 * @param {string} email 
 */
export function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}




/*
|----------------------------------------
| Format Phone number 
|----------------------------------------
*/
export function formatPhoneNumber(inputValue) {
    let rawPhoneNumber = inputValue.replace(/\D/g, '');
    rawPhoneNumber = rawPhoneNumber.replace(/^0+/, '');

    if (rawPhoneNumber.length <= 10) {
        let formattedPhoneNumber = rawPhoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
        return formattedPhoneNumber;
    }

    return inputValue; // If input length is more than 10, return as is
}





/*
|----------------------------------------
| Toast and Modals
|----------------------------------------
*/
/**
@param {string} type
@param {string} message
@param {number} ms
*/
export function notify(type, message, ms) {
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





/*
|----------------------------------------
| See Password Event
|----------------------------------------
*/
export const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setVisible(!visible);
    };

    return { visible, togglePasswordVisibility };
};