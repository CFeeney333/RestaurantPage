function createMenu() {
    const menuElement = document.createElement("div");
    menuElement.textContent = "MENU CONTENT";
    return menuElement;
}

export function loadMenu() {
    return createMenu();
}