
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

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if(playerPressed === expectedAlphabet){

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

        const currentScore = getTextElementValueById('current-score');

        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore)

    }else{
        // get the current life
        const currentLife = getTextElementValueById('current-life');
        // reduce life
        const updatedLife = currentLife - 1;
        // update life
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function play() {
    // hide everything show only the playground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame()
}

function gameOver(){
    hideElementById("play-ground");
    showElementById("final-score");

    // show final score 

}