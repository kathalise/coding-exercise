const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("error in the request", err));
    response.on("error", (err) => console.log("error in the response", err));

    console.log("request method", request.method);
    console.log("request url", request.url);
    console.log("request header", request.headers);

    if (request.method === "GET" || request.method === "HEAD") {
        response.setHeader("content-type", "text/html");
        response.statusCode = 200;

        if (request.method === "HEAD") {
            response.end(); // without html-body
        }
        response.end(`<!doctype html>
<html>
<title>Hello World!</title>
<p>Hello World!</p>
</html>`);
    } else if (request.method === "POST") {
        let body = "";
        request.on("data", (chunk) => (body += chunk));

        request.on("end", () => {
            console.log("body", body);

            response.setHeader("Location", "/");
            response.statusCode = 302;
            response.end();
        });
    } else {
        response.statusCode = 405;
        response.end();
    }

    let dataToAppend = `${Date()} \t ${request.method} \t ${request.url} \t ${
        request.headers["user-agent"]
    }`;
    fs.appendFile(__dirname + "/requests.txt", dataToAppend, "utf8", (err) => {
        if (err) {
            console.log("err in appendFile: ", err);
        }
        console.log("fs.appendFile worked!");
    });
});

server.listen(8080, () => console.log("Server is Listening"));
