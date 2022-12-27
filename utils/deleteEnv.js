#!/usr/bin/env node
import executeCommand from "./executeCommand.js";

function deleteEnv(envToDelete, accessString) {
    try {
        const deleteOldBackupCommand = `contentful space environment delete --environment-id ${envToDelete} ${accessString}`;
        console.log(`Delete command: ${deleteOldBackupCommand}`);
        executeCommand(deleteOldBackupCommand);
    } catch (err) {
        console.log("\n\nSKIPPING DELETE:\n");
        console.log(err + "\n");
        console.log("envs: ", envs, "\n\n");
    }
}

export default deleteEnv;
