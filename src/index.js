import "./style.css";
import createNav from "./modules/nav";
import createHome from "./pages/home";
import createMenu from "./pages/menu";

createNav(); // creating static nav

const content = document.createElement("div");
content.classList.add("content");
createHome(); // creating first load home

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");

home.addEventListener("click", () => {
  createHome();
});

menu.addEventListener("click", () => {
  createMenu();
});
