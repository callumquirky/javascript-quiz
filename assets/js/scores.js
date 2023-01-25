createHighScores()

function createHighScores(){
    let savedHighScores = JSON.parse(localStorage.getItem('savedHighScores')) ?? [];
    for (let i=0; i<savedHighScores.length; i++) {
        let  highScore = savedHighScores[i];
        let highScoreLi = document.createElement("li");
        highScoreLi.textContent = `${highScore.initials} Score: ${highScore.score}`;
        document.getElementById("highscores").appendChild(highScoreLi);
    }
}

document.getElementById("clear").addEventListener("click", function(){
    localStorage.clear();
    createHighScores();
    document.getElementById("highscores").innerHTML="";
})