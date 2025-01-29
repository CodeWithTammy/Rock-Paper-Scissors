//Game Logic

const game = ()=>{
    let pscore = 0;//playerscore
    let cscore = 0;//computer score
    let moves = 0;//moves

    const playGame = ()=>{
        //rock,paper,scissors buttons
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        //array of the player options
        const playerOpt = [rockBtn,paperBtn,scissorsBtn];
        //array of the computers options
        const compOpt = ['rock','paper','scissors'];

        //Start playing the game
        //for each player option add a event listener to the button
        playerOpt.forEach(opt =>{
            opt.addEventListener('click',function(){

                //Initialize the movescount element
                const movesLeft = document.querySelector('.movescount');
                //Whenever a button is click the moves are increased by one
                moves++;

                movesLeft.innerText = `Moves Left: ${10 - moves}`;//the moves are calculated by 
                //subtracting from the default total amount of moves

                const choiceNum = Math.floor(Math.random()*3);
                const compChoice = compOpt[choiceNum]//randomizes the computers option in the array

                winner(this.innerText,compChoice);

                if(moves==10){//if the moves equal to 10 then the game is over
                    gameOver(playerOpt,movesLeft);
                }

            })
        })

    
    }
    //the winner function takes two parameters
    const winner = (player, computer)=>{
        //initializing of variables
        const result = document.querySelector('.result');
        const playerScore = document.querySelector('#playerscorecount');
        const computerScore = document.querySelector('#compscore-count');
        
        //conversion to lowercase
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player===computer){
            result.textContent = 'Tie'
        }
        else if(player=='rock'){
            if(computer=='paper'){
                result.textContent = 'Computer Won!';
                cscore++;
                computerScore.textContent = cscore;
            }else{
                result.textContent = 'You Won!';
                pscore++;
                playerScore.textContent = pscore;
            }
        }else if(player=='paper'){
            if(computer=='scissors'){
                result.textContent = 'Computer Won!'
                cscore++;
                computerScore.textContent = cscore;
            }else{
                result.textContent = 'You Won!';
                pscore++;
                playerScore.textContent = pscore;
            
            }
        }else if(player=='scissors'){
            if(computer=='rock'){
                result.textContent = 'Computer Won!';
                cscore++;
                computerScore.textContent = cscore;
            }else{
                result.textContent = 'You Won!';
                pscore++;
                playerScore.textContent = pscore;
            }
        }
    }

    const gameOver = (playerOpt,movesLeft)=>{

        const chooseMovesTitle = document.querySelector('#choose-title');
        const result = document.querySelector('.result');
        const reload = document.querySelector('.reload');
        //for each button we should hide them when the game is over
        playerOpt.forEach(option=>{
            option.style.display = 'none';
        })
        //change the choose move text to game over
        chooseMovesTitle.innerText = 'Game Over!';
        //hide the amount of move left when game is over
        movesLeft.style.display = 'none';

        //if player score is greater than the computer score
        //then the player wins
        if(pscore > cscore){
            result.style.fontSize = '2rem';
            result.innerText = 'You won the game!'
            result.style.color = 'wheat';
        }
        //vice versa
        else if(pscore < cscore){
            result.style.fontSize = '2rem';
            result.innerText = 'You lost the game!'
            result.style.color = 'red';
        }else{
            //player and computer ties
            result.style.fontSize = '2rem';
            result.innerText = 'Game Tied'
            result.style.color = 'blue';
        }
        //show a restart button to restart the game
        reload.innerText = 'Restart';
        reload.style.display = 'flex'
        reload.addEventListener('click',()=>{
            window.location.reload();
        })
    }
    //call the function
    playGame();
}
//call the function
game();