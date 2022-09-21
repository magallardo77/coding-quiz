const start = document.querySelector("#startQuiz")
const create = document.querySelector("#create")
const time = document.querySelector("#time")
const quizQuestion = document.querySelector("#question")
const sumbit = document.querySelector("#sumbit")
let question = 0
let seconds = 75

let questions = [
    {
        quizQ: "Which of these values is not a JavaScript data type?"
        options: ["Boolean", "Number", "ID", "String"]
        answer: "ID"
    }
    {
        quizQ: "Which variable choice reassigns its value?" 
        options: ["Let", "Const"]
        answer: "Let"
    }
    {
        quizQ: "How do you select a single ID in JavaScript"
        options: ["getElementbyID", "createElement", "querySelectorAll", "addEventListenter"]
        answer: "getElementbyID"
    }
    {
        quizQ: "Which section of the HTMl file should you use to link your CSS file?"
        options: ["Body", "Hsead", "Footer", "Main"]
        answer: "Head"
    }
]
// function createQuiz() {
    //     start.setAttribute("style", "display:none")
}
function createQuiz()
    for (let i = 0; i < questions.length; i++){
    const eachQuestion = questions[i];
    console.log(questions.Q);

    const parentQuestion = document.createElement();
    parentQuestion.style.display = "flex";

    const button = document.createElement("button");
    button.textContent = "See";

    const h2 = document.createElement("h2")
    h2.textContent = `${questions.Q} ${questions.CH}`

    const a = document.createElement("a");
    a.setAttribute("href", `${questions.A}`);
    a.textContent = "Answer:"

    parentQuestion.appendChild(h2);
    main.appendChild(parentQuestion);

    main.addEventListener("click", function(event) {
        if (event.target.matches("button")) {
            console.log("clicked for", event.target.getAttribute("data-location"))
            localStorage.setItem("requestedLocation", event.target.getAttribute("data-locataion"))
            window.location.replace("./second-html.html")
        }
    }
}

    createQuiz()
]
}

function beginTimer() {
    const timerEnd = setInterval(function () {
        seconds--;
        time.textContent - seconds
    }, 1000);

function renderQuestions() {
    quizQuestion.innerHTML = ""
    quizQuestion.textContent = questions[quizQuestion].quizQ}
    for (let i = 0; i < questions[quizQuestion].options.length; i++) {
        let quizOption = questions[quizQuestion].options[i]
        let button = document.createElement("button")
        button.textContent = quizOption;
        $(button.on("click", sumbit))
            $(button.attr("data-value", quizOption))
        }
    // let optionButton = document.createElement("button")

    function nextQuiz() {
        if (index < questions.length - 1) {
            index++;
            renderQuestions();
        else {
            clearInterval(timerEnd);
            quizQuestion.innerHTML = "";
            //highScore();
            }
            $(start.on("click", function(){
                renderQuestions();
                beginTimer();
            })
        }
        $(document.querySelector("form").on("sumbit", function(event){
            event.preventDefault();
            let input = document.querySelector("form")[0]
            const highScore ={score: seconds, initials: input.value};
            localStorage.setItem("highScores", JSON.stringify(highScore));
        })


    }




