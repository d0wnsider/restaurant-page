import strawberry from "../img/strawberry.png";
import banana from "../img/banana.png";
import kale from "../img/kale.png";
import watermelon from "../img/watermelon.png";
import blueberry from "../img/blueberry.png";
import avocado from "../img/avocado.png";

function createMenu() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  content.classList.add("contentBlur");
  const footer = document.querySelector("footer");
  if (content) {
    content.remove();
  }

  const title = document.createElement("p");
  title.textContent = "Smoothies";
  title.classList.add("menuTitle");

  const newContent = document.createElement("div");
  newContent.classList.add("content");
  newContent.classList.add("contentBlur");

  // strawberry
  const sCard = document.createElement("div");
  sCard.classList.add("sCard");
  const sImg = new Image();
  sImg.src = strawberry;
  sImg.style.width = "150px";
  const sTitle = document.createElement("h1");
  sTitle.textContent = "Strawberry Smoothie - $12.99";
  sTitle.classList.add("sTitle");
  const sDesc = document.createElement("p");
  sDesc.classList.add("sDesc");
  sDesc.textContent = "Light and Creamy texture";

  // banana
  const bCard = document.createElement("div");
  bCard.classList.add("bCard");
  const bImg = new Image();
  bImg.src = banana;
  bImg.style.width = "150px";
  const bTitle = document.createElement("h1");
  bTitle.textContent = "Banana Smoothie - $12.99";
  bTitle.classList.add("bTitle");
  const bDesc = document.createElement("p");
  bDesc.classList.add("bDesc");
  bDesc.textContent = "Sweet and flavorful";

  // mango
  const kCard = document.createElement("div");
  kCard.classList.add("kCard");
  const kImg = new Image();
  kImg.src = kale;
  kImg.style.width = "150px";
  const kTitle = document.createElement("h1");
  kTitle.textContent = "Kale Smoothie - $12.99";
  kTitle.classList.add("kTitle");
  const kDesc = document.createElement("p");
  kDesc.classList.add("kDesc");
  kDesc.textContent = "Pure plant based";

  // watermelon
  const wCard = document.createElement("div");
  wCard.classList.add("wCard");
  const wImg = new Image();
  wImg.src = watermelon;
  wImg.style.width = "150px";
  const wTitle = document.createElement("h1");
  wTitle.textContent = "Watermelon Smoothie - $12.99";
  wTitle.classList.add("wTitle");
  const wDesc = document.createElement("p");
  wDesc.classList.add("sDesc");
  wDesc.textContent = "Light and Creamy texture";

  // blueberry
  const bbCard = document.createElement("div");
  bbCard.classList.add("bbCard");
  const bbImg = new Image();
  bbImg.src = blueberry;
  bbImg.style.width = "150px";
  const bbTitle = document.createElement("h1");
  bbTitle.textContent = "Blueberry Smoothie - $12.99";
  bbTitle.classList.add("bbTitle");
  const bbDesc = document.createElement("p");
  bbDesc.classList.add("bbDesc");
  bbDesc.textContent = "Sweet and flavorful";

  // avocado
  const aCard = document.createElement("div");
  aCard.classList.add("aCard");
  const aImg = new Image();
  aImg.src = avocado;
  aImg.style.width = "150px";
  const aTitle = document.createElement("h1");
  aTitle.textContent = "Avocado Smoothie - $12.99";
  aTitle.classList.add("aTitle");
  const aDesc = document.createElement("p");
  aDesc.classList.add("aDesc");
  aDesc.textContent = "Pure plant based";

  sCard.appendChild(sImg);
  sCard.appendChild(sTitle);
  sCard.appendChild(sDesc);
  bCard.appendChild(bImg);
  bCard.appendChild(bTitle);
  bCard.appendChild(bDesc);
  kCard.appendChild(kImg);
  kCard.appendChild(kTitle);
  kCard.appendChild(kDesc);
  wCard.appendChild(wImg);
  wCard.appendChild(wTitle);
  wCard.appendChild(wDesc);
  bbCard.appendChild(bbImg);
  bbCard.appendChild(bbTitle);
  bbCard.appendChild(bbDesc);
  aCard.appendChild(aImg);
  aCard.appendChild(aTitle);
  aCard.appendChild(aDesc);

  newContent.appendChild(title);
  newContent.appendChild(sCard);
  newContent.appendChild(bCard);
  newContent.appendChild(kCard);
  newContent.appendChild(wCard);
  newContent.appendChild(bbCard);
  newContent.appendChild(aCard);
  body.appendChild(newContent);

  if (footer) {
    footer.remove();
  }
}

export default createMenu;
