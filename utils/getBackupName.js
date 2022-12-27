#!/usr/bin/env node
import getDateString from "./getDateString.js";

function getBackupName(backupNamePrefix, date, backupNameSuffix) {
    return `${backupNamePrefix}_${getDateString(date)}_${backupNameSuffix}`;
}

export default getBackupName;
