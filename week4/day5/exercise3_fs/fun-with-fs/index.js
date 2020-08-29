// E3 : Code is not working entirely .. :(
console.log("sanity check!");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/files");

function mapSizes(fullPathDir) {
    const obj = {};
    fs.readdir(fullPathDir, { withFileTypes: true }, (err, content) => {
        if (err) {
            return console.log("error", err);
        }
        const obj = {};
        for (var prop in content) {
            if (content[prop].isFile()) {
                fs.stat(fullPathDir + "/" + content[prop].name, (err, stat) => {
                    if (err) {
                        return console.log("error", err);
                    }
                    obj[content[prop].name] = stat.size;
                    console.log("obj", obj);
                });
            } else if (content[prop].isDirectory()) {
                obj[content[prop].name] = mapSizes(
                    fullPathDir + "/" + content[prop].name
                );
            }
        }
        return obj;
    }); // closes readdir

    //fs write File doesn't work ???
    // const message = JSON.stringify(mapSizes(dirPath), null, 4);
    // fs.writeFile(fullPathDir + "/files.json", message, (err) => {
    //     if (err) {
    //         console.log("error", err);
    //         return;
    //     }
    // });
} // closes mapSizes

mapSizes(dirPath);

// getting undefined back for folders / directories
