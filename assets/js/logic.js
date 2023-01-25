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
let time = 6000;
let finalScore = 0;
let gameIsOver = false;
let submitButton = document.getElementById("submit");
let userInitials = document.getElementById("initials");
let savedHighScores = JSON.parse(localStorage.getItem('savedHighScores')) ?? [];

function playerTimer(){
    time = 6000;
    let timer = setInterval(function(){
        document.getElementById("time").innerHTML=time;
        time--;
        if (time < 0) {
            clearInterval(timer);
        }
        if (gameIsOver == true){
            clearInterval(timer);
        }
    }, 100);
    return time;
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
            document.getElementsByClassName("correct").innerHTML ="";
            document.getElementsByClassName("incorrect").innerHTML ="";
            if (userAnswer === correctAnswer){
                questionCount++;
                userScore++;
                let correct = document.createElement("h3");
                correct.setAttribute("class", "correct")
                correct.innerHTML="CORRECT"
                questionScreen.appendChild(correct)

            }
            if (userAnswer !== correctAnswer){
                time -= 100;
                let incorrect = document.createElement("h3");
                incorrect.setAttribute("class", "incorrect")
                incorrect.innerHTML="INCORRECT: -100!"
                questionScreen.appendChild(incorrect)
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
    gameIsOver = true;
    questionScreen.classList.toggle("hide");
    endScreen.classList.toggle("hide");
    finalScore = userScore * time;
    displayFinalScore.textContent = finalScore;
}

function saveHighScore(){
    let userFinalScore = {
        initials: userInitials.value,
        score: finalScore,
    }
    console.log(savedHighScores)
    savedHighScores.push(userFinalScore)
    console.log(savedHighScores)

    localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores))
}
	
startButton.addEventListener("click", function(){
    questionScreen.classList.toggle("hide")
    startScreen.classList.toggle("hide");
    displayQuestion(0);
    playerTimer();
} 
)

submitButton.addEventListener("click", function(){
    saveHighScore();
    window.location.href = "highscores.html"
})
