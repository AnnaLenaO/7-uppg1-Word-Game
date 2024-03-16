function getWordList(listOfWords, lengthOfWord, repeat) {

    const filteredWords = listOfWords.filter((word) => word.length === lengthOfWord);
    const wordList = [];

    filteredWords.forEach(word => {
        const uniqueChars = new Set(word);
        if ((repeat && uniqueChars.size < word.length) || (!repeat && uniqueChars.size === word.length)) {
            wordList.push(word);
        }
    });

    return wordList.length ? wordList : [listOfWords[Math.floor(Math.random() * listOfWords.length)]];
}

export default function selectWord(listOfWords, lengthOfWord, repeatLetter) {

    if (!Array.isArray(listOfWords) || !listOfWords.length || listOfWords.some((word) => typeof word !== 'string') || 
        isNaN(lengthOfWord) || repeatLetter === null || !repeatLetter.trim()) {
        return ('');
    }

    if (!listOfWords.some(word => word.length === lengthOfWord)) {
        return listOfWords[Math.floor(Math.random() * listOfWords.length)];
    }

    const repeat = repeatLetter.trim() === 'repeat';
    const wordList = getWordList(listOfWords, lengthOfWord, repeat);
    return wordList[Math.floor(Math.random() * wordList.length)];
}