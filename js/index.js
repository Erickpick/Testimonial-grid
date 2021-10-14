import { generar } from "./cards.js";

const pages = generar();

let i=0;



const createCards=(numberCards)=>{
    
    const block = document.createElement("div");
    block.classList.add("card");
    block.classList.add(pages[numberCards].name);
    const name = document.createElement("h2");
    
    const textOne= document.createTextNode("I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.")
    const textTwo= document.createTextNode("I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.")
    const textThree= document.createTextNode("Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy")
    const textFour= document.createTextNode("Such a life-changing experience. Highly recommended!")
    const textFive= document.createTextNode("An overall wonderful and rewarding experience")

    if(numberCards==0)name.appendChild(textOne);
    if(numberCards==1)name.appendChild(textTwo);
    if(numberCards==2)name.appendChild(textThree);
    if(numberCards==3)name.appendChild(textFour);
    if(numberCards==4)name.appendChild(textFive);
    block.appendChild(name);
    
    return block;
}



const addCards=()=>{
    
    if(i<5){
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

   
