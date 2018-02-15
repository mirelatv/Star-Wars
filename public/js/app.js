//Declarando variables generales

const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const submitBtn = document.getElementById('modal');
const responseContainer = document.getElementById('responseContainer');
const bodyModal = document.getElementById('modal-content')
let searchedFordPeople;

//funcion  para imagenes
(function images(window, document) {
  const containerImage = document.getElementById('container-image');
  let count = 0;
  for (let i = 1; i < 88; i++) {
    const urlImages = `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`;
    console.log(urlImages);
    const anchor = document.createElement('a');
    anchor.setAttribute('href', "#modal1");
    const image = document.createElement('img');
    image.className = 'imageClass col m4 s12';
    image.setAttribute('src', urlImages);
    anchor.appendChild(image);
    containerImage.appendChild(anchor);
  }

})(window, document);

//function click
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  searchedFordPeople = searchField.value;
  
  getPeople();

})

function getPeople() {
  const peopleRequest = new XMLHttpRequest();
  // console.log(peopleRequest);
  peopleRequest.open('GET', `https://swapi.co/api/people/`);
  peopleRequest.onload = addPeople;
  peopleRequest.onerror = handlelError;
  peopleRequest.send();
}

function handlelError() {
  console.log('se ha producido unerror');
}

function addPeople() {
  const data = JSON.parse(this.response);
  console.log(data);
  const arr = data.results;

  arr.forEach(function (element) {

    //busqueda en mayuscula y minuscula

    let charName = element.name.toLowerCase();
    let searchLower = searchedFordPeople.toLowerCase();
    
    //iterando por indice 
    if (charName.indexOf(searchLower) !== -1) {
      console.log(element.name);
      let names = element.name;
      let birthday = element.birth_year;
      let hair = element.hair_color;
      let skin = element.skin_color;
      let gender = element.gender;
      let name = document.createElement('ul');
      let liTitle = document.createElement('li');
      let birth = document.createElement('li');
      let hairColor = document.createElement('li');
      let skinColor = document.createElement('li');
      let TheGender = document.createElement('li');

      liTitle.innerText = `Name: ${names}`;
      birth.innerText = `Birthday: ${birthday}`;
      hairColor.innerText = `Hair color: ${hair}`;
      skinColor.innerText = `Skin color: ${skin}`;
      TheGender.innerText = `Gender : ${gender}`;

      name.appendChild(liTitle);
      name.appendChild(birth);
      name.appendChild(hairColor);
      name.appendChild(skinColor);
      name.appendChild(TheGender);
      bodyModal.appendChild(name);
    }

    //asignando imagenes 

    //if (charName.indexOf(searchLower) = https://starwars-visualguide.com/assets/img/characters/1.jpg


  });
}