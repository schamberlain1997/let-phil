//Player 1

let roundScore1 = 0
let currentScore1 = 0
const rollButton1 = document.getElementById("roll-button1") 
const bankButton1 = document.getElementById("bank-button1")
const resetButton1 = document.getElementById("reset-button1")

function rollDie1() {
    let dice_number1 = Math.floor(Math.random() * 6) + 1;
    if (dice_number1 === 1) {
        alert("You rolled a 1, Switch Players, no points for you this round!");  
        (function resetScore1() {
        roundScore1 = currentScore1,
        console.log("Score Reset,", `Player1 Current Score is: ${currentScore1}`,"Player 2's Turn") 
        })();
        
    }
     else {
      roundScore1 += dice_number1;
      console.log(`You rolled a ${dice_number1}`)
      console.log(`Current Score: ${roundScore1}`)
    }
    
    if (roundScore1 >= 100){
        alert("Game Over: Player 1 wins, Refresh the Page to play again");
        console.log("Game Over: Player 1 wins, Refresh the Page to play again")
    }   
};

// function resetScore1() {
//     roundScore1 = currentScore1,
//     console.log("Score Reset,", `Player1 Current Score is: ${currentScore1}`,"Player 2's Turn") 
// }    


function bankScore1() { 
    currentScore1 = roundScore1;
    console.log("Score banked, Player1 Current Score:", currentScore1, "Player 2's turn");  
}


rollButton1.addEventListener('click', rollDie1);
bankButton1.addEventListener('click', bankScore1);
// resetButton1.addEventListener('click', resetScore1); // 

//Player 2

let roundScore2 = 0
let currentScore2 = 0
const rollButton2 = document.getElementById("roll-button2") 
const bankButton2 = document.getElementById("bank-button2")
const resetButton2 = document.getElementById("reset-button2")

function rollDie2() {
    let dice_number2 = Math.floor(Math.random() * 6) + 1;
    if (dice_number2 === 1) {
        alert("You rolled a 1, Switch Players, no points for you this round!"), console.log("Player 1's Turn");
        (function resetScore2() {
    roundScore2 = currentScore2,
    console.log("Score Reset,", `Player2 Current Score is: ${currentScore2}`,"Player 1's Turn") 
    })();        
    } else {
      roundScore2 += dice_number2;
      console.log(`You rolled a ${dice_number2}`)
      console.log(`Current Score: ${roundScore2}`);
    }
    if (roundScore2 >= 100){
        alert("Game Over: Player 2 wins, Refresh the Page to play again");
        console.log("Game Over: Player 2 wins, Refresh the Page to play again")
    }    
      
};

// function resetScore2() {
//     roundScore2 = currentScore2,
//     console.log("Score Reset,", `Player2 Current Score is: ${currentScore2}`,"Player 1's Turn") 
// }    


function bankScore2() { 
    currentScore2 = roundScore2;
    console.log("Score banked, Player2 Current Score:", currentScore2, "Player 1's turn");  
}


rollButton2.addEventListener('click', rollDie2);
bankButton2.addEventListener('click', bankScore2);
// resetButton2.addEventListener('click', resetScore2);


