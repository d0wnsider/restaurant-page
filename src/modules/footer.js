import githubLogo from "../img/github-icon.svg";

function createFooter() {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  const link = document.createElement("a");
  link.href = "https://www.github.com/d0wnsider";
  const myLogo = new Image();
  myLogo.classList.add("logo");
  myLogo.src = githubLogo;
  myLogo.style.width = "30px";

  link.appendChild(myLogo);
  footer.appendChild(link);
  body.appendChild(footer);
  return footer;
}

export default createFooter;
