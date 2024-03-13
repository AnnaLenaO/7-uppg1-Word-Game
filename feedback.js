export default function feedback(correctWord, guessWord) {
    const correct = correctWord.toUpperCase();
    const guess = guessWord.toUpperCase();

    const feedback = [];

    for (let i = 0; i < guess.length; i++) {

        const obj = {};
        let key1 = "letter";
        obj[key1] = guess[i];
        let key2 = "result";

        if (!correct.includes(guess[i])) {
            obj[key2] = "incorrect";
        } else if (correct.indexOf(guess[i]) === guess.indexOf(guess[i]) ) {
            obj[key2] = "correct";
        } else {
            obj[key2] = "misplaced";
        }

        feedback.push(obj);
    }
return feedback;
}