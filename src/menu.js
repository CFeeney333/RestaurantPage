function createMenuList(items) {
    const list = document.createElement("ul");
    items.forEach((item) => list.appendChild((createListItem(item))));
    return list;
}

function createMenuHeading(heading) {
    const headingElement = document.createElement("h2");
    headingElement.textContent = heading;
    headingElement.classList.add("menu-heading");
    return headingElement;
}

function createMenu() {
    const menuElement = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "MENU";

    const line = document.createElement("div");
    line.classList.add("line");

    menuElement.appendChild(title);
    menuElement.appendChild(line);
    menuElement.appendChild(createMenuHeading("PIZZAS"));
    menuElement.appendChild(createMenuList(["margharita", "pepperoni", "hawaii", "fungi"]));
    menuElement.appendChild(createMenuHeading("OTHER STUFF"));
    menuElement.appendChild(createMenuList(["other1", "other2", "other3", "other4", "other5"]));

    return menuElement;
}

function createListItem(text) {
    const ul = document.createElement("ul");
    ul.textContent = text;
    return ul;
}

export function loadMenu() {
    return createMenu();
}