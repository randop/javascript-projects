const THE_CARDS = [
    1.1, 1.2, 1.3, 1.4,
    2.1, 2.2, 2.3, 2.4,
    3.1, 3.2, 3.3, 3.4,
    4.1, 4.2, 4.3, 4.4,
    5.1, 5.2, 5.3, 5.4,
    6.1, 6.2, 6.3, 6.4,
    7.1, 7.2, 7.3, 7.4,
    8.1, 8.2, 8.3, 8.4,
    9.1, 9.2, 9.3, 9.4,
    10.1, 10.2, 10.3, 10.4,
    11.1, 11.2, 11.3, 11.4,
    12.1, 12.2, 12.3, 12.4,
    13.1, 13.2, 13.3, 13.4
];
const THE_SEATS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let players = [];

const THE_PLAYER = {
    id: 0,
    cards: [],
    firstCard: 0,
    secondCard: 0,
    inBetweenCard: 0,
    win: false,
    didDrawCard: false
};

function playGame() {
    var playersArray = [];
    var deck = shuffleArray(THE_CARDS);    
    for(var i=1, len=THE_SEATS.length; i<=len; i++) {
        var play = {
            id: i,
            cards: [],
            firstCard: 0,
            secondCard: 0,
            inBetweenCard: 0,
            win: false,
            didDrawCard: false
        };

        /***
         * ==========================
         * draw 2 cards
         */
        var firstCard = deck.pop();
        play.firstCard = firstCard;
        
        var secondCard = deck.pop();
        play.secondCard = secondCard;
                
        var cards = [parseInt(firstCard), parseInt(secondCard)].sort(function(a, b){return a - b});
        play.cards.push(cards[0]);
        play.cards.push(cards[1]);
        /***
         * ==========================
         */

        var inBetween = deck.pop();
        play.inBetweenCard = inBetween;
        cards.push(parseInt(inBetween));        
        play.cards.push(cards[2]);
        
        if ( cards[2]<cards[1] && 
            cards[2]>cards[0] ) {
            play.win = true;
        }        

        playersArray.push(play);
    }
    return playersArray;
}

function copyArray(array) {
    var arrayCopy = [];
    for(var i=0,len=array.length;i<len;i++) {
        arrayCopy[i] = array[i];
    }
    return arrayCopy;
}

function drawCard(cardArray, numberOfCards) {
    var cardArrayCopy = copyArray(cardArray);
    var cards = [];
    for(var i=0;i<numberOfCards;i++) {
        cards.push(cardArrayCopy.pop());
    }
    return cards;
}

function shuffleArray(array) {
    var arrayCopy = copyArray(array);
    for (var i = arrayCopy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrayCopy[i];
        arrayCopy[i] = arrayCopy[j];
        arrayCopy[j] = temp;
    }
    return arrayCopy;
}

