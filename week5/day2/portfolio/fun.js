const fs = require("fs");

module.exports.myFunction = () => {
    const content = fs.readdirSync(__dirname + "/projects");
    console.log("(FILE FUN) content: ", content);

    var listOfProjects = "";
    for (let i = 0; i < content.length; i++) {
        listOfProjects += `<li><a href="${content[i]}/">${content[i]}</a></li>`;
    }
    let htmlFun = `
            <!doctype html>
            <html>
            <head>
            <title>Portfolio</title>
            </head>
            <body>
            <h1>My Portfolio</h1>
            <ul>
            ${listOfProjects}
            </ul>
            </body>
            </html>
            `;
    return htmlFun;
};
