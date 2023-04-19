function createContact() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");

  if (content) {
    content.remove();
  }

  const newContent = document.createElement("div");
  newContent.classList.add("content");

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

  newContent.appendChild(addressTitle);
  newContent.appendChild(addressDesc);
  newContent.appendChild(hours);
  body.appendChild(newContent);
}

export default createContact;
