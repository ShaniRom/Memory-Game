function appInit() {
  getCards();
}

//needed to load on when the page opens

async function getCards() {
  try{
    const { data } = await axios.get("/new-game");
   
    renderGame(data);
  }catch(error){
console.error(error)
  }
 
}



function renderGame(cards) {
  const root = document.querySelector("#root");
  try{
  if (Array.isArray(cards)) {
    console.log(cards)
    let html = '<div class="gameBoard">'
    cards.forEach((card) => {
      html += ` <div class="card"  onclick="handleFlip(event)" id="${card.id}">
      <div class="card__face--front"><img src=${card.imgUrl} alt="Character" class="front-face" > </div>
      <div class="card__face--back"><img src="img/BackCard.png" alt="Memory Card" class="back-face"> </div>              

                </div>`;
                     
    });
    html+='</div>'
    root.innerHTML = html;   
     return;  
  }
  throw new Error("no array of cards found");
}catch(error){
  console.error(error);
  return [];
}
}


function handleNewGame() {
  let openingPage: HTMLElement = document.querySelector(".openingPage");
  openingPage.style.display = "none";
  
}


///--- card flip  
function handleFlip(ev) {
  const card:HTMLElement = document.querySelector(".card");
  
  console.log(card)
 

}






function checkMatches(cards) {}



