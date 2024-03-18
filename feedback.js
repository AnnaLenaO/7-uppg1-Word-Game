export default function feedback(correctWord, guessWord) {
    const correct = correctWord.toUpperCase();
    const guess = guessWord.toUpperCase();

    const lettersCount = {};
    
    correct.split('').forEach((letter) => {
    lettersCount[letter] = (lettersCount[letter] || 0) + 1;
    });

    guess.split('').map((letter, index) => {
    if (correct[index] === letter) {
        lettersCount[letter]--;
    }
    });

    const feedback = guess.split('').map((letter, index) => {
        if (correct[index] === letter) {
            return { letter, result: "correct" };
        } else if (correct.includes(letter) && lettersCount[letter] > 0) {
            lettersCount[letter]--;
            return { letter, result: "misplaced" };
        } else {
            return { letter, result: "incorrect" };
        }
    });

    return feedback;
}