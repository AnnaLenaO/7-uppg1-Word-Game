import { describe, expect, it } from '@jest/globals';

import feedback from './feedback.js';

/*
Defenition: 
A function takes two strings with text as parameters. 
Evaluates which letters from one string (guess) that exists in the other string (correct)
& if the index for the letters is the same in both strings. 
Output is an array with one object for each guessed letter. 
Each object contains {letter: the letter, result: value}. 
The value can be either 'incorrect' if the letter does not exists in the other correct string, 
'misplaced' if the letter exists but with different index, or 
'correct' if the letter exists with the same index as in the other correct string. 

Ex 1: 'FRUIT', 'FRUIT' -> [
    {letter: 'F', result: 'correct'}, {letter: 'R', result: 'correct'}, 
    {letter: 'U', result: 'correct'}, {letter: 'I', result: 'correct'}, 
    {letter: 'T', result: 'correct'}
    ]

Ex 2: 'PEAR', 'KIWI' -> [
    {letter: 'K', result: 'incorrect'}, {letter: 'I', result: 'incorrect'}, 
    {letter: 'W', result: 'incorrect'}, {letter: 'I', result: 'incorrect'}
    ]

Ex 3: 'PeAR', 'kiWi' -> [
    {letter: 'K', result: 'incorrect'}, {letter: 'I', result: 'incorrect'}, 
    {letter: 'W', result: 'incorrect'}, {letter: 'I', result: 'incorrect'}
    ]

Ex 4: 'Orange', 'orGans' -> [
    {letter: 'O', result: 'correct'}, {letter: 'R', result: 'correct'}, 
    {letter: 'G', result: 'misplaced'}, {letter: 'A', result: 'misplaced'}, 
    {letter: 'N', result: 'misplaced'}, {letter: 'S', result: 'incorrect'}
    ] 

Ex 5: 'Papaya', 'bannaa' -> [
    {letter: 'B', result: 'incorrect'}, {letter: 'A', result: 'correct'}, 
    {letter: 'N', result: 'incorrect'}, {letter: 'A', result: 'correct'}, 
    {letter: 'N', result: 'missplaced'}, {letter: 'A', result: 'correct'}
    ] 
*/

describe('feedback()', () => {
    it('does nothing with two empty strings', () => {
        const output = feedback('', '');

        expect(output).toStrictEqual([]);
    });

    //To test that nothing happens when there is no guessing 
    //& only a correct string
    it('does nothing with one string & one empty string', () => {
        const output = feedback('Hello', '');

        expect(output).toStrictEqual([]);
    });

    //Ex 1:
    //To test that output only contains result value 'correct'
    //when the guessing is 100% correct
    it('creates array with correct object parameter values when only correct letters', () => {
        const output = feedback('FRUIT', 'FRUIT');

        expect(output).toStrictEqual([
            { letter: 'F', result: 'correct' }, { letter: 'R', result: 'correct' },
            { letter: 'U', result: 'correct' }, { letter: 'I', result: 'correct' },
            { letter: 'T', result: 'correct' }
        ]);
    });

    //Ex 2:
    //To test that output only contains result value 'incorrect'
    //when the guessing is 100% incorrect
    /*it('creates array with correct object parameter values when only incorrect letters', () => {
        const output = feedback('PEAR', 'KIWI');

        expect(output).toStrictEqual([
            {letter: 'K', result: 'incorrect'}, {letter: 'I', result: 'incorrect'}, 
            {letter: 'W', result: 'incorrect'}, {letter: 'I', result: 'incorrect'} 
        ]);
    });*/

    //Ex 3:
    //To test that output only contains uppercase letters when mixed input
    /*it('creates array with correct object letters of only Upper Case letters', () => {
        const output = feedback('PeAR', 'kiWi');

        expect(output).toStrictEqual([
            {letter: 'K', result: 'incorrect'}, {letter: 'I', result: 'incorrect'}, 
            {letter: 'W', result: 'incorrect'}, {letter: 'I', result: 'incorrect'}
        ]);
    });*/

    //Ex 4:
    //To test correct output for a partly correct guessing 
    /*it('creates array with correct object parameter values when all three values exists', () => {
        const output = feedback('Orange', 'orGans');

        expect(output).toStrictEqual([
            {letter: 'O', result: 'correct'}, {letter: 'R', result: 'correct'}, 
            {letter: 'G', result: 'misplaced'}, {letter: 'A', result: 'misplaced'}, 
            {letter: 'N', result: 'misplaced'}, {letter: 'S', result: 'incorrect'}
        ]);

    //Ex 5:
    //To test correct output when several equal letters gives both 'correct'
    //& 'missplaced'.  
    /*it('creates array with correct object parameter values when several equal letters', () => {
        const output = feedback('Papaya', 'bannaa');

        expect(output).toStrictEqual([
            {letter: 'B', result: 'incorrect'}, {letter: 'A', result: 'correct'}, 
            {letter: 'N', result: 'incorrect'}, {letter: 'A', result: 'correct'}, 
            {letter: 'N', result: 'missplaced'}, {letter: 'A', result: 'correct'}
        ]);
    });*/
});