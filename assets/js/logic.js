let questionTitle = document.getElementById("question-title");
let questionChoices = document.getElementById("choicesList");
let userAnswer = "";
let questionCount = 0;
let userScore = 0;
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionScreen = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let displayFinalScore = document.getElementById("final-score");
let time = 1200;
let finalScore = 0;

function playerTimer(){
    time = 1200;
    let timer = setInterval(function(){
        document.getElementById("time").innerHTML=time;
        time--;
        if (time < 0) {
            clearInterval(timer);
        }
        if (questionCount > questions.length-1){
            clearInterval(timer);
        }
    }, 100);
}

function displayQuestion(questionCount){
    userAnswer = "";
    questionTitle.innerHTML="";
    questionChoices.innerHTML="";
    let correctAnswer = questions[questionCount].answer;
    questionTitle.textContent=questions[questionCount].question;
    for (let i=0; i<questions[questionCount].choices.length; i++) {
        let choice = questions[questionCount].choices[i];
        let choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        questionChoices.appendChild(choiceButton);
        choiceButton.addEventListener("click", function() {
            userAnswer = choiceButton.textContent;
            console.log(questionCount);
            console.log(questions.length)
            if (userAnswer === correctAnswer){
                questionCount++;
                userScore++;
            }
            if (userAnswer !== correctAnswer){
                time -= 100;
            }
            if (time < 0) {
                gameOver();
            }
            if (questionCount > questions.length-1){
                gameOver();
            }
                else {
                    displayQuestion(questionCount);
                }
        })
    }
}

function gameOver(){
    questionScreen.classList.toggle("hide");
    endScreen.classList.toggle("hide");
    finalScore = userScore * time;
    displayFinalScore = finalScore;
}
	
startButton.addEventListener("click", function() {
    questionScreen.classList.toggle("hide")
    startScreen.classList.toggle("hide");
    displayQuestion(0);
    playerTimer();
} 
)


