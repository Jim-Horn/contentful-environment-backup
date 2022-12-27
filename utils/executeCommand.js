#!/usr/bin/env node
import { execSync } from "child_process";

function executeCommand(cmd) {
    return execSync(cmd).toString();
}

export default executeCommand;