let leaderboardList = document.getElementById('leaderboard-list');
let scores = JSON.parse(localStorage.getItem('reactionRaceScores')) || [];

scores.sort((a, b) => b - a);

scores.slice(0, 5).forEach((score, index) => {
    let li = document.createElement('li');
    li.innerText = `Player ${index + 1}: ${score} Points`;
    leaderboardList.appendChild(li);
});
