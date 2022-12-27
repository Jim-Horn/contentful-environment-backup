#!/usr/bin/env node
import createEnv from "./utils/createEnv.js";
import deleteEnv from "./utils/deleteEnv.js";
import getAndParseContentfulEnvs from "./utils/getAndParseContentfulEnvs.js";
import getBackupName from "./utils/getBackupName.js";
import getEnvToDelete from "./utils/getEnvToDelete.js";

const backupNameSuffix = "BAK"; // hard-coded
const backupNamePrefix = "auto"; // param
const deleteNamePrefix = "auto"; // param

const managementToken = ""; // secret
if (!managementToken) {
    console.error(`MISSING MANAGEMENT TOKEN: See README`);
    process.exit(1);
}

const spaceId = "nrocpvfo0sk3"; // param
if (!spaceId) {
    console.error(`MISSING SPACE ID: See README`);
    process.exit(1);
}

const accessString = `--management-token ${managementToken} --space-id ${spaceId}`;

const envs = getAndParseContentfulEnvs(accessString);

if (!!deleteNamePrefix) {
    const envToDelete = getEnvToDelete(
        envs,
        deleteNamePrefix,
        backupNameSuffix
    );
    envToDelete && deleteEnv(envToDelete, accessString);
} else {
    console.warn(`SKIPPING DELETE: deleteNamePrefix not supplied`);
}

if (!!backupNamePrefix) {
    const envToCreate = getBackupName(
        backupNamePrefix,
        new Date(),
        backupNameSuffix
    );
    createEnv(envToCreate, accessString);
} else {
    console.warn(`SKIPPING CREATE: backupNamePrefix not supplied`);
}
