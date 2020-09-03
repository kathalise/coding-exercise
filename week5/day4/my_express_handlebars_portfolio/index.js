const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const projects = require("./data.json");

app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));
app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        projects,
    });
});

app.listen(8080, () => console.log("The server is listening!"));
