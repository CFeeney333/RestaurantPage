function createContact() {
    const contactElement = document.createElement("div");

    const menuElement = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "CONTACT";

    const line = document.createElement("div");
    line.classList.add("line");


    const contact = document.createElement("p");
    contact.textContent = "089 435 8382";

    contactElement.appendChild(title);
    contactElement.appendChild(line);
    contactElement.appendChild(contact);

    return contactElement;
}

export function loadContact() {
    return createContact();
}