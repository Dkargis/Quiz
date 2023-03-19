var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
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
    ]

var shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
console.log('Started')
startButton.classList.add('hide')
shuffleQuestion = question.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion(){
    console.log(questionElement);
showQuestion(shuffleQuestion[currentQuestionIndex])
}


function showQuestion(question){
questionElement.innerText = question.question
}

function selectAnswer(){

}

        
    //     {
    //         question: "How do you link the JavaScript document into the HTML document?",
    //         a: "<script> </script>",
    //         b: "<html> </html>",
    //         c: "<link href=>",
    //         d: "<a> </a>",
    //         correct: "a",
    //     },
    //     {
    //         question: "What is the purpose of JavaScript?",
    //         a: "To style the page.",
    //         b: "To add cool effects to elements.",
    //         c: "To make the website interactive.",
    //         d: "To add forms.",
    //         correct: "c",
    //     },
    //     {
    //         question: "JavaScript utilizes the ______ method to access elements with a specific ID?",
    //         a: "Crystal",
    //         b: "DOM",
    //         c: "JSON",
    //         d: "Console",
    //         correct: "d",
    //     },
    //     {
    //         question: "How do we code a variable?",
    //         a: "let()",
    //         b: ".const",
    //         c: "var",
    //         d: "function",
    //         correct: "c",
    //     },
    //     {
    //         question: "How is algorithm defined?",
    //         a: "A function.",
    //         b: "It's Spanish for 'something rhythm'.",
    //         c: "A variable with an array.",
    //         d: "A set of steps to complete a task.",
    //         correct: "d",
    //     },
    // ];










// const quizQuestions = [
//     {
//         question: "Where do you link your JavaScript document?",
//         a: "Anywhere in the HTML document",
//         b: "Within the body tags of the HTML document",
//         c: "Within the meta tags of the HTML document",
//         d: "Within the head tags of the HTML document",
//         correct: "b",
//     },
    
//     {
//         question: "How do you link the JavaScript document into the HTML document?",
//         a: "<script> </script>",
//         b: "<html> </html>",
//         c: "<link href=>",
//         d: "<a> </a>",
//         correct: "a",
//     },
//     {
//         question: "What is the purpose of JavaScript?",
//         a: "To style the page.",
//         b: "To add cool effects to elements.",
//         c: "To make the website interactive.",
//         d: "To add forms.",
//         correct: "c",
//     },
//     {
//         question: "JavaScript utilizes the ______ method to access elements with a specific ID?",
//         a: "Crystal",
//         b: "DOM",
//         c: "JSON",
//         d: "Console",
//         correct: "d",
//     },
//     {
//         question: "How do we code a variable?",
//         a: "let()",
//         b: ".const",
//         c: "var",
//         d: "function",
//         correct: "c",
//     },
//     {
//         question: "How is algorithm defined?",
//         a: "A function.",
//         b: "It's Spanish for 'something rhythm'.",
//         c: "A variable with an array.",
//         d: "A set of steps to complete a task.",
//         correct: "d",
//     },
// ];
// console.log(quizQuestions)
// const quiz = document.getElementById('quiz')
// const answers = document.querySelectorAll('.answer')
// const questions = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitbutton = document.getElementById('submit')
// var questionNumber = 0
// var score = 0
// // loadQuiz()

// var generateBtn = document.querySelector("#loadQuiz");
// function loadQuiz () {
//     deselectAnswers()
//     var currentQuizQuestion = quizQuestions[questionNumber]
//     //stick the text from variablesabove into the textbox div
//     questions.innerText = currentQuizQuestion.question
//     a_text.innerText = currentQuizQuestion.a
//     b_text.innerText = currentQuizQuestion.b
//     c_text.innerText = currentQuizQuestion.c
//     d_text.innerText = currentQuizQuestion.d
// }
// generateBtn.addEventListener("click", loadQuiz);  
// //deselects the answersbefore next question "arrow function"
// function deselectAnswers() {
//     answers.forEach(answerEl => answerEl.checked = false)
// }
// //foreach loop
// function getSelected() {
//     var answer
//     answers.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     return answer
// }
// submitbutton.addEventListener('click', () => {
//     const answer = getSelected()
//     if (answer) {
//         if (answer === quizQuestions[questionNumber].correct) {
//             score++
//         }
//         questionNumber++
//         if (questionNumber < quizQuestions.length) {
//             loadQuiz()
//         } else {
//             quiz.innerHTML = `<h2>You got ${score} /${quizQuestions.length} correct!</h2>
//             <button onclick="location.reload()">Reload</button>
//             `
//         }
//         }
//     }
// )