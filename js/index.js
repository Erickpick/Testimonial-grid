import { generar } from "./cards.js";

const pages = generar();

let i=0;



const createCards=(numberCards)=>{
    
    const block = document.createElement("div");
    block.classList.add("card");
    
    block.classList.add(pages[numberCards].name);
    const titulo = document.createElement("h3");
    const parrafo = document.createElement("p");

    const parrafoOne = document.createTextNode("I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a \
    transition and have heard some people who had an amazing experience here. I signed up \
    for the free intro course and found it incredibly fun! I enrolled shortly thereafter. \
    The next 12 weeks was the best - and most grueling - time of my life. Since completing \
    the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.");
    
    const parrafoTwo = document.createTextNode("I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.")
    const parrafoThree = document.createTextNode("Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living \
    while doing something I love.")
    const parrafoFour = document.createTextNode("The staff seem genuinely concerned about my progress which I find really refreshing. The program \
    gave me the confidence necessary to be able to go out in the world and present myself as a capable \
    junior developer. The standard is above the rest. You will get the personal attention you need from \
    an incredible community of smart and amazing people.")
    const parrafoFive = document.createTextNode("Before joining the bootcamp, I’ve never written a line of code. I needed some structure from \
    professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent \
    experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!");
     

    

    const textOne= document.createTextNode("I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.")
    const textTwo= document.createTextNode("The team was very supportive and kept me motivated")
    const textThree= document.createTextNode("An overall wonderful and rewarding experience")
    const textFour= document.createTextNode("  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and \
    learning from their experiences was easy.")
    const textFive= document.createTextNode("Such a life-changing experience. Highly recommended!")

    if(numberCards==0){titulo.appendChild(textOne);
        parrafo.appendChild(parrafoOne);
                       }
    if(numberCards==1){titulo.appendChild(textTwo);
        parrafo.appendChild(parrafoTwo);}
    if(numberCards==2){titulo.appendChild(textThree);
        parrafo.appendChild(parrafoThree);}
    if(numberCards==3){titulo.appendChild(textFour);
        parrafo.appendChild(parrafoFour);}
    if(numberCards==4){titulo.appendChild(textFive);
        parrafo.appendChild(parrafoFive);}
    block.appendChild(titulo);
    block.appendChild(parrafo);
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

   
