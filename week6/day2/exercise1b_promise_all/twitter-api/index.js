const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/file.json", (req, res) => {
    // PROMISED VERSION
    getToken()
        .then((bearerToken) => {
            return Promise.all([
                getTweets(bearerToken, "nytimes"),
                getTweets(bearerToken, "guardian"),
                getTweets(bearerToken, "BBCWorld"),
            ]); //closes Promise.all
        })
        .then((tweets) => {
            const mergedTweets = tweets.flat();
            const sortedTweets = mergedTweets.sort(function (a, b) {
                return new Date(b.created_at) - new Date(a.created_at);
            });

            let filteredTweets = filterTweets(sortedTweets);
            return filteredTweets;
        })
        .then((filteredTweets) => {
            res.json(filteredTweets);
        })
        .catch((err) => {
            console.log("an error after res.json", err);
            return;
        });
});

app.listen(8081, () => console.log("Twitter api server is listening!"));
