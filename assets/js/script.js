var time =  180;
var questionEl = document.querySelector("#quiz-ques");
var choicesListEl = document.querySelector("#quiz-choices");
var questionResultEl = document.querySelector("quiz-ans");


var questions = [
    {
        question: "The major car manufacturer by volume is:",
        choices: ["toyota", "nissan", "ford", "dodge"],
        answer: "toyota",
    },
    {
        question: "Direct gasoline injection systems began introduction to passenger cars in what year",
        choices: ["1989", "2002", "1999", "2005"],
        answer: "2002",
    }
];


// create a timer based quiz on start button click event

 
 var startBtn = document.querySelector("#btn-id");

var startTimer = function(event) {
    var countDownTimer = setInterval(timer, 1000) 
    function timer() {
        time--;
        if (time <= 0){
            clearInterval(countDownTimer);        
        }
        document.getElementById('timer-displ').innerHTML='Time: '+ time +" sec";
    };
    return;
}    

startBtn.addEventListener("click", startTimer );
// present question with multiple choice for answers
var displayQuestions = function() {

};

// incorrect answers deducts time from timer

// quiz ends when timer is finished

// save score with user initials

