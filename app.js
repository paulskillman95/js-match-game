document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'apple',
      img: 'images/apple.png'
    },
    {
      name: 'apple',
      img: 'images/apple.png'
    },
    {
      name: 'avocado',
      img: 'images/avocado.png'
    },
    {
      name: 'avocado',
      img: 'images/avocado.png'
    },
    {
      name: 'banana',
      img: 'images/banana.png'
    },
    {
      name: 'banana',
      img: 'images/banana.png'
    },
    {
      name: 'cherry',
      img: 'images/cherry.png'
    },
    {
      name: 'cherry',
      img: 'images/cherry.png'
    },
    {
      name: 'orange',
      img: 'images/orange.png'
    },
    {
      name: 'orange',
      img: 'images/orange.png'
    },
    {
      name: 'pineapple',
      img: 'images/pineapple.png'
    },
    {
      name: 'pineapple',
      img: 'images/pineapple.png'
    }    
  ];

  cardArray.sort( () => 0.5 - Math.random() );

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');

  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/back.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    //alert('Made it');
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/back.png');
      cards[optionTwoId].setAttribute('src', 'images/back.png');
      var cardsLost = [];
      cardsLost.push(cardsChosen);
      alert('Sorry, try again.');      
    };

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }

  }
  
  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    //alert(cardsChosen.length);
    if (cardsChosen.length === 2) {
      //alert('Made it');
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
})

