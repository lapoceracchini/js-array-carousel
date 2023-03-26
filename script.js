const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

const btnDown = document.querySelector(".btn-nav-down");
const btnUp = document.querySelector(".btn-nav-up");
const itemsWrapper = document.querySelector(".items-wrapper")
let counterImage = 0;

for(let i=0; i < images.length; i++)
{
  itemsWrapper.innerHTML += `
    <img class="item hide" src="${images[i]}">
  `;
}

const itemsCollection = document.getElementsByClassName("item");
itemsCollection[counterImage].classList.remove("hide")

btnDown.addEventListener("click", function () {
  itemsCollection[counterImage].classList.add("hide");
  counterImage++;
  if (counterImage === images.length) {
    counterImage = 0;
  }
  itemsCollection[counterImage].classList.remove("hide");
}); 

btnUp.addEventListener("click", function(){
  itemsCollection[counterImage].classList.add("hide");
  if (counterImage === 0) {
    counterImage = images.length;
  }
  counterImage--;
  itemsCollection[counterImage].classList.remove("hide");
}); 