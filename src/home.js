function createHome() {
    const homeElement = document.createElement("div");

    const img = document.createElement("img");
    img.src = "..\\images\\TurquesaJardimLogo.png";
    img.classList.add("center-logo");

    homeElement.appendChild(img);

    // homeElement.textContent = "HOME CONTENT";
    return homeElement;
}

export function loadHome() {
    return createHome();
}