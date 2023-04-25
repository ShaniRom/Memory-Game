function appInit() {
  getCards();
}

//needed to load on when the page opens

async function getCards() {
  const { data } = await axios.get("/new-game");
  console.log(data);
  renderGame(data);
}

function renderGame(cards) {
  const root = document.querySelector("#root");
  if (Array.isArray(cards)) {
    let html = "";
    cards.forEach((card) => {
      html += ` <div class="memory-card"  onclick='handleFlip()'  >
                     <img src=${card.imgUrl} alt="Character" class="front-face" > 
                     <img src="img/BackCard.png" alt="Memory Card" class="back-face"> 
                      
                </div>`;
    });
    root.innerHTML = html;
  }
}
///--- card flip




    



function handleFlip(){
    console.log("hey")
   
}



function checkMatches(cards) {}

function handleNewGame() {
  let openingPage: HTMLElement = document.querySelector(".openingPage");
  openingPage.style.display = "none";
}

// html += ` <div class="flip-card" onclick="handleClickCard()">
// <div class="flip-card-inner">
//   <div class="flip-card-front" >

//     <img src="img/BackCard.png"/>
//   </div>
//   <div class="flip-card-back">
//   <img src=${card.imgUrl} alt="Avatar" >
//   </div>
// </div>
// </div>`;
