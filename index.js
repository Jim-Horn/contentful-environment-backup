#!/usr/bin/env node
const { execSync } = require('child_process');

function executeCommand(cmd) {
    return execSync(cmd).toString();
}

function getBackupName() {
    const currentDate = new Date();
    let returnString = 'BACKUP-';
    returnString += currentDate.getFullYear();
    returnString += pad(currentDate.getMonth() + 1);
    returnString += pad(currentDate.getDate());
    returnString += '-';
    returnString += pad(currentDate.getHours());
    returnString += pad(currentDate.getMinutes());

    return returnString;

    function pad(val) {
        return val.toString().padStart(2, '0');
    }
}

const managementToken = process.env['INPUT_CONTENTFUL-CONTENT-MANAGEMENT-TOKEN'];
const spaceId = process.env['INPUT_CONTENTFUL-SPACE-ID'];
const accessString = `--management-token ${managementToken} --space-id ${spaceId}`;

try {
    const deleteOldBackupCommand = `contentful space environment delete --environment-id AUTOMATIC-BACKUP ${accessString}`;
    console.log(`Delete command: ${deleteOldBackupCommand}`);
    executeCommand(deleteOldBackupCommand);
}catch (err){
    console.log(err)
}

try {
    const createBackupCommand = `contentful space environment create --name ${getBackupName()} --environment-id AUTOMATIC-BACKUP ${accessString}`;
    console.log(`Backup command: ${createBackupCommand}`);
    executeCommand(createBackupCommand);
}catch (err){
    console.log(err)
}
