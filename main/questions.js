const colorKeywords = require('./colorKeywords.js')

const questions = [
    // Shapes
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // Shape Color
    {
        name: 'shapeColor',
        message: 'What is the color of the shape? Choose a color format: ',
        type: 'input',
    },
    // color keyword
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => {
            if(answers.shapeColor === 'keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = Keywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(Keywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // Text
    {
        name: 'text',
        message: 'What is the text? (three characters maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less!");
            }
            return true;
        }
    },

    // Text Color
    {
        name: 'textColor',
        message: 'What is the color of the text?',
        type: 'input',
    },
    // color keyword
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        when: (answers) => {
            if(answers.textColor === 'keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(Keywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
];

module.exports = questions;