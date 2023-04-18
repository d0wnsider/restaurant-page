function createMain() {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = "Farm Smoothies";
  title.classList.add("title");

  const para = document.createElement("p");
  para.textContent = "Straight out of nature";
  para.classList.add("para");

  main.appendChild(title);
  main.appendChild(para);
  body.appendChild(main);
}

export default createMain;
