#!/usr/bin/env node
import getDateString from "./getDateString.js";

function getBackupName(backupNamePrefix, backupNameSuffix) {
    return `${backupNamePrefix}_${getDateString(
        new Date()
    )}_${backupNameSuffix}`;
}

export default getBackupName;
