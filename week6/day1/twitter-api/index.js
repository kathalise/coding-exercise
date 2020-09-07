const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/file.json", (req, res) => {
    console.log("request for json has been made!");
    // TO DOS:
    // 1. get token
    getToken((err, bearerToken) => {
        if (err) {
            console.log("err in getToken: ", err);
            return;
        }
        console.log("bearerToken in index.js", bearerToken);

        // 2. with token, make request for tweets
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err in getTweets: ", err);
                return;
            }
            console.log("tweets in index.js!!!", tweets);

            // 3. once we receive the tweets, filter them
            const filteredTweets = filterTweets(tweets);
            // 4. send filtered tweets to the client as json
            res.json(filteredTweets);
        });
    });
});

app.listen(8081, () => console.log("Twitter api server is listening!"));
