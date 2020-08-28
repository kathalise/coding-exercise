const readline = require("readline");
const { rawListeners } = require("process");

const story = require("./story.json");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question) {
    // console.log(question);
    rl.question(chalk.green(question.q), function (answer) {
        if (question.answers[answer] === undefined) {
            ask(question);
        } else if (typeof question.answers[answer] == "string") {
            console.log(chalk.blue(question.answers[answer]));
            rl.close();
        } else {
            ask(question.answers[answer]);
        }
    });
}
ask(story);
