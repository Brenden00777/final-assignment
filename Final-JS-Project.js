class Deck{
    constructor(suite, cardValue, cardName, storeCards , playerOnesDeck , playerTwosDeck)







    

//player one then player twos turn takes the 0 element from each players decks and compares the two values then returns the highest value to the array of the winner
turnOrder(){

}

//when html button is pressed deck shuffled and split into 2 arrays one for each player
newDeck(){

// for loop in a for loop that takes 
	let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	
    
    }













}
shuffleDeck(){
    for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}


// case 1 :
// suite = 'Hearts';
// cardValue = 2;
// cardName = 'Two of Hearts'





        






}
this.suite = suite;
this.cardValue = cardValue;
this.cardName = cardName;
this.storeCards = [];
this.playerOnesDeck = [];
this.playerTwosDeck = []; 
let suits = ["spades", "diamonds", "clubs", "hearts"];
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];













 
    
