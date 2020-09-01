const http = require("http");
const fs = require("fs");
const path = require("path");
const myFunction = require("./fun");

http.createServer((req, res) => {
    // ------ this is an example how streaming works ------ //
    // console.log("path:", __dirname + "/projects/kitty_carousel/style.css");
    // const readStream = fs.createReadStream(
    //     __dirname + "/projects/kitty_carousel/style.css"
    // );
    // readStream.pipe(res);
    // ----------------- ////// ------------------------ //

    // --- handles case, if request is NOT a "GET" request --- //
    if (req.method !== "GET") {
        res.statusCode = 405;
        return res.end();
    }

    const filePath = path.normalize(__dirname + "/projects" + req.url);
    console.log("filePath: ", filePath);

    if (!filePath.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        console.log("INTRUDER!!!");
        return res.end();
    }

    console.log("time to serve some file!");

    // --- Opening the "landing page" for portfolio --- //
    if (req.url === "/") {
        res.setHeader("content-type", "text/html");
        res.end(myFunction.myFunction());
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("err in fs.stat: ", err);
            res.statusCode = 404;
            return res.end();
        }
        // console.log("stats:", stats);
        if (stats.isFile()) {
            // console.log("it is a file!");
            // console.log("the extension is ...", path.extname(filePath));

            var contentType = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "text/javascript",
                ".json": "application/json",
                ".jpg": "image/jpeg",
                ".png": "image/png",
                ".svg": "image/svg+xml",
            };

            res.setHeader("content-type", contentType[path.extname(filePath)]);
            const createReadStreFile = fs.createReadStream(filePath);
            createReadStreFile.pipe(res);
        } else {
            if (req.url.endsWith("/")) {
                console.log("it is a directory");
                const readStreamHtml = fs.createReadStream(
                    filePath + "/index.html"
                );
                // console.log("(0) This is the readStremHtml: ", readStreamHtml);
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readstream : ", err);
                    res.statusCode = 500;
                    res.end();
                });
            } else {
                // we need to redirect to access the files on the server
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                res.end();
            }
        }
    });

    /// ------ to make sure nobody hacks our files ------ ///
    // console.log("/user/.../.../text.txt");
    // console.log("normalized path", path.normalize("/user/.../.../text.txt"));
}).listen(8080, () => console.log("My portfolio is up and running"));
