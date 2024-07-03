'use strict';

const kittenList = document.querySelector (".js-list");

const  kittenDataList = [
 {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "siamés",
},

{
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta razagatuna que se caracteriza por la «ausencia» de pelo.",
  race: "Sphynx",
},

 {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon", 
},
];
 

///


function renderKitten(kitten) {
  kittenList.innerHTML += 
  `<li class="card kittenOne">
<article>
  <img
    class="card_img"
    src="${kitten.image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kitten.name}</h3>
  <h4 class="card_race">${kitten.race}</h4>
  <p class="card_description"> ${kitten.desc}
  </p>
</article>
</li>`;
}



function renderKittens(){
for (const kitten of kittenDataList){
renderKitten(kitten);
  }
};

renderKittens();




// function showKittens(){
//   kittenList.innerHTML = renderskitten(kittenDataList[0]) + renderskitten(kittenDataList[1]) + renderskitten(kittenDataList[2]);
// };

// showKittens();



//----


const buttonAdd = document.querySelector(".button-js");
const formSection = document.querySelector(".js-new-form");
const cancel = document.querySelector(".button-cancel");



function toggleForm (){
  formSection.classList.toggle("collapsed");
}

buttonAdd.addEventListener("click", toggleForm); 

function hideForm (){
  formSection.classList.add("collapsed");
}

cancel.addEventListener("click", hideForm);



const inputSearch= document.querySelector('.js_in_search_desc');
const descrSearchText = inputSearch.value;
const searchButton = document.querySelector (".js-button");


function filterKitten (event) {
  event.preventDefault();
  // debugger;
  // const descrSearchText = inputSearch.value;
  kittenList.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    kittenItem.desc.includes(descrSearchText)
    renderKitten(kittenItem);
  }
};
 
searchButton.addEventListener("click", filterKitten);

// const filterkitten = (event) => {
//   event.preventDefault();

//   const descrSearchText = inputSearch.value;

//   if (kittenDataList[0].desc.includes(descrSearchText)) {
//     kittenList.innerHTML = renderskitten(kittenDataList[0]);
//   } else if (kittenDataList[1].desc.includes(descrSearchText)) {
//     kittenList.innerHTML = renderskitten(kittenDataList[1]);
//   } else if (kittenDataList[2].desc.includes(descrSearchText)) {
//     kittenList.innerHTML = renderskitten(kittenDataList[2]);
//   }
// };


