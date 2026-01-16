const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// roll die function, get randome number between 1 and 6
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    scoreTracker[roll]++; // increment the score for the rolled number
    console.log(`You rolled a ${roll}`);
    return roll;
}

function displayScores() {
    console.log("Current Scores:");
    for (const roll in scoreTracker) {
        console.log(`${roll}: ${scoreTracker[roll]}`);
    }
}

// Simulate rolling the die multiple times
for (let i = 0; i < 100; i++) {
    rollDie();
}

// display final scores
displayScores();
