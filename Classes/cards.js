/*
You need to write an IIFE that results in an object containing two properties Card which is a class and Suits which is an object that will hold the possible suits for the cards.

The Suits object should have exactly these 4 properties:
⦁	SPADES: ♠
⦁	HEARTS: ♥
⦁	DIAMONDS: ♦
⦁	CLUBS: ♣

Where the key is SPADES, HEARTS e.t.c. and the value is the actual symbol ♠, ♥ and so on.
The Card class should allow for creating cards, each card has 2 properties face and suit.

The valid faces are the following ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"] any other are considered invalid.

The Card class should have setters and getters for the face and suit properties, when creating a card or setting a property validations should be performed, if an invalid face or a suit not in the Suits object is passed an Error should be thrown.
*/

(function () {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['♠', '♥', '♦', '♣'];
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    };

    class Card {
        constructor(face, suit) {
            if (!validFaces.includes(face)) {
                throw new Error('Invalid Card Face!');
            }
            if (!validSuits.includes(suit)) {
                throw new Error('Invalid Card Suit!');
            }
            this.face = face;
            this.suit = suit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}())
