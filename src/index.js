import "./style.css";
import createNav from "./modules/nav";
import createHome from "./pages/home";
import createMenu from "./pages/menu";
import createContact from "./pages/contact";
import createFooter from "./modules/footer";
createNav(); // creating static nav

const content = document.createElement("div");
content.classList.add("content");
createHome(); // creating first load home
createFooter();
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

home.addEventListener("click", () => {
  createHome();
  createFooter();
});

menu.addEventListener("click", () => {
  createMenu();
  createFooter();
});

contact.addEventListener("click", () => {
  createContact();
  createFooter();
});
