const fs = require('fs');
const { execSync } = require('child_process');


executeCommand(`contentful space environment list > environments.txt`);

const results = [];
let data = fs.readFileSync('./environments.txt', { encoding: 'utf8', flag: 'r' });
data = data.replace(/(┌|┐|├|┼|┤|└|┴|┘|┬|─|│)/g, '');
data = data.replace(/( ){2,}/g, ',');
data = data.replace(/^( )/g, '');
data = data.replace(/\x1B\[90m\x1B\[39m/g, '');
let dataArr = data.split('\n');
dataArr = dataArr.filter(el => el !== '');
dataArr.shift();
dataArr.forEach(el => results.push(makeObj(el)));

fs.writeFile('envs.json', JSON.stringify(results), err => {
    if (err) throw err;
    console.log('Data written to file');
});

function executeCommand(cmd) {
    return execSync(cmd).toString();
}

function makeObj(el) {
    const elArr = el.replace(/( ){2,}/g, ',').split(',');
    const [name, id, status] = elArr;
    return { name: name.trim(), id: id.trim(), status: status.trim() };
}
