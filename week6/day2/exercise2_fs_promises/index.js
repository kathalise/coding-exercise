const path = require("path");
const dirPath = path.join(__dirname, "./files");
const { readdir, stat } = require("fs").promises;

function logSizes(pathAsArg) {
    return readdir(pathAsArg, { withFileTypes: true }).then((content) => {
        const promisesArr = [];
        for (let i = 0; i < content.length; i++) {
            const nextPath = `${pathAsArg}/${content[i].name}`;
            if (content[i].isFile()) {
                promisesArr.push(
                    stat(nextPath).then((myStat) => {
                        console.log(`${nextPath} : ${myStat.size}`);
                    }) // closes .then(stat)
                );
            }
            if (content[i].isDirectory()) {
                promisesArr.push(logSizes(`${pathAsArg}/${content[i].name}`));
            }
        }
        return Promise.all(promisesArr);
    });
} // closes logSizes

logSizes(dirPath).then(() => console.log("done!"));
