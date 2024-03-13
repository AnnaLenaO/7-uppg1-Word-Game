import { describe, expect, it } from '@jest/globals';

import feedback from './feedback.js';

describe('feedback()', () => {
    it('does nothing with an empty string', () => {
        const output = feedback('');

        expect(output).toBe('');
    });
});