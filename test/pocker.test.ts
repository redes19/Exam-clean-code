import { describe, expect, it } from 'vitest'
import { getCardValue, getCardSuit, getResult, isColor } from "../src/pocker"
import { Hand, isBrelan, isSuite, getBestCombination } from "../src/pocker"

describe("Get card Value", () => {
    it.each([
        { value: 2, suit: 'C', expected: 2 },
        { value: 3, suit: 'C', expected: 3 },
        { value: 4, suit: 'C', expected: 4 }
    ] as const)("return value of card", ({ value, suit, expected }) => {
        expect(getCardValue({ value, suit })).toBe(expected)
    })

    it("return value of card", () => {
        expect(getCardValue({ value: 2, suit: 'C' })).not.toBe(3)
    })
})


describe("Get card suit", () => {
    it.each([
        { value: 2, suit: 'C', expected: 'C' },
        { value: 3, suit: 'D', expected: 'D' },
        { value: 4, suit: 'S', expected: 'S' }
    ] as const)("return value of card", ({ value, suit, expected }) => {
        expect(getCardSuit({ value, suit })).toBe(expected)
    })

    it("return suit of card", () => {
        expect(getCardSuit({ value: 2, suit: 'C' })).not.toBe('D')
    })
})

describe('poker basics', () => {
    it('detect a brelan', () => {
        const hand: Hand = [
            { value: 9, suit: 'C' },
            { value: 9, suit: 'C' },
            { value: 5, suit: 'D' },
            { value: 3, suit: 'H' },
            { value: 9, suit: 'C' }
        ];

        expect(isBrelan(hand)).toBe(true);
    });

    it('detect a suite', () => {
        const hand: Hand = [
            { value: 10, suit: 'H' },
            { value: 9, suit: 'S' },
            { value: 8, suit: 'D' },
            { value: 7, suit: 'H' },
            { value: 6, suit: 'C' }
        ];

        expect(isSuite(hand)).toBe(true);
    });

    it('detect a color', () => {
        const hand: Hand = [
            { value: 10, suit: 'H' },
            { value: 9, suit: 'H' },
            { value: 8, suit: 'H' },
            { value: 7, suit: 'H' },
            { value: 6, suit: 'H' }
        ];

        expect(isColor(hand)).toBe(true);
    });

});

describe('Get best combination', () => {
    it('return Suite when the hand is a suite', () => {
        const hand: Hand = [
            { value: 10, suit: 'H' },
            { value: 9, suit: 'S' },
            { value: 8, suit: 'D' },
            { value: 7, suit: 'H' },
            { value: 6, suit: 'C' }
        ];

        expect(getBestCombination(hand)).toBe('Suite');
    });

    it('return Brelan when the hand is a brelan', () => {
        const hand: Hand = [
            { value: 9, suit: 'C' },
            { value: 9, suit: 'C' },
            { value: 5, suit: 'D' },
            { value: 3, suit: 'H' },
            { value: 9, suit: 'C' }
        ];

        expect(getBestCombination(hand)).toBe('Brelan');
    });

    it('return None when there is neither brelan nor suite', () => {
        const hand: Hand = [
            { value: 14, suit: 'H' },
            { value: 10, suit: 'C' },
            { value: 8, suit: 'D' },
            { value: 5, suit: 'S' },
            { value: 2, suit: 'H' }
        ];

        expect(getBestCombination(hand)).toBe('None');
    });
});

describe('getResult', () => {
    it('returns the score for a suite', () => {
        expect(getResult('Suite')).toBe(40);
    });

    it('returns the score for a brelan', () => {
        expect(getResult('Brelan')).toBe(30);
    });
});
