#!/usr/bin/env node
import getDateString from "./getDateString.js";

function getBackupName(backupNameExt) {
    return `${getDateString(new Date())}_${backupNameExt}`;
}

export default getBackupName;
