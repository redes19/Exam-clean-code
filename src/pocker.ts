export type CardSuit = 'C' | 'D' | 'H' | 'S';
export type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type Card = {
    value: CardValue;
    suit: CardSuit;
};

export type Hand = Card[];

export const getCardValue = (card: Card): number => {
    return card.value;
}

export const getCardSuit = (card: Card): string => {
    return card.suit;
}

export const isPair = (hand: Hand): boolean => {
    const values = hand.map(card => getCardValue(card));

    for (const value of values) {
        const count = values.filter(v => v === value).length
        if (count === 2) return true;
    }

    return false;

};

export const isFlush = (hand: Hand): boolean => {
    return hand.every(card => card.suit === hand[0].suit);
};

export const getBestCombination = (hand: Hand): 'Flush' | 'Pair' | 'None' => {
    if (isFlush(hand)) {
        return 'Flush';
    }

    if (isPair(hand)) {
        return 'Pair';
    }

    return 'None';
};