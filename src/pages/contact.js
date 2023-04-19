function createContact() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  const footer = document.querySelector("footer");
  content.classList.add("contactUpdate");
  if (content) {
    content.remove();
  }

  const newContent = document.createElement("div");
  newContent.classList.add("content");
  newContent.classList.add("contactUpdate");

  const addressTitle = document.createElement("h1");
  addressTitle.textContent = "Address";
  addressTitle.classList.add("addressTitle");

  const addressDesc = document.createElement("p");
  addressDesc.textContent = "11-22 6th Ave. Queens, New York 13021";
  addressDesc.classList.add("addressDesc");

  const hours = document.createElement("p");
  hours.textContent =
    "Monday: 12:00 - 22:00 PM Tuesday: 12:00 - 22:00 PM Wednesday: 12:00 - 22:00 PM Thursday: 12:00 - 22:00 PM Friday: 12:00 - 22:00 PM Saturday: 12:00 - 22:00 PM";
  hours.classList.add("hours");

  const telephone = document.createElement("h1");
  telephone.textContent = "Telephone";
  telephone.classList.add("telephone");

  const telephoneDesc = document.createElement("p");
  telephoneDesc.textContent = "123-456-78-90";
  telephoneDesc.classList.add("telephoneDesc");

  newContent.appendChild(addressTitle);
  newContent.appendChild(addressDesc);
  newContent.appendChild(hours);
  newContent.appendChild(telephone);
  newContent.appendChild(telephoneDesc);
  body.appendChild(newContent);

  if (footer) {
    footer.remove();
  }
}

export default createContact;
