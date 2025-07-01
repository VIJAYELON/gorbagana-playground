let spinBtn = document.getElementById('spin-btn');
let spinResult = document.getElementById('spin-result');

spinBtn.onclick = () => {
    spinResult.innerText = 'Spinning...';
    spinBtn.disabled = true;

    setTimeout(() => {
        let reward = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        spinResult.innerText = `You won ${reward} points! 🎉`;

        saveSpinScore(reward);

        spinBtn.disabled = false;
    }, 2000);
};

function saveSpinScore(score) {
    let scores = JSON.parse(localStorage.getItem('reactionRaceScores')) || [];
    scores.push(score);
    localStorage.setItem('reactionRaceScores', JSON.stringify(scores));
}
