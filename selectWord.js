export default function selectWord(listOfWords, lengthOfWord, repeatLetter) {
    if(!Array.isArray(listOfWords) || Array.isArray(listOfWords) && listOfWords.length === 0 || 
    listOfWords.some((element) => typeof element !== 'string') || isNaN(lengthOfWord) || 
    (repeatLetter === null || repeatLetter.trim() === '')) {
        return ('');
    } else {    
    const randomIndex = Math.floor(Math.random() * listOfWords.length);
    const word = listOfWords[randomIndex];

    return (word);
    }
}