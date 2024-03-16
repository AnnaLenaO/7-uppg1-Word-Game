export default function feedback(correctWord, guessWord) {
    const correct = correctWord.toUpperCase();
    const guess = guessWord.toUpperCase();

    const feedback = guess.split('').map((letter, index) => {
        if (!correct.includes(letter)) {
            return { letter, result: "incorrect" };
        } else if (correct[index] === letter) {
            return { letter, result: "correct" };
        } else {
            return { letter, result: "misplaced" };
        }
    });

    return feedback;
}