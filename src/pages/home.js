function createHome() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  if (content) {
    content.remove();
  }

  const newContent = document.createElement("div");
  newContent.classList.add("content");

  const title = document.createElement("h1");
  title.textContent = "Farm Smoothies";
  title.classList.add("title");

  const para = document.createElement("p");
  para.textContent = "Straight out of nature";
  para.classList.add("para");

  newContent.appendChild(title);
  newContent.appendChild(para);
  body.appendChild(newContent);
}

export default createHome;
