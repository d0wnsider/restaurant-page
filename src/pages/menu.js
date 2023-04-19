function createMenu() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  if (content) {
    content.remove();
  }

  const newContent = document.createElement("div");
  newContent.classList.add("content");

  // strawberry
  const sCard = document.createElement("div");
  sCard.classList.add("sCard");
  const sTitle = document.createElement("h1");
  sTitle.textContent = "Strawberry Smoothie";
  sTitle.classList.add("sTitle");
  const sDesc = document.createElement("p");
  sDesc.classList.add("sDesc");
  sDesc.textContent = "Light and Creamy texture";

  // banana
  const bCard = document.createElement("div");
  bCard.classList.add("bCard");
  const bTitle = document.createElement("h1");
  bTitle.textContent = "Banana Smoothie";
  bTitle.classList.add("bTitle");
  const bDesc = document.createElement("p");
  bDesc.classList.add("bDesc");
  bDesc.textContent = "Sweet and flavorful";

  // mango
  const kCard = document.createElement("div");
  kCard.classList.add("kCard");
  const kTitle = document.createElement("h1");
  kTitle.textContent = "Kale Smoothie";
  kTitle.classList.add("kTitle");
  const kDesc = document.createElement("p");
  kDesc.classList.add("kDesc");
  kDesc.textContent = "Pure plant based";

  sCard.appendChild(sTitle);
  sCard.appendChild(sDesc);
  bCard.appendChild(bTitle);
  bCard.appendChild(bDesc);
  kCard.appendChild(kTitle);
  kCard.appendChild(kDesc);

  newContent.appendChild(sCard);
  newContent.appendChild(bCard);
  newContent.appendChild(kCard);
  body.appendChild(newContent);
}

export default createMenu;
