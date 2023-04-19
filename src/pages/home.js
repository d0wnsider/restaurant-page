import createFooter from "../modules/footer";

function createHome() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  const footer = document.querySelector("footer");
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

  if (footer) {
    footer.remove();
  }
}

export default createHome;
