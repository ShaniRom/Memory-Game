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
  const root = document.getElementById("root");
  try{
  if (Array.isArray(cards)) {
    console.log(cards)
    let html=""
       
    cards.forEach((card:any) => {
      console.log(card)
      html += ` <div class="card"   id="${card.id}" onclick='handleFlip()'>
      <div class="card__face--front" ><img src=${card.imgUrl} alt="Character" class="front-face" /> </div>
                 

       </div>`;
                     
    });
    
  
  
    console.log(root)
    root.innerHTML = html;   
     return;  
  }
  throw new Error("no array of cards found");
}catch(error){
  console.error(error);
  return [];
}
}



function handleFlip(id){
  let card=document.getElementsByClassName('card')

console.log(card)
}

// <div class="card__face--back"><img src="img/BackCard.png" alt="Memory Card" class="back-face"> </div>   
function handleNewGame() {
  let openingPage: HTMLElement = document.querySelector(".openingPage");
  openingPage.style.display = "none";
  
}



///--- card flip  
// function handleFlip(ev) {

 

// }






function checkMatches(cards) {}



