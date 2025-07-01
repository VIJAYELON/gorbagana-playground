let startBtn = document.getElementById('start-btn');
let clickBtn = document.getElementById('click-btn');
let playAgainBtn = document.getElementById('play-again-btn');
let gameStatus = document.getElementById('game-status');
let result = document.getElementById('result');
let scoreDisplay = document.getElementById('score');

let startTime, endTime;
let playerScore = 0;

function startGame() {
    gameStatus.innerText = 'Get Ready...';
    clickBtn.disabled = true;
    result.innerText = '';
    playAgainBtn.style.display = 'none';

    let randomDelay = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(() => {
        gameStatus.innerText = 'GO!';
        startTime = new Date().getTime();
        clickBtn.disabled = false;
    }, randomDelay);
}

function playerClick() {
    endTime = new Date().getTime();
    let reactionTime = (endTime - startTime) / 1000;

    let aiTimes = [
        (Math.random() * 0.6 + 0.2).toFixed(3),
        (Math.random() * 0.6 + 0.2).toFixed(3),
        (Math.random() * 0.6 + 0.2).toFixed(3)
    ];
    let fastestAI = Math.min(...aiTimes);

    result.innerText = `Your reaction time: ${reactionTime} seconds\n`;
    result.innerText += `AI reaction times: ${aiTimes.join(' s | ')} s\n`;

    if (reactionTime < fastestAI) {
        result.innerText += '🎉 You WIN!';
        playerScore += 1;
        saveScore(playerScore);
    } else {
        result.innerText += '❌ You LOSE!';
    }

    scoreDisplay.innerText = `Your Score: ${playerScore}`;
    clickBtn.disabled = true;
    playAgainBtn.style.display = 'inline-block';
}

function resetGame() {
    gameStatus.innerText = 'Tap "Start" to begin';
    result.innerText = '';
    clickBtn.disabled = true;
    playAgainBtn.style.display = 'none';
}

function saveScore(score) {
    let scores = JSON.parse(localStorage.getItem('reactionRaceScores')) || [];
    scores.push(score);
    localStorage.setItem('reactionRaceScores', JSON.stringify(scores));
}

startBtn.onclick = startGame;
clickBtn.onclick = playerClick;
playAgainBtn.onclick = resetGame;
