var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answers: "alerts"
    },
    {
        question: "A JavaScript _______ is zero or more characters written inside quotes:",
        choices: ["strings,", "booleans", "length", "switch"],
        answers: "strings"
    },
    {
        question: "_______ is a special variable, which can hold more than one value:",
        choices: ["function", "JSON", "arrays", "booleans"],
        answers: "arrays"
    },
    {
        question: "_______ can execute a block of code a number of times:",
        choices: ["switch", "loops", "alerts", "scope"],
        answers: "loops"
    },
    {
        question: "______ is a format for storing and transporting data:",
        choices: ["scope", "break", "errors", "JSON"],
        answers: "alerts"
    },
    {
        question: "A JavaScript _______ represents one of two values: true or false:",
        choices: ["formats", "booleans", "alerts", "numbers"],
        answers: "booleans"
    },

];
var startButton = document.getElementById('start')
var mainMenuEl = document.getElementById('main-menu')
var questionContainerEl = document.getElementById('#questions-container')
var answer1 = document.getElementById("answer-1")
var answer2 = document.getElementById("answer-2")
var answer3 = document.getElementById("answer-3")
var answer4 = document.getElementById("answer-4")
var question = document.getElementById("Question")
var secondsLeft = 100
var timerCount = document.querySelector("#time")
startButton.addEventListener('click', startGame)
function startGame() {
console.log('Started')

var timerInterval = setInterval(function() {
    secondsLeft--;
    if(secondsLeft === 0 || quizQuestions[4]) {
        timerCount.innerHTML = secondsLeft;
        sendMessage();
    }
}, 1000);

    mainMenuEl.innerHTML = ''
    console.log("working")
    question.innerHTML = quizQuestions[0].question
    answer1.innerHTML = quizQuestions[0].choices[0]
    answer2.innerHTML = quizQuestions[0].choices[1]
    answer3.innerHTML = quizQuestions[0].choices[2]
    answer4.innerHTML = quizQuestions[0].choices[3]

    

}
