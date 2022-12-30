#!/usr/bin/env node
function cleanString(dirty) {
    return dirty.replace(/[^a-z0-9]/gi, "_");
}

export default cleanString;
