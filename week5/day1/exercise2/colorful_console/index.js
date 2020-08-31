const http = require("http");
const qs = require("querystring");

const chalk = require("chalk");

console.log(chalk.yellow("HELLO NODE"));

const server = http.createServer((request, response) => {
    // error handling
    request.on("error", (err) => console.log("REQ ERR", err));
    response.on("error", (err) => console.log("REQ ERR", err));

    response.setHeader("content-type", "text/html");

    if (request.method === "GET") {
        response.end(`
    <!doctype html>
      <html>
      <title>Colors</title>
      <form method="POST">
      <input type="text" name="text" placeholder="it is better to have loved and lost than never to have loved at all">
      <select name="color">
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="yellow">yellow</option>
          <option value="gray">gray</option>
          <option value="magenta">magenta</option>
          <option value="cyan">cyan</option>
      </select>
      <button type="submit">Go</button>
      </form>
      </html>
    `);
    } else if (request.method === "POST") {
        let body = "";

        request.on("data", (chunk) => {
            body += chunk;
        });

        request.on("end", () => {
            // ES6 destructuring
            const { text, color } = qs.parse(body);

            // TODO: print out the text to the console in the provided color
            console.log(chalk[color](text));

            // TODO: make the HTML dynamic by using interpolation
            response.end(`
          <!doctype html>
            <html>
            <title>it is better to have loved and lost than never to have loved at all</title>
            <a href="/" style="color:${color}">${text}</a>
            </html>
          `);
        });
    }
});

server.listen(8080, () => console.log("SERVER IS RUNNING"));
