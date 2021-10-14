import { cards } from "./cards.js";
const pages = cards();
let i=0;

const createCards=(numberCards)=>{
    const block = document.createElement("div");
    block.classList.add("card");
    block.classList.add(pages[numberCards].name);
    const name = document.createElement("h1");
    const nameText = document.createTextNode(pages[numberCards].name);
    name.appendChild(nameText);
    block.appendChild(name);
    return block;
}

const addCards=()=>{
    console.log("prueba");
    if(i<6){
        const cardsContainer = document.querySelector(".cards");
        const newCard = createCards(i);
        cardsContainer.appendChild(newCard);
        i++;
    }
   
}
/*pages.forEach(card=>{
    const cardsContainer = document.querySelector(".cards");
    const newCard = createCards(i);
    cardsContainer.appendChild(newCard);
    i ++;
});*/

const addButton =(document.querySelector("#addButton"))
addButton.addEventListener("click",addCards,false);



const removeCards=()=>{
    console.log("remover");
    if(i>0){
        const cardsContainer = document.querySelector(".cards");
        cardsContainer.removeChild(cardsContainer.childNodes[i]);
        i--;
    }
}

const removeButton =(document.querySelector("#removeButton"))
removeButton.addEventListener("click",removeCards,false);

   
