// Define the riddle inputs and their corresponding correct answers
const riddles = [
    { id: 'inputOne', answers: ['egg', 'an egg'] },
    { id: 'inputTwo', answers: ['teeth', '32 teeth'] },
    { id: 'inputThree', answers: ['mountain', 'a mountain'] },
    { id: 'inputFour', answers: ['piano', 'a piano'] },
    { id: 'inputFive', answers: ['breath'] },
    { id: 'inputSix', answers: ['footsteps', 'footstep'] },
    { id: 'inputSeven', answers: ['fire'] },
    { id: 'inputEight', answers: ['the future', 'future'] },
    { id: 'inputNine', answers: ['hole', 'a hole'] },
    { id: 'inputTen', answers: ['a coffin', 'coffin'] }
];

function checkAnswers() {
    let correctCount = 0;

    riddles.forEach(riddle => {
        const inputElement = document.getElementById(riddle.id);
        const userAnswer = inputElement.value.trim().toLowerCase();

        // Normalize the input by removing "a " or "an " if present
        const normalizedAnswer = userAnswer.replace(/^(a|an)\s+/i, '');

        // Check if the normalized answer is in the list of valid answers
        if (riddle.answers.map(ans => ans.toLowerCase()).includes(normalizedAnswer)) {
            inputElement.style.border = '2px solid green'; // Correct answer
            correctCount++;
        } else {
            inputElement.style.border = '2px solid red'; // Incorrect answer
        }
    });

    // Display "sample text" if 8 or more answers are correct
    const resultField = document.getElementById('resultField');
    if (correctCount >= 8) {
        resultField.style.display = 'inline';
    } else {
        resultField.style.display = 'none';
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
for (let key in menu){
    if (typeof menu[key] == 'number'){
    menu[key] = menu[key] *2;
    console.log(menu[key]);
}
}
let noCounter = 0;
function noAnswer(){
    noCounter++;
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const corgiGif = document.getElementById('corgiGif');
    if (noCounter == 1){
        yesButton.style.width ='200px';
        yesButton.style.height ='50px';
        yesButton.style.fontSize = '20px';
        yesButton.textContent = 'Are you sure?';
        corgiGif.style.width = '400px';
        corgiGif.src = 'corgi2.gif';
    } else if (noCounter == 2){
        yesButton.style.width ='300px';
        yesButton.style.height ='70px';
        yesButton.style.fontSize = '30px';
        yesButton.textContent = 'Really?!?!?!';
        corgiGif.style.width = '600px';
        corgiGif.src = 'corgi3.webp';
    }else if (noCounter == 3){
        yesButton.style.width ='400px';
        yesButton.style.height ='90px';
        yesButton.style.fontSize = '40px';
        yesButton.textContent = 'LAST CHANCE!!!';
        corgiGif.style.width = '800px';
        corgiGif.src = 'corgi4.webp';
    }
    
}
function yesAnswer(){
    
}
