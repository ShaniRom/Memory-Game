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
        html += ` <div class="card" onclick='handleFlip(event)' id="${card.id}"  pairId="${card.pairId}" >
        
      <div class="card__face-back">
      </div>
      <div class="card__face-front">
      <img src="${card.imgUrl}">
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
let hasFlippedCard = false;
let firstCard, secondCard; 

async function handleFlip(ev) {
  // const {chosenCard} = await axios.get(`/search-for-card?id=${id}`);


console.log(ev.target.id)
  
}

function checkMatches(firstCard, secondCard) {}
