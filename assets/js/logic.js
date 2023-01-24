let questionTitle = document.getElementById("question-title")
let questionChoices = document.getElementById("choicesList")
let userAnswer = ""
let questionCount = 0
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");

function playerTimer(){

}

function displayQuestion(questionCount){
    userAnswer = "";
    questionTitle.innerHTML=""
    questionChoices.innerHTML=""
    let correctAnswer = questions[questionCount].answer
    console.log(correctAnswer);
    questionTitle.textContent=questions[questionCount].question
    for (let i=0; i<questions[questionCount].choices.length; i++) {
        let choice = questions[questionCount].choices[i];
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        questionChoices.appendChild(choiceButton);
        choiceButton.addEventListener("click", function() {
            userAnswer = choiceButton.textContent;
            console.log(userAnswer);
            if (userAnswer === correctAnswer){
                questionCount++
            }
            displayQuestion(questionCount)
        })
    }
}
	
startButton.addEventListener("click", function() {
    document.getElementById("questions").classList.toggle("hide")
    startScreen.classList.toggle("hide");
    displayQuestion(0);
} 
)


