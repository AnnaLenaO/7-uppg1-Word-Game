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

Ex: listOfWords = ['FRUIT', 'BANANA', 'ORANGE', 'KIWI', 'PEAR', 'PAPAYA', 
                    'APPLE', 'LEMON', 'APRICOT']

Desired length
Ex 1: listOfWords, 4, 'noRepeat' -> output string toHaveLength(4)

No repeating letters
Ex 2: listOfWords, 7, 'noRepeat' -> 'APRICOT'

Repeating letters 
EX 3: listOfWords, 6, 'repeat' -> 'BANANA' or 'PAPAYA'

Handling invalid length of word
Ex 4: listOfWords, 3, 'repeat' -> errorMessage, listOfWord.toContain(output string)

Handling invalid match for repeating letters 
Ex 5: listOfWords, 7, 'repeat' -> errorMessage, listOfWord.toContain(output string) 

No tests for randomly selected words because it would most likely need
statistical measurements beyound Jest tests. 
*/

const listOfWords = ['FRUIT', 'BANANA', 'ORANGE', 'KIWI', 'PEAR', 'PAPAYA', 
'APPLE', 'LEMON', 'APRICOT'];

describe('selectWord()', () => {
    it('does nothing with three empty parameters', () => {
        const output = selectWord([], undefined, '');

        expect(output).toStrictEqual('');
    });

    ///To test that output contains a word from the listOfWords
    //when the function is called with three valid parameters 
    /*it('returns valid word when called with only a list of words', () => {
        const output = selectWord(listOfWords, 5, 'noRepeat');

        expect(listOfWords).toContain(output);
    });*/

    //Ex 1:
    //To test that output contains a word with desired length
    /*it('returns valid word with desired length', () => {
        const output = selectWord(listOfWords, 4, 'noRepeat');

        expect(output).toHaveLength(4);
    });*/

    //Ex 2:
    //To test that output contains a word with no repeating letters
    /*it('returns valid word with no repeating letters', () => {
        const output = selectWord(listOfWords, 7, 'noRepeat');

        expect(output).toStrictEqual('APRICOT');
    });*/

    //Ex 3:
    //To test that output contains a word with repeating letters
    /*it('returns valid word with repeating letters', () => {
        const output = selectWord(listOfWords, 6, 'repeat');

        expect(output).toMatch(/^.{1}A|^.{3}A|^.{5}A/);
    });*/

    //Ex 4: 
    //To test that output contains a word &   
    //throw an error message when no word with the desired length exists
    /*it('returns valid word & throws error message when no word with desired length', () => {
        
    });*/

    //Ex 5: 
    //To test that output contains a word & 
    //throw an error message when the only word with the desired length 
    //does not match the criteria of repeating letters
    /*it('returns valid word & throws error message when repeating letters not match length', () => {

    });*/
});