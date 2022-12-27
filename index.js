#!/usr/bin/env node
import createEnv from "./utils/createEnv.js";
import deleteEnv from "./utils/deleteEnv.js";
import getAndParseContentfulEnvs from "./utils/getAndParseContentfulEnvs.js";
import getBackupName from "./utils/getBackupName.js";
import getEnvToDelete from "./utils/getEnvToDelete.js";

const backupNameSuffix = "BAK";
const backupNamePrefix = process.env["INPUT_BACKUP-NAME-PREFIX"];
const deleteNamePrefix = process.env["INPUT_DELETE-NAME-PREFIX"];

const managementToken =
    process.env["INPUT_CONTENTFUL-CONTENT-MANAGEMENT-TOKEN"];
if (!managementToken) {
    console.error(`MISSING MANAGEMENT TOKEN: See README`);
    process.exit(1);
}

const spaceId = process.env["INPUT_CONTENTFUL-SPACE-ID"];
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
