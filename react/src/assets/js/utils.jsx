import React, { useState, useEffect } from 'react';

// Check the String if its empty or spaces
export function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

// Email Validator
export function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}