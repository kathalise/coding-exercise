const https = require("https");

const { consumerKey, consumerSecret } = require("./secrets");

const { response } = require("express");
const { resolve } = require("path");

// make it a Promise!!!!
module.exports.getToken = () => {
    //this function will get the bearerToken from Twitter
    return new Promise(function (resolve, reject) {
        let creds = `${consumerKey}:${consumerSecret}`;
        let encodedCreds = new Buffer.from(creds).toString("base64");

        const options = {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };

        const req = https.request(options, cb);
        req.end("grant_type=client_credentials");

        function cb(resp) {
            if (resp.statusCode != 200) {
                reject(new Error(resp.statusCode));
                return;
            }

            let body = "";
            resp.on("data", (chunk) => {
                body += chunk;
            });

            resp.on("end", () => {
                console.log("body in twitter.js", body);

                let parsedBody = JSON.parse(body);
                resolve(parsedBody.access_token);
            });
        }
    });
}; //closes moduel.exports.getToken

// make it a Promise!!!!!!
module.exports.getTweets = function (bearerToken) {
    return new Promise(function (resolve, reject) {
        const options2 = {
            host: "api.twitter.com",
            path:
                "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };

        const req = https.request(options2, cb2);
        req.end();

        function cb2(resp) {
            if (resp.statusCode != 200) {
                reject(new Error(resp.statusCode));
            }
            let tweets = "";
            resp.on("data", (chunk) => {
                tweets += chunk;
            });

            resp.on("end", () => {
                let parsingTweets = JSON.parse(tweets);
                // console.log("bodyToTweets: ", bodyToTweets);
                resolve(parsingTweets);
            });
        }
        //this function gets tweets form Twitter's API
        // each request we make for tweets, we HAVE to do it with the token
        // FOR US TO COMPLETE!!
    });
}; // closes module.exports.getTweets

module.exports.filterTweets = function (tweets) {
    // create array to push tweets into
    let filteredTweets = [];
    // loop through array
    for (let i = 0; i < tweets.length; i++) {
        // go only for urls-arrays with 1 link and exclude the ones with "0" or "2 and more"
        if (tweets[i].entities.urls.length === 1) {
            // console.log("url in tweet: ", tweets[1].entities.urls[0].url);
            // console.log("text of tweets: ", tweets[1].full_text);

            filteredTweets.push({
                href: `${tweets[i].entities.urls[0].url}`,
                text: tweets[i].full_text.split("http")[0],
            });
        }
    }

    //--- text: tweets[i].full_text.split("http")[0] --- cutting the string at position "http" and only
    //---- keeping the first half "index [0]" on the cut -> the second half with link is cut out ---

    //once we have the tweets from Twitter, this function cleans / filters them!
    // FOT US TO COMPLETE!! (no callback functions need to be passed)

    return filteredTweets;
};
