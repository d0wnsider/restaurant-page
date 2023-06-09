function createNav() {
  const body = document.querySelector("body");
  const nav = document.createElement("nav");

  const home = document.createElement("button");
  home.textContent = "HOME";
  home.classList.add("navBtn", "home");

  const menu = document.createElement("button");
  menu.textContent = "MENU";
  menu.classList.add("navBtn", "menu");

  const contact = document.createElement("button");
  contact.textContent = "CONTACT";
  contact.classList.add("navBtn", "contact");

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  body.appendChild(nav);
}

export default createNav;
