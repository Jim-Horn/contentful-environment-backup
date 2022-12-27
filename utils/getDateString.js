#!/usr/bin/env node

function getDateString(theDate) {
    // const currentDate = new Date();
    let returnString = theDate.getFullYear();
    returnString += "-";
    returnString += pad(theDate.getMonth() + 1);
    returnString += "-";
    returnString += pad(theDate.getDate());
    returnString += '_';
    returnString += pad(theDate.getHours());
    returnString += "-";
    returnString += pad(theDate.getMinutes());
    returnString += "-";
    returnString += pad(theDate.getSeconds());

    return returnString;

    function pad(val) {
        return val.toString().padStart(2, '0');
    }
}

export default getDateString;