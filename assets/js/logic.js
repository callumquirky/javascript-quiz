let questionTitle = document.getElementById("question-title")
let questionChoices = document.getElementById("choicesList")
let userAnswer = ""
let questionCount = 0
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionScreen = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let time = 1200

function playerTimer(){
    time = 1200
    let timer = setInterval(function(){
        document.getElementById("time").innerHTML=time;
        time--;
        if (time < 0) {
            clearInterval(timer);
        }
    }, 100);
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
            if (userAnswer !== correctAnswer){
                time -= 100;
            }
            if (time < 0) {
                questionScreen.classList.toggle("hide");
                endScreen.classList.toggle("hide");
            }
            displayQuestion(questionCount)
        })
    }
}
	
startButton.addEventListener("click", function() {
    questionScreen.classList.toggle("hide")
    startScreen.classList.toggle("hide");
    displayQuestion(0);
    playerTimer();
} 
)


