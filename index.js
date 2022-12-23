#!/usr/bin/env node
import { execSync } from 'child_process';
import getAndParseContentfulEnvironments from './utils/getAndParseContentfulEnvironments.js';
import getBackupName from './utils/getBackupName.js';

const backupNameExt = 'BAK';

function executeCommand(cmd) {
    return execSync(cmd).toString();
}

getAndParseContentfulEnvironments();
// console.log('JSON.stringify(process.env, null, 2): ', JSON.stringify(process.env, null, 2));

// const managementToken = process.env['INPUT_CONTENTFUL-CONTENT-MANAGEMENT-TOKEN'];
const managementToken = "process.env['INPUT_CONTENTFUL-CONTENT-MANAGEMENT-TOKEN']";
// const spaceId = process.env['INPUT_CONTENTFUL-SPACE-ID'];
const spaceId = "process.env['INPUT_CONTENTFUL-SPACE-ID']";
const accessString = `--management-token ${managementToken} --space-id ${spaceId}`;

try {
    const deleteOldBackupCommand = `contentful space environment delete --environment-id AUTOMATIC-BACKUP ${accessString}`;
    console.log(`Delete command: ${deleteOldBackupCommand}`);
    // executeCommand(deleteOldBackupCommand);
}catch (err){
    console.log(err)
}

try {
    const createBackupCommand = `contentful space environment create --name ${getBackupName(backupNameExt)} --environment-id AUTOMATIC-BACKUP ${accessString}`;
    console.log(`Backup command: ${createBackupCommand}`);
    // executeCommand(createBackupCommand);
}catch (err){
    console.log(err)
}
