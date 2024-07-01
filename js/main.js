'use strict';

const kittens = document.querySelector (".js-list");


const kittenOne = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "siamés",
};


const kittenTwo = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta razagatuna que se caracteriza por la «ausencia» de pelo.",
  race: "Sphynx",
};


const kittenThree = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon", 
};



const kittenOneLi = 
  `<li class="card kittenOne">
<article>
  <img
    class="card_img"
    src=${kittenOne.image}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenOne.name}</h3>
  <h4 class="card_race">${kittenOne.race}</h4>
  <p class="card_description"> ${kittenOne.desc}
  </p>
</article>
</li>`;

const kittenTwoLi = 
`<li class="card kittenTwo">
<img
  class="card_img"
  src= ${kittenTwo.image}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwo.name}</h3>
<h4 class="card_race">${kittenTwo.race}</h4>
<p class="card_description">${kittenTwo.desc}
</p>
</li>`;


const kittenThreeLi = 
`<li class="card kittenThree">
<img
  class="card_img"
  src=${kittenThree.image}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThree.name}</h3>
<h4 class="card_race">${kittenThree.race}</h4>
<p class="card_description">
${kittenThree.desc}
</p>
</li>`;


kittens.innerHTML =  kittenOneLi + kittenTwoLi + kittenThreeLi;




//formulario


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


//Ejercicio 3:

//

const inputSearch= document.querySelector('.js_in_search_desc');
const descrSearchText = inputSearch.value;
const searchButton = document.querySelector (".js-button");
kittenOne.desc = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
kittenTwo.desc = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
kittenThree.desc=  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";



// searchButton.addEventListener("click", (event) => {
// event.preventDefault();
//  const descrSearchText = inputSearch.value;

//  if( descrSearchText.includes(desc1) ) {
//     kittens.innerHTML = kittenOne;
//   } else if ( descrSearchText.includes(desc2) ) {
//   kittens.innerHTML = kittenTwo;
//  } else if (descrSearchText.includes(desc3)) {
//   kittens.innerHTML = kittenThree;
//  }
// });


const filterkitten = (event) => {
  event.preventDefault();

  const descrSearchText = inputSearch.value;

  if (kittenOne.desc.includes(descrSearchText)) {
    kittens.innerHTML = kittenOneLi;
  } else if (kittenTwo.desc.includes(descrSearchText)) {
    kittens.innerHTML = kittenTwoLi;
  } else if (kittenThree.desc.includes(descrSearchText)) {
    kittens.innerHTML = kittenThreeLi;
  }
};

searchButton.addEventListener("click",filterkitten);

// const searchRaza = document.querySelector(".search-raza")
// const race = document.querySelector (".card-race")
// const raza1 = "siames";
// const raza2 = "sphynx";
// const raza3 = "";


// searchButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   const inputRaza = searchRaza.value;

//   const race = "";

//   if (inputRaza = raza1) {
    
//   }

//   message.innerHTML = race;
// })
/*const siames = kittenOne;
const sphynx = kittenTwo;
const kittenThree = ""*/

