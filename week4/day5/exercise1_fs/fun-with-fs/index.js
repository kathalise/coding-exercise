const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./files");

function logSizes(argument) {
    fs.readdir(argument, { withFileTypes: true }, (err, content) => {
        if (err) {
            return console.log("err in readdir: ", err);
        }

        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile()) {
                fs.stat(argument + `/${content[i].name}`, (err, stat) => {
                    if (err) {
                        console.log("err in stat", err);
                    }
                    console.log(
                        argument + `/${content[i].name}` + `: ` + stat.size
                    );
                });
            } else if (content[i].isDirectory()) {
                logSizes(argument + `/${content[i].name}`);
            }
        }
    }); // closes readdir
} // closes logSizes

logSizes(dirPath);
