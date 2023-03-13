function createContact() {
    const contactElement = document.createElement("div");
    contactElement.textContent = "CONTACT CONTENT";
    return contactElement;
}

export function loadContact() {
    return createContact();
}