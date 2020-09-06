const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const projectList = require("./data.json");

const hbSet = handlebars.create({
    helpers: {
        getCurrentYear() {
            return new Date().getFullYear();
        },
    },
});

app.engine("handlebars", hbSet.engine);
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));
app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        titlePage: "Home Page",
        projectList,
    });
});

app.get("/description/:project", (req, res) => {
    const project = req.params.project;
    const selectedProject = projectList.find(
        (item) => item.directory === project
    );

    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            layout: "main",
            titlePage: "Description Page",
            projectList,
            selectedProject,
        });
    }
});

app.listen(8080, () => console.log("The server is listening!"));
