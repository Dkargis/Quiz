var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var timer;
var initial = document.getElementById('end-container');
var ele = document.getElementById('timer');
const startingMinutes = 5;
let time = startingMinutes * 60;
const submitButton = document.getElementById('submit-btn')
const countdownEl = document.getElementById('timer');
const finishedQuestions =  [
    
]


function startTimer(setInterval) {
  
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
time--;
}

const question = [
        {
            question: "Where do you link your JavaScript document?",
             answers: [
                {text: "Anywhere in the HTML document", correct: false},
                {text: "Within the body tags of the HTML document", correct: true},
                {text: "Within the meta tags of the HTML document", correct: false},
                {text: "Within the head tags of the HTML document", correct: false}
            ]
        },
        {
                    question: "How do you link the JavaScript document into the HTML document?",
                    answers: [
                        {text: "<script> </script>", correct: true},
                        {text: "<html> </html>", correct: false},
                        {text: "<link href=>", correct: false},
                        {text: "<a> </a>", correct: false}
                    ]
                },
        
                {

                    question: "What is the purpose of JavaScript?",
                    answers: [
                        {text: "To style the page.", correct: false},
                        {text: "To add cool effects to elements.", correct: false},
                        {text: "To make the website interactive.", correct: true},
                        {text: "To add forms.", correct: false}
                    ]
                        },
                        {
                            question: "JavaScript utilizes the ______ method to access elements with a specific ID?",
                            answers: [
                                {text: "Crystal", correct: false},
                                {text: "DOM", correct: true},
                                {text: "JSON", correct: false},
                                {text: "Console", correct: false}
                            ]
                        },
                        {
                            question: "How do we code a variable?",
                            answers: [
                                {text: "let()", correct: false},
                                {text: ".const", correct: false},
                                {text: "var", correct: true},
                                {text: "function", correct: false}
                            ]
                        },
            ]

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
startButton.addEventListener('click', startTimer,)

function startGame(){
setInterval(startTimer, 1000);
console.log('Started')
startButton.classList.add('hide')
shuffleQuestion = question.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

answerButtonsElement.addEventListener('click', setNextQuestion)

function setNextQuestion(){
    resetState()
showQuestion(shuffleQuestion[currentQuestionIndex])
}



function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)



});
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)

}
}


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    finishedQuestions.push(String(correct))

    if(finishedQuestions.length === question.length){

        questionContainerElement.classList.add('hide')
    initial.classList.remove('hide')


    }
    console.log(finishedQuestions)
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)

    })

currentQuestionIndex++;
{
  setTimeout(() => {
    setNextQuestion();
  }, 1000);
}

}

function score(){

    var score = 0;
    for(var i = 0; i < finishedQuestions.length; i++){
        if(finishedQuestions[i] === "true"){
            score++;
        }
    }
    document.getElementById("score").innerHTML = "Your score is " + score + " out of " + finishedQuestions.length;
}


submitButton.addEventListener('click', submission)
function submission(){
    var initials = document.getElementById('initials').value;
    var score = 0;
    for(var i = 0; i < finishedQuestions.length; i++){
        if(finishedQuestions[i] === "true"){
            score++;
        }
    }
    localStorage.setItem(initials, score);
    console.log(localStorage);
    document.getElementById("score").innerHTML = "Your score is " + score + " out of " + finishedQuestions.length;
    document.getElementById("initials").innerHTML = "Your initials are " + initials;
    document.getElementById("end-container").classList.add('hide')
    document.getElementById("highscore-container").classList.remove('hide')
    document.getElementById("highscore-container").classList.add('show')
    document.getElementById("highscore-list").innerHTML = "Your initials are " + initials + " and your score is " + score + " out of " + finishedQuestions.length;
    document.getElementById("highscore-list").classList.add('show')    


}






 function setStatusClass (element, correct){
     clearStatusClass(element)
     if(correct){
         element.classList.add('correct', time += 2)
     } else {
         element.classList.add('wrong', time -= 1)
     }
    }


    function clearStatusClass(element){
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }











