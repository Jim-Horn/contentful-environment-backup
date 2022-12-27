#!/usr/bin/env node
import executeCommand from "./executeCommand.js";

function createEnv(envToCreate, accessString) {
    try {
        const createBackupCommand = `contentful space environment create --name ${envToCreate} --environment-id ${envToCreate} ${accessString}`;
        console.log(`Backup command: ${createBackupCommand}`);
        executeCommand(createBackupCommand);
    } catch (err) {
        console.log(err);
    }
}

export default createEnv;
