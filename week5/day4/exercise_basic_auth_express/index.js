const express = require("express");
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

// http.createServer
const app = express();

app.use(cookieParser());
console.log("cookieParser :", cookieParser);

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(function cookieFn(req, res, next) {
    if (req.cookies.giveMecookies === "true" || req.url === "/cookie") {
        next();
    } else {
        console.log("no 🍪 ");
        res.cookie("myUrl", req.url);
        res.redirect("/cookie");
        next();
    }
});

//basic auth
const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "kathi" || creds.pass != "wolf") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see content."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(auth);

app.use(express.static("projects"));
app.get("/", (req, res) => {
    res.send(`<h1>My Portfolio</h1>`);
});

app.get("/cookie", (req, res) => {
    console.log("req.cookies", req.cookies);
    res.send(`<form method="POST">
    <h2>🍪 Accept our Cookies 🍪</h2>
  <input id="csconsentcheckbox" type="checkbox" name="agree" value="true"/>
  <label for="csconsentcheckbox">I agree with Cookie Policy</label><br>
  <input id="csconsentcheckbox" type="checkbox"/>
  <label for="csconsentcheckbox">I do not agree with Cookie Policy</label><br>
  <button type="submit">Off you go!</button>
</form>`);
});

app.post("/cookie", (req, res) => {
    if (req.body.agree === "true") {
        console.log("cookies agreed to");
        res.cookie("giveMecookies", "true");
        res.redirect(req.cookies.myUrl);
    } else {
        console.log("cookies not agreed to");
        res.cookie("giveMecookies", "false");
        res.send("🍪 Please accept our Cookies 🍪");
    }
});

app.listen(8080, () => console.log("Express is listening"));
