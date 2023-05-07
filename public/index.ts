function appInit() {
  getCards();
}

//needed to load on when the page opens

async function getCards() {
  try {
    const { data } = await axios.get("/new-game");

    renderGame(data);
  } catch (error) {
    console.error(error);
  }
}

function uid() {
  // const uuid = Date.now().toString(36) + Math.random().toString(36);
   const min = Math.ceil(3123);
   const max = Math.floor(4321);
  const uuid= Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive

  return uuid;
}

function renderGame(cards) {
  const root = document.getElementById("root");
  try {
    if (Array.isArray(cards)) {
      console.log(cards);
      let html = "";
      //use index as id maybe
      cards.forEach((card: any) => {
        html += ` <div class="card"   id="${card.pairId}}" onclick='handleFlip(${uid()})'>
      <div class="card__face--front" ><img src=${card.imgUrl} alt="Character" class="front-face" /> </div>
                 

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

function handleFlip(id: any) {
  console.log(id);
}

// <div class="card__face--back"><img src="img/BackCard.png" alt="Memory Card" class="back-face"> </div>
function handleNewGame() {
  let openingPage: HTMLElement = document.querySelector(".openingPage");
  openingPage.style.display = "none";
}

///--- card flip
// function handleFlip(ev) {

// }

// function checkMatches(cards) {}
