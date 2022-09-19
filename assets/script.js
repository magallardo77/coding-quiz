const start = document.querySelector("#startQuiz")
const create = document.querySelector("#create")
const time = document.querySelector(".time")
const question = document.querySelector("#question")
const sumbit = document.querySelector("#sumbit")

const main
let questions = [
    {
        Q: 
        CH:
        A:
    }
    {
        Q: 
        CH:
        A:
    }
    {
        Q: 
        CH:
        A:
    }
    {
        Q: 
        CH:
        A:
    }
    {
        Q: 
        CH:
        A:
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

