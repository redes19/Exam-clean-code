import { describe, expect, it } from 'vitest'
import { getCardValue, getCardSuit } from "../src/pocker"
import { Card, Hand, isPair, isFlush } from "../src/pocker"

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
    it('should detect a pair', () => {
        const hand: Hand = [
            { value: 9, suit: 'C' },
            { value: 9, suit: 'S' },
            { value: 5, suit: 'D' },
            { value: 3, suit: 'H' },
            { value: 2, suit: 'C' }
        ];

        expect(isPair(hand)).toBe(true);
    });

    it('should detect a flush', () => {
        const hand: Hand = [
            { value: 14, suit: 'H' },
            { value: 10, suit: 'H' },
            { value: 8, suit: 'H' },
            { value: 5, suit: 'H' },
            { value: 2, suit: 'H' }
        ];

        expect(isFlush(hand)).toBe(true);
    });
});