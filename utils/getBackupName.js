#!/usr/bin/env node
import getDateString from "./getDateString.js";

function getBackupName(backupNameExt) {
  return `${getDateString(new Date())}-${backupNameExt}`;
}

export default getBackupName;
