#!/usr/bin/env node
function getEnvToDelete(envs, deleteNamePrefix) {
    const bakEnvs = envs.filter((env) => env.name.endsWith(`BAK`));
    return bakEnvs.find((env) => env.name.startsWith(deleteNamePrefix));
}
export default getEnvToDelete;
