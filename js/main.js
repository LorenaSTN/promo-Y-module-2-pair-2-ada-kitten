'use strict';

const kittens = document.querySelector (".js-list");
const Kitten1Name = "Anastacio";
const Kitten1Upper = Kitten1Name.toUpperCase();
const Kitten1Img = "https://dev.adalab.es/gato-siames.webp";
const Kitten1Race = "Siamés";
const Kitten1Desc = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenOne =
`<li class="card kittenOne">
<article>
  <img
    class="card_img"
    src=${Kitten1Img}
    alt="siames-cat"
  />
  <h3 class="card_title">${Kitten1Upper}</h3>
  <h4 class="card_race">${Kitten1Race}</h4>
  <p class="card_description"> ${Kitten1Desc}
  </p>
</article>
</li>`;

const Kitten2Name = "Fiona";
const Kitten2Upper = Kitten2Name.toUpperCase();
const Kitten2Img = "https://dev.adalab.es/sphynx-gato.webp";
const Kitten2Race = "Sphynx";
const Kitten2Desc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;

const kittenTwo =
`<li class="card kittenTwo">
<img
  class="card_img"
  src= ${Kitten2Img}
  alt="sphynx-cat"
/>
<h3 class="card_title">${Kitten2Upper}</h3>
<h4 class="card_race">${Kitten2Race}</h4>
<p class="card_description">${Kitten2Desc}
</p>
</li>`;
const Kitten3Name = "Cielo";
const Kitten3Upper = Kitten3Name.toUpperCase();
const Kitten3Img = "https://dev.adalab.es/maine-coon-cat.webp";
const Kitten3Race = "Maine Coon";
const Kitten3Desc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenThree =
`<li class="card kittenThree">
<img
  class="card_img"
  src=${Kitten3Img}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${Kitten3Upper}</h3>
<h4 class="card_race">${Kitten3Race}</h4>
<p class="card_description">
${Kitten3Desc}
</p>
</li>`;

kittens.innerHTML =  kittenOne + kittenTwo + kittenThree;

const buttonAdd = document.querySelector(".button-js");
const formSection = document.querySelector('.js-new-form');
const cancel= document.querySelector(".button-cancel");

formSection.classList.remove('collapsed');

buttonAdd.addEventListener("click",()=>{
formSection.classList.toggle("collapsed");
}
)
cancel.addEventListener("click", ()=>{
formSection.classList.add("collapsed");

}
);

//Ejercicio 3:

//

const inputSearch= document.querySelector('.js_in_search_desc');
const searchButton = document.querySelector (".js-button");
const desc1 = "elegante";
const desc2 = "exótico";
const desc3 = "simétricos";



searchButton.addEventListener("click", (event) => {
event.preventDefault();
 const descrSearchText = inputSearch.value;

 if( descrSearchText.includes(desc1) ) {
    kittens.innerHTML = kittenOne;
  } else if ( descrSearchText.includes(desc2) ) {
  kittens.innerHTML = kittenTwo;
 } else if (descrSearchText.includes(desc3)) {
  kittens.innerHTML = kittenThree;
 }
});




const searchRaza = document.querySelector(".search-raza")
const race = document.querySelector (".card-race")
const raza1 = "siames";
const raza2 = "sphynx";
const raza3 = "";


searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  const inputRaza = searchRaza.value;

  const race = "";

  if (inputRaza = raza1) {
    
  }

  message.innerHTML = race;
})
/*const siames = kittenOne;
const sphynx = kittenTwo;
const kittenThree = ""*/