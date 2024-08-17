
function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the string
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText= alphabet;

    // set background color based on the radom alphabet
    addBackgroundColorById(alphabet)
}


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key
    console.log(playerPressed)

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if(playerPressed === expectedAlphabet){

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

    }else{
        console.log('you missed, you lost a life')
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}