#!/usr/bin/env node

function getDateString(theDate) {
    let returnString = theDate.getFullYear();
    returnString += "-";
    returnString += pad(theDate.getMonth() + 1);
    returnString += "-";
    returnString += pad(theDate.getDate());
    returnString += '_';
    returnString += pad(theDate.getHours());
    returnString += "-";
    returnString += pad(theDate.getMinutes());

    return returnString;

    function pad(val) {
        return val.toString().padStart(2, '0');
    }
}

export default getDateString;