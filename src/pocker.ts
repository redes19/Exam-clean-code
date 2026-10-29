export type CardSuit = 'C' | 'D' | 'H' | 'S';
export type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type Card = {
    value: CardValue;
    suit: CardSuit;
};

export type Hand = Card[];

export const getCardValue = (card: Card): number => {
    return card.value;
};

export const getCardSuit = (card: Card): string => {
    return card.suit;
};

export const isBrelan = (hand: Hand): boolean => {
    const values = hand.map(card => getCardValue(card));

    for (const value of values) {
        const count = values.filter(v => v === value).length;
        if (count === 3) return true;
    }

    return false;
};

export const isSuite = (hand: Hand): boolean => {
    if (hand.length !== 5) return false;

    const values = [...hand.map(card => getCardValue(card))].sort((a, b) => a - b);
    const uniqueValues = [...new Set(values)];

    if (uniqueValues.length !== 5) return false;

    return uniqueValues.every((value, index) => index === 0 || value === uniqueValues[index - 1] + 1);
};

export const getBestCombination = (hand: Hand): 'Suite' | 'Brelan' | 'None' => {
    if (isSuite(hand)) {
        return 'Suite';
    }

    if (isBrelan(hand)) {
        return 'Brelan';
    }

    return 'None';
};