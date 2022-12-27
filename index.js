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
const spaceId = "nrocpvfo0sk3"; // param
const accessString = `--management-token ${managementToken} --space-id ${spaceId}`;

const envs = getAndParseContentfulEnvs(accessString);

const envToDelete = getEnvToDelete(envs, deleteNamePrefix, backupNameSuffix);

envToDelete && deleteEnv(envToDelete, accessString);

const envToCreate = getBackupName(backupNamePrefix, new Date(), backupNameSuffix);

createEnv(envToCreate, accessString);
