//needed to load on when the page opens
function appInit() {
  getCards();
}

async function getCards() {
  try {
    const { data } = await axios.get("/new-game");

    renderGame(data);
  } catch (error) {
    console.error(error);
  }
}

function handleNewGame() {
  let openingPage: HTMLElement = document.querySelector(".openingPage");
  openingPage.style.display = "none";
}

function renderGame(cards) {
  const root = document.getElementById("root");
  try {
    if (Array.isArray(cards)) {
      console.log(cards);
      let html = "";
      cards.forEach((card: any) => {
        html += ` <div class="card" onclick='handleFlip(event)' id="${card.id}"  data-pair-id="${card.pairId}" >
        
      <div class="card_-front">
      
      </div>
      <div class="card-back" >
    <img src="${card.imgUrl}"/>
      </div> 
      
       </div>`;
      });

      root.innerHTML = html;
      return;
    }
    throw new Error("no array of cards found");
  } catch (error) {
    console.error(error);
    return [];
  }
}
let flippedCards = 0;
let totalFlips = 0;
let firstCard, secondCard;
// <img src=/img/BackCard.png>

async function handleFlip(ev) {
  
  let chosenCard = ev.target.parentNode.parentNode;
  // console.log(chosenCard)
  
  if (flippedCards < 2) {
    chosenCard.classList.add("flipped");
    flippedCards++;
    console.log(chosenCard) 
  } else {
    alert("cant click more than two");
    chosenCard.classList.remove("flipped");
    flippedCards=0
  }
  if (flippedCards === 2) {
    const bothFlippedCards = document.querySelectorAll(".flipped");

    // console.log(chosenCard.dataset.pairId)
    firstCard = bothFlippedCards[0];
    secondCard = bothFlippedCards[1];
    console.log(firstCard);
    console.log(secondCard);
    if (firstCard.dataset.pairId == secondCard.dataset.pairId) {
      alert("haaa tis a match");
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
      flippedCards=0
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");

    }else{
      alert("not a match stoopid")
      flippedCards=0
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
    }
  }
}

function checkMatches(firstCard, secondCard) {}
