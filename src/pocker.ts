export type CardSuit = 'C' | 'D' | 'H' | 'S';
export type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export type Card = {
    value: CardValue;
    suit: CardSuit;
};

export type Hand = Card[];

const hands: Card[][] = [
    [
        { value: 14, suit: 'H' },
        { value: 13, suit: 'H' },
        { value: 12, suit: 'H' },
        { value: 11, suit: 'H' },
        { value: 10, suit: 'H' }
    ],
    [
        { value: 9, suit: 'C' },
        { value: 9, suit: 'S' },
        { value: 5, suit: 'D' },
        { value: 3, suit: 'H' },
        { value: 2, suit: 'C' }
    ],
    [
        { value: 7, suit: 'D' },
        { value: 7, suit: 'H' },
        { value: 7, suit: 'S' },
        { value: 4, suit: 'C' },
        { value: 4, suit: 'D' }
    ]
];

export const getCardValue = (card: Card): number => {
    return card.value;
}

export const getCardSuit = (card: Card): string => {
    return card.suit;
}

export const isPair = (hand: Hand): boolean => {
    return true;
};

export const isFlush = (hand: Hand): boolean => {
    return true;
};