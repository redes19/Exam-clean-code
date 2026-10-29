import { describe, expect, it } from 'vitest'
import { getCardValue, getCardSuit } from "../src/pocker"

describe("Get card Value", () => {
    it("return value of card", () => {
        expect(getCardValue({ value: 2, suit: 'C' })).toBe(2)
    })

    it("return value of card", () => {
        expect(getCardValue({ value: 3, suit: 'C' })).toBe(3)
    })

    it("return value of card", () => {
        expect(getCardValue({ value: 4, suit: 'C' })).toBe(4)
    })

    it("return value of card", () => {
        expect(getCardValue({ value: 2, suit: 'C' })).not.toBe(3)
    })
})


describe("Get card suit", () => {
    it("return suit of card", () => {
        expect(getCardSuit({ value: 2, suit: 'C' })).toBe('C')
    })

    it("return suit of card", () => {
        expect(getCardSuit({ value: 3, suit: 'D' })).toBe('D')
    })

    it("return suit of card", () => {
        expect(getCardSuit({ value: 4, suit: 'H' })).toBe('H')
    })

    it("return suit of card", () => {
        expect(getCardSuit({ value: 2, suit: 'C' })).not.toBe('D')
    })
})