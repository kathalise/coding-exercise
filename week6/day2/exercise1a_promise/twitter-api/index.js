const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/file.json", (req, res) => {
    // PROMISED VERSION
    getToken()
        .then((bearerToken) => {
            return getTweets(bearerToken);
        })
        .then((tweets) => {
            let filteredTweets = filterTweets(tweets);
            return filteredTweets;
        })
        .then((filteredTweets) => {
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log("an error", err);
            return;
        });
});

app.listen(8081, () => console.log("Twitter api server is listening!"));
