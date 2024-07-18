let randomNumber=parseInt(Math.random()*100+1);

const sumbit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p =document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    sumbit.addEventListener('click',function(e){
        e.preventDefault(); 
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a valid number')    
    }
    else if(guess>100){
        alert('please enter a valid number')    
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`);
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is high`);
    }

}

function displayGuess(guess){
    userInput.value ='';
    guessSlot.innerHTML+=`${guess} ,`
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
     
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function newGame(){
    userInput.value='';
    userInput.setAttribute('disabled',' ');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame">start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function endGame(){
    const newgamebutton=document.querySelector('#newgame');
    newgamebutton.addEventListener('click',function(){
        randomNumber=parseInt(Math.random()*100+1);
        let prevGuess = [];
        let numGuess = 1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;

    })
}