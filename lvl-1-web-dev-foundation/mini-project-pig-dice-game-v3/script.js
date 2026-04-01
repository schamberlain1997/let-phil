//Player 1

let roundScore1 = 0
let currentScore1 = 0
const rollButton1 = document.getElementById("roll-button1") 
const bankButton1 = document.getElementById("bank-button1")
const resetButton1 = document.getElementById("reset-button1")
const currentRoll1El = document.getElementById("currentRoll1")
let roundScore1El = document.getElementById("roundScore1")
let bankedScore1El = document.getElementById("bankedScore1")

function rollDie1() {
    let dice_number1 = Math.floor(Math.random() * 6) + 1;
    if (dice_number1 === 1) {
        alert("You rolled a 1, Switch Players, no points for you this round!");  
        (function resetScore1() {
        roundScore1 = currentScore1
        })();
        currentRoll1El.textContent = `You rolled a 1, Switch Players, no points for you this round!`       
    }
     else {
      roundScore1 += dice_number1;
      currentRoll1El.textContent = `You rolled a ${dice_number1}`
    }

    
    if (roundScore1 >= 100){
        alert("Game Over: Player 1 wins, Refresh the Page to play again");
    } 
    roundScore1El.textContent = `Round Score: ${roundScore1}`;  
};








function bankScore1() { 
    currentScore1 = roundScore1;
    alert(`Score banked, Player1 Current Score: ${currentScore1}, Player 2's turn`);
    bankedScore1El.textContent = `Banked Score: ${currentScore1}`;  
}


rollButton1.addEventListener('click', rollDie1);
bankButton1.addEventListener('click', bankScore1);

roundScore1El.textContent = `Round Score: ${roundScore1}`;
bankedScore1El.textContent = `Banked Score: ${currentScore1}`;


// Player 2 

let roundScore2 = 0
let currentScore2 = 0
const rollButton2 = document.getElementById("roll-button2") 
const bankButton2 = document.getElementById("bank-button2")
const currentRoll2El = document.getElementById("currentRoll2")
let roundScore2El = document.getElementById("roundScore2")
let bankedScore2El = document.getElementById("bankedScore2")




function rollDie2() {
    let dice_number2 = Math.floor(Math.random() * 6) + 1;
    if (dice_number2 === 1) {
        alert("You rolled a 1, Switch Players, no points for you this round!"), console.log("Player 1's Turn");
        (function resetScore2() {
    roundScore2 = currentScore2 
    })();
    currentRoll2El.textContent = `You rolled a 1, Switch Players, no points for you this round!`;         
    } else {
      roundScore2 += dice_number2;
      currentRoll2El.textContent = `You rolled a ${dice_number2}`
    }
    if (roundScore2 >= 100){
        alert("Game Over: Player 2 wins, Refresh the Page to play again");
    }
    roundScore2El.textContent = `Round Score: ${roundScore2}`;      
      
};


function bankScore2() { 
    currentScore2 = roundScore2;
    alert(`Score banked, Player1 Current Score: ${currentScore2}, Player 1's turn`);
    bankedScore2El.textContent = `Banked Score: ${currentScore2}`;  
}


rollButton2.addEventListener('click', rollDie2);
bankButton2.addEventListener('click', bankScore2);


