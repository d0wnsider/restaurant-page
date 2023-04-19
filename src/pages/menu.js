import strawberry from "../img/strawberry.png";
import banana from "../img/banana.png";
import kale from "../img/kale.png";

function createMenu() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  content.classList.add("contentBlur");
  const footer = document.querySelector("footer");
  if (content) {
    content.remove();
  }

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
  sTitle.textContent = "Strawberry Smoothie";
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
  bTitle.textContent = "Banana Smoothie";
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
  kTitle.textContent = "Kale Smoothie";
  kTitle.classList.add("kTitle");
  const kDesc = document.createElement("p");
  kDesc.classList.add("kDesc");
  kDesc.textContent = "Pure plant based";

  sCard.appendChild(sImg);
  sCard.appendChild(sTitle);
  sCard.appendChild(sDesc);
  bCard.appendChild(bImg);
  bCard.appendChild(bTitle);
  bCard.appendChild(bDesc);
  kCard.appendChild(kImg);
  kCard.appendChild(kTitle);
  kCard.appendChild(kDesc);

  newContent.appendChild(sCard);
  newContent.appendChild(bCard);
  newContent.appendChild(kCard);
  body.appendChild(newContent);

  if (footer) {
    footer.remove();
  }
}

export default createMenu;
