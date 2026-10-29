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