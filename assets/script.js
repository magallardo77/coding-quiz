const start = document.querySelector("#startQuizBtn")
const create = document.querySelector("#create")
const time = document.querySelector("#time")
const quizQuestion = document.querySelector("#questions")
const sumbit = document.querySelector("#sumbit")
const options1 = document.querySelector("#option1")
const options2 = document.querySelector("#option2")
const options3 = document.querySelector("#option3")
const options4 = document.querySelector("#option4")
let index = 0
let seconds = 10

let questions = [
    {
        quizQ: "Which of these values is not a JavaScript data type?",
        options: ["Boolean", "Number", "ID", "String"],
        answer: "ID",
    },
    {
        quizQ: "Which variable choice reassigns its value?", 
        options: ["Let", "Const"],
        answer: "Let",
    },
    {
        quizQ: "How do you select a single ID in JavaScript",
        options: ["getElementbyID", "createElement", "querySelectorAll", "addEventListenter"],
        answer: "getElementbyID"
    },
    {
        quizQ: "Which section of the HTMl file should you use to link your CSS file?",
        options: ["Body", "Head", "Footer", "Main"],
        answer: "Head",
    },
]
function createQuiz() {
    console.log(start)
        start.setAttribute("class", "hide")
        beginTimer()
        renderQuestions()
}

start.addEventListener('click', createQuiz)
    


function beginTimer() {
    const timerEnd = setInterval(function () {
        seconds--;
        time.textContent = seconds
        if (seconds == 0)clearInterval(timerEnd)
    }, 1000);
}
function renderQuestions() {
    quizQuestion.innerHTML = ""
    quizQuestion.textContent = questions[index].quizQ
    options1.textContent = questions[index].options[0]
    options2.textContent = questions[index].options[1]
    options3.textContent = questions[index].options[2]
    options4.textContent = questions[index].options[3]
}



    function nextQuiz() {
        if (index < questions.length - 1) {
            index++;
            renderQuestions();
        }else {
            clearInterval(timerEnd);
            quizQuestion.innerHTML = "";

        }
    }
        $(document.querySelector("form").on("sumbit", function(event){
            event.preventDefault();
            let input = document.querySelector("form")[0]
            const highScore ={score: seconds, initials: input.value};
            localStorage.setItem("highScores", JSON.stringify(highScore));
        }))

// for (let i = 0; i < questions[quizQuestion].options.length; i++) {
    //     let quizOption = questions[quizQuestion].options[i]
    //     let button = document.createElement("button")
    //     button.textContent = quizOption;
    //     $(button.on("click", sumbit))
    //         $(button.attr("data-value", quizOption))
    //     }
    // let optionButton = document.createElement("button")
    




// function createQuiz()
//     for (let i = 0; i < questions.length; i++){
//     const eachQuestion = questions[i];
//     console.log(questions.Q);

//     const parentQuestion = document.createElement();
//     parentQuestion.style.display = "flex";

//     const button = document.createElement("button");
//     button.textContent = "See";

//     const h2 = document.createElement("h2")
//     h2.textContent = `${questions.quizQ} ${questions.options}`

//     const a = document.createElement("a");
//     a.setAttribute("href", `${questions.A}`);
//     a.textContent = "Answer:"

//     parentQuestion.appendChild(h2);
//     main.appendChild(parentQuestion);

//     main.addEventListener("click", function(event) {
//         if (event.target.matches("button")) {
//             console.log("clicked for", event.target.getAttribute("data-location"))
//             localStorage.setItem("requestedLocation", event.target.getAttribute("data-locataion"))
//             window.location.replace("./second-html.html")
//         }
//     }
// }
            //highScore();
            // $(start.on("click", function(){
            //     renderQuestions();
            //     beginTimer();
            // })