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
export const formatPhoneNumber = (inputValue) => {
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
| Format Date MM dd, YYYY && MM dd, YYYY h:s a
|----------------------------------------
*/
export const formatDate = (date) => {
    const realDate = new Date(date);
    const options = {month: 'short', day: '2-digit', year: 'numeric'}
    return realDate.toLocaleDateString('en-PH', options);
}

export const formatDateTime = (dateTime) => {
    const realDateTime = new Date();

    const timeOptions = {hour: 'numeric', minute: 'numeric', hour12: true};
    const formattedTime = realDateTime.toLocaleTimeString('en-PH', timeOptions);

    return `${formatDate(dateTime)} ${formattedTime}`;
}

export const getTimeAgo = (timestamp) => {
    // Convert Firestore Timestamp to JavaScript Date object
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

    // Calculate the time difference between now and the given timestamp
    const now = new Date();
    const timeDifference = now - date; // Time difference in milliseconds

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (minutes < 1) {
        return "Just now";
    } else if (minutes < 60) {
        return `${minutes}m`;
    } else if (hours < 24) {
        return `${hours}h`;
    } else {
        const days = Math.floor(hours / 24);
        return `${days}d`;
    }
}






/*
|----------------------------------------
| Toast and Modals
|----------------------------------------
*/
/**
@param {string} type - Type of toast (success, default, error).
@param {string} message - Message of the toast.
@param {string} position - Position of the toast (top-left, top-center, top-right, bottom-left bottom-center, bottom-right).
@param {number} ms - Duration of the toast in ms.
*/
export function notify(type, message, position, ms) {
    if(type == 'success') {
        toast.success(message, {
            position: position,
            autoClose: ms,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    else if(type === 'default') {
        toast(message, {
            position: position,
            autoClose: ms,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    else if(type === 'error') {
        toast.error(message, {
            position: position,
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





/*
|----------------------------------------
| Format Currency to
|----------------------------------------
*/
/**
 * 
 * @param {number} value
 */
export const formatToPhilPeso = (value) => {
    return new Intl.NumberFormat('en-PH', {style: 'currency', currency: 'PHP'}).format(value);
}