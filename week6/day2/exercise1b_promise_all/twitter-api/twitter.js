const https = require("https");

const { consumerKey, consumerSecret } = require("./secrets");

// const { response } = require("express");
const { parse } = require("path");

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
            } else {
                let body = "";
                resp.on("data", (chunk) => {
                    body += chunk;
                });

                resp.on("end", () => {
                    // console.log("body in twitter.js", body);

                    let parsedBody = JSON.parse(body);
                    resolve(parsedBody.access_token);
                });
            }
        }
    });
}; //closes moduel.exports.getToken

// make it a Promise!!!!!!
module.exports.getTweets = function (bearerToken, user) {
    return new Promise(function (resolve, reject) {
        const options2 = {
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${user}&tweet_mode=extended`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };

        const req2 = https.request(options2, cb2);
        req2.end();

        function cb2(resp2) {
            if (resp2.statusCode != 200) {
                reject(resp2.statusCode);
            } else {
                let tweets = "";
                resp2.on("data", (chunk) => {
                    tweets += chunk;
                });

                resp2.on("end", () => {
                    let parsingTweets = JSON.parse(tweets);
                    resolve(parsingTweets);
                });
            }
        }
    });
}; // closes module.exports.getTweets

module.exports.filterTweets = function (tweets) {
    // create array to push tweets into
    let filteredTweets = [];
    // loop through array
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length === 1) {
            filteredTweets.push({
                href: `${tweets[i].entities.urls[0].url}`,
                text:
                    tweets[i].full_text.split("http")[0] +
                    `(${tweets[i].user.name})`,
            });
        }
    }

    return filteredTweets;
};
