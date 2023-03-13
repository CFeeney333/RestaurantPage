function createHome() {
    const homeElement = document.createElement("div");
    homeElement.textContent = "HOME CONTENT";
    return homeElement;
}

export function loadHome() {
    return createHome();
}