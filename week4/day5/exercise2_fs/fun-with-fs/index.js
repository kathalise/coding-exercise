// E2
console.log("sanity check!");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/files");

function mapSizes(fullPathDir) {
    const content = fs.readdirSync(fullPathDir, { withFileTypes: true });
    console.log("content: ", content);

    const obj = {};
    for (var prop in content) {
        if (content[prop].isFile()) {
            const myStat = fs.statSync(fullPathDir + "/" + content[prop].name);
            obj[content[prop].name] = myStat.size;
        } else if (content[prop].isDirectory()) {
            obj[content[prop].name] = mapSizes(
                fullPathDir + "/" + content[prop].name
            );
        }
    }
    return obj;
}
mapSizes(dirPath);
fs.writeFileSync(
    __dirname + "/files.json",
    JSON.stringify(mapSizes(dirPath), null, 4)
);
