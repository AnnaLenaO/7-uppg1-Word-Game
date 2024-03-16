function noRepeat(listOfWords, lengthOfWord) {
    const noRepeatList = [];
    
    const newList = listOfWords
    .filter(((word) => word.length === lengthOfWord))
    .map((word) => word.split('', lengthOfWord))
    
    newList.forEach((word) => {
        if ((word.filter((item, index, array) => array.indexOf(item) === index).length) === word.length) {
            noRepeatList.push(word.join(''));
        }
    });

    if(noRepeatList.length === 0) {
        const randomIndex = Math.floor(Math.random() * listOfWords.length);
        const correctWord = listOfWords[randomIndex];
        return correctWord;

    } else {
        const randomIndex = Math.floor(Math.random() * noRepeatList.length);
        const correctWord = noRepeatList[randomIndex];
        return correctWord;
    }
}

function repeat(listOfWords, lengthOfWord) {
    const repeatList = [];
    
    const newList = listOfWords
    .filter(((word) => word.length === lengthOfWord))
    .map((word) => word.split('', lengthOfWord))
    
    newList.forEach((word) => {
        if ((word.filter((item, index, array) => array.indexOf(item) === index).length) < word.length) {
            repeatList.push(word.join(''));
        }
    });

    if(repeatList.length === 0) {
        const randomIndex = Math.floor(Math.random() * listOfWords.length);
        const correctWord = listOfWords[randomIndex];
        return correctWord;

    } else {
        const randomIndex = Math.floor(Math.random() * repeatList.length);
        const correctWord = repeatList[randomIndex];
        return correctWord;
    }
}


export default function selectWord(listOfWords, lengthOfWord, repeatLetter) {

    if (!Array.isArray(listOfWords) || Array.isArray(listOfWords) && listOfWords.length === 0 || 
    listOfWords.some((element) => typeof element !== 'string') || isNaN(lengthOfWord) || 
    (repeatLetter === null || repeatLetter.trim() === '')) {
        return ('');

    } else if ((listOfWords.filter((word) => word.length === lengthOfWord)).length === 0) { 
        const randomIndex = Math.floor(Math.random() * listOfWords.length);
        const correctWord = listOfWords[randomIndex];
        return correctWord;

    } else if (repeatLetter === 'noRepeat') {
        return noRepeat(listOfWords, lengthOfWord);

    } else if (repeatLetter === 'repeat') {
        return repeat(listOfWords, lengthOfWord);
    }
}