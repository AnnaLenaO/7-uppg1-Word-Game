export default function feedback(correct, guess) {
   
    const feedback = [];

    for (let i = 0; i < guess.length; i++) {

        const obj = {};
        let key1 = "letter";
        obj[key1] = guess[i].toUpperCase();
        let key2 = "result";

        if (correct.includes(guess[i])) {
            obj[key2] = "correct";
        } else if (!correct.includes(guess[i])) {
            obj[key2] = "incorrect";
        }

        feedback.push(obj);
    }
return feedback;
}