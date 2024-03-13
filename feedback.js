export default function feedback(correct, guess) {
   
    const feedback = [];

    for (let i = 0; i < guess.length; i++) {

        const obj = {};
        let key1 = "letter";
        obj[key1] = guess[i];
        let key2 = "result";

        if (correct.includes(guess[i])) {
            obj[key2] = "correct";
        }

        feedback.push(obj);
    }
return feedback;
}