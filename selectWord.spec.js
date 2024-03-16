import { describe, expect, it } from '@jest/globals';

import selectWord from './selectWord.js';

/*
Definition: 
A function takes three parameters: one list of words, 
one number for desired length of a word to guess, 
one string that either is 'repeat' or 'noRepeat' of the letters in a word. 
Output is a randomly selected word according to the chosen criterias abowe. 
If no word exists that meets the chosen criterias the situation shall be
handled in a well defined way. One suggestion is that the function returns
a randomly selected word & throws an error. 

Ex: listOfWords = ['FRUIT', 'BANANA', 'ORANGE', 'TANGELO', 'PEAR', 'PAPAYA', 
                    'APPLE', 'LEMON', 'APRICOT', 'BABACO', 'LIME', 'CAROB', 
                    'DATES', 'EMBLICA', 'GAMBOGE', 'GENIP', 'GOUMI', 'PLUM',
                    'HUITO', 'IMBE', 'KAKADU', 'KASTURI', 'MARANG', 'OKRA',
                    'PRICKLY', 'MULBERRY', 'BEECHNUT', 'CALABASH']

4 - 8 letters
Only one word with 6 letters & no repeating letters
No words with 4, 7 letters & repeating letters.
No words with 8 letters & no repeating letters. 

Desired length
Ex 1: listOfWords, 4, 'noRepeat' -> output string toHaveLength(4)

No repeating letters
Ex 2: listOfWords, 6, 'noRepeat' -> 'ORANGE'

Repeating letters 
EX 3: listOfWords, 6, 'repeat' -> 'BANANA' || 'PAPAYA' || 'BABACO' || 'KAKADU' || 'MARANG'

Handling invalid length of word
Ex 4: listOfWords, 10, 'repeat' -> errorMessage, listOfWord.toContain(output string)

Handling invalid match for repeating letters 
Ex 5: listOfWords, 4, 'repeat' -> listOfWord.toContain(output string)

Handling invalid match for no repeating letters 
Ex 6: listOfWords, 8, 'noReepeat' -> listOfWord.toContain(output string)

Randomly selected word
Ex. 7: listOfWords, 7, 'noRepeat' -> expect(data).toMatchInlineSnapshot() to FAIL TEST!

No other tests for randomly selected words because it would most likely need
statistical measurements beyound Jest tests. 
*/

const listOfWords = ['GRAPE', 'BANANA', 'ORANGE', 'TANGELO', 'PEAR', 'PAPAYA', 
                        'APPLE', 'LEMON', 'APRICOT', 'BABACO', 'LIME', 'CAROB', 
                        'DATES', 'EMBLICA', 'GAMBOGE', 'GENIP', 'GOUMI', 'PLUM',
                        'HUITO', 'IMBE', 'KAKADU', 'KASTURI', 'MARANG', 'OKRA',
                        'PRICKLY', 'MULBERRY', 'BEECHNUT', 'CALABASH'];

describe('selectWord()', () => {
    it('does nothing with an empty array', () => {
        const output = selectWord([]);

        expect(output).toStrictEqual('');
    });

    it('does nothing with an example of invalid array', () => {
        const output = selectWord('');

        expect(output).toStrictEqual('');
    });

    it('does nothing with invalid elements in array', () => {
        const output = selectWord([, , 0, ,]);

        expect(output).toStrictEqual('');
    });

    it('does nothing with a non valid length parameter', () => {
        const output = selectWord(listOfWords, '?');

        expect(output).toStrictEqual('');
    });

    it('does nothing with an empty string for repeat or noRepeat', () => {
        const output = selectWord(listOfWords, 3, '');

        expect(output).toStrictEqual('');
    }); 

    it('does nothing with a string with only white space for repeat or noRepeat', () => {
        const output = selectWord(listOfWords, 3, ' ');

        expect(output).toStrictEqual('');
    });

    it('does nothing with a string with value null for repeat or noRepeat', () => {
        const output = selectWord(listOfWords, 3, null);

        expect(output).toStrictEqual('');
    })

    ///To test that output contains a word from the listOfWords 
    it('returns valid word when called with a list of words', () => {
        const output = selectWord(listOfWords, 5, 'noRepeat');
    
        expect(listOfWords).toContain(output);
    });

    //Ex 1:
    //To test that output contains a word with desired length
    it('returns valid word with desired length', () => {
        const output = selectWord(listOfWords, 4, 'noRepeat');

        expect(output).toHaveLength(4);
    });

    //Ex 2:
    //To test that output contains a word with no repeating letters
    it('returns valid word with no repeating letters', () => {
        const output = selectWord(listOfWords, 6, 'noRepeat');

        expect(output).toStrictEqual('ORANGE');
    });

    //Ex 3:
    //To test that output contains a word with repeating letters
    it('returns valid word with repeating letters', () => {
        const output = selectWord(listOfWords, 6, 'repeat');

        expect(output).toMatch(/^.{1}A|^.{3}A/);
    });

    //Ex 4: 
    //To test that output contains a word &   
    //throw an error message when no word with the desired length exists
    it('returns valid word & throws error message when no word with desired length', () => {
        const output = selectWord(listOfWords, 10, 'repeat');
        
        expect(listOfWords).toContain(output);
    });

    //Ex 5: 
    //To test that output contains a word when the only word with the desired length 
    //does not match the criteria of repeating letters. The game shall return a suggested
    //word when no word match the desired criterias. 
    it('returns valid word & throws error message when noRepeating letters not match length', () => {
        const output = selectWord(listOfWords, 4, 'repeat');
        
        expect(listOfWords).toContain(output);
    });

    //Ex 6: 
    //To test that output contains a word when the only word with the desired length 
    //does not match the criteria of noRepeating letters. The game shall return a suggested
    //word when no word match the desired criterias.
    it('returns valid word & throws error message when noRepeating letters not match length', () => {
        const output = selectWord(listOfWords, 8, 'noRepeat');
        
        expect(listOfWords).toContain(output);
    });

    //EX 7:
    //To test that output in most cases is different from the last 
    //test run, to indicate working functionality for randomly selected word
    it('returns a valid randomly selected word to NOT match InlineSnapshot & TEST SHALL FAIL!', () => {
        const output = selectWord(listOfWords, 7, 'noRepeat');

        expect(output).toMatchInlineSnapshot(`"TANGELO"`);
    });
});