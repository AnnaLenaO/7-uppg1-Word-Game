export default function feedback(correctWord, guessWord) {
    const correct = correctWord.toUpperCase();
    const guess = guessWord.toUpperCase();

    const correctLettersCount = {};

    correct.split('').forEach(letter => {
    correctLettersCount[letter] = (correctLettersCount[letter] || 0) + 1;
    });

    const feedback = guess.split('').map((letter, index) => {
        if (correct[index] === letter) {
            correctLettersCount[letter]--;
            return { letter, result: "correct" };
        } else if (correct.includes(letter) && correctLettersCount[letter] > 0) {
            correctLettersCount[letter]--;
            return { letter, result: "misplaced" };
        } else {
            return { letter, result: "incorrect" };
        }
    });

    return feedback;
}