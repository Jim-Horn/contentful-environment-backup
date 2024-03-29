#!/usr/bin/env node
import fs from "fs";
import executeCommand from "./executeCommand.js";

const DATA_DIR = "/data";

function getAndParseContentfulEnvs(accessString) {
    getContentfulEnvs();

    const results = createEnvironmentsObj();

    writeJsonFile(results);

    return results;

    function getContentfulEnvs() {
        executeCommand(
            `contentful space environment list ${accessString} > ${DATA_DIR}/envs.txt`
        );
    }

    function createEnvironmentsObj() {
        const results = [];
        let dataArr = cleanData(
            fs.readFileSync(`${DATA_DIR}/envs.txt`, {
                encoding: "utf8",
                flag: "r",
            })
        ).split("\n");
        dataArr = dataArr.filter((el) => el !== "");
        dataArr.shift();
        dataArr.forEach((el) => results.push(makeObj(el)));
        return results;

        function cleanData(data) {
            let returnVal = data.replace(/(┌|┐|├|┼|┤|└|┴|┘|┬|─|│)/g, "");
            returnVal = returnVal.replace(/( ){2,}/g, ",");
            returnVal = returnVal.replace(/^( )/g, "");
            returnVal = returnVal.replace(/\x1B\[90m\x1B\[39m/g, "");
            return returnVal;
        }

        function makeObj(el) {
            const elArr = el.replace(/( ){2,}/g, ",").split(",");
            const [name, id, status] = elArr;
            return { name: name.trim(), id: id.trim(), status: status.trim() };
        }
    }

    function writeJsonFile(results) {
        fs.writeFile(
            `${DATA_DIR}/envs.json`,
            JSON.stringify(results, null, 4),
            (err) => {
                if (err) throw err;
                console.log("Data written to file");
            }
        );
    }
}

export default getAndParseContentfulEnvs;
