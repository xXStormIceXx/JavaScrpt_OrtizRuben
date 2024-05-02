const BACK_CARD = "https://deckofcardsapi.com/static/img/back.png";
const DEALER_PAUSE = 1500;

document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    async init() {
      await this.shuffleDeck();
      await this.deal();
    },
    async shuffleDeck() {
      let resp = await fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${this.deckSize}`);
      this.deck = await resp.json();
    },
    //Reparto inicial de cartas 2 para el PC y dos para el Jugador
    async deal() {
      //// Primero al jugador, luego a la PC, luego al jugador, luego a la PC
      this.playerCards.push(await this.drawCard());
      //para el Dealer, se entrega la primera carta
      let newcard = await this.drawCard();
      newcard.showback = true;
      this.pcCards.push(newcard);
      this.playerCards.push(await this.drawCard());
      this.pcCards.push(await this.drawCard());
    },
    async drawCard(count=1) {
      let resp = await fetch(`https://www.deckofcardsapi.com/api/deck/${this.deck.deck_id}/draw/?count=${count}`);
      let cardArr = await resp.json();
      let card = cardArr.cards[0];
      card.title = `${card.value} of ${card.suit}`;
      return card;
    },
    getCount(hand) {
      /*Tener en cuenta que esto no maneja adecuadamente un caso en el que tengo 3 ases. */
      let result = {};
      //primero haremos bajo, todos los 1
      let lowCount = 0;
      for(card of hand) {
        if(card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN') lowCount+=10;
        else if(card.value === 'ACE') lowCount += 1;
        else lowCount += Number(card.value);
      }
      let highCount = 0;
      let oneAce = false;
      for(card of hand) {
        if(card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN') highCount+=10;
        else if(card.value === 'ACE') {
          if(oneAce) highCount += 1;
          else {
            highCount += 11;
            oneAce = true;
          }
        }
        else highCount += Number(card.value);
      }
      return { lowCount, highCount };
    },
    async hitMe() {
      this.hitMeDisabled = true;
      this.playerCards.push(await this.drawCard());
      let count = this.getCount(this.playerCards);
      if(count.lowCount >= 22) {
        this.playerTurn = false;
        this.playerBusted = true;
      }
      this.hitMeDisabled = false;
    },
    async newGame() {
      this.pcBusted = false;
      this.playerBusted = false;
      this.playerWon = false;
      this.pcWon = false;
      this.playerCards = [];
      this.pcCards = [];
      await this.shuffleDeck();
      await this.deal();
      this.playerTurn = true;
    },
    async stay() {
      this.playerTurn = false;
      this.pcTurn = true;
      this.startDealer();
    },
    async startDealer() {
      this.pcText = 'El repartidor comienza su turno...';
      await delay(DEALER_PAUSE);

      this.pcText = 'Déjame mostrar mi mano...';
      await delay(DEALER_PAUSE);
      
      // revelar la Segunda Carta
      this.pcCards[0].showback = false;
      
      let playerCount = this.getCount(this.playerCards);
      let playerScore = playerCount.lowCount;
      if(playerCount.highCount < 22) playerScore = playerCount.highCount;

     // ahora vamos a hacer un bucle hasta que me rompa o gane
      let dealerLoop = true;
      while(dealerLoop) {
        let count = this.getCount(this.pcCards);
  
        if(count.highCount <= 16) {
          this.pcText = 'El Dealer saca una carta...';
          await delay(DEALER_PAUSE);
          this.pcCards.push(await this.drawCard());
        } else if(count.highCount <= 21) {
          this.pcText = 'Dealer planta...';
          await delay(DEALER_PAUSE);
          dealerLoop = false;
          this.pcTurn = false;
          if(count.highCount >= playerScore) this.pcWon = true;
          else this.playerWon = true;
        } else {
          dealerLoop = false;
          this.pcTurn = false;
          this.pcBusted = true;
        }
      }
    },
    deckSize: 6,
    hitMeDisabled:false,
    playerCards:[], 
    pcCards:[],
    pcText:'',
    pcBusted: false,
    pcWon: false,
    playerBusted: false,
    playerWon: false, 
    pcTurn:false,
    playerTurn: true
  }))
});

async function delay(x) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), x);
  });
}