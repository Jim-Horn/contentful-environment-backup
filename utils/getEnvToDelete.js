#!/usr/bin/env node
function getEnvToDelete(envs, deleteNamePrefix, deleteNameSuffix) {
    const bakEnvs = envs.filter((env) => env.name.endsWith(deleteNameSuffix));
    return bakEnvs.find((env) => env.name.startsWith(deleteNamePrefix));
}
export default getEnvToDelete;
