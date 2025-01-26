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
