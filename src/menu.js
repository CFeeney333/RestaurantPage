function createMenu() {
    const menuElement = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "MENU";

    const line = document.createElement("div");
    line.classList.add("line");

    const pizzaHeading = document.createElement("h3");
    pizzaHeading.textContent = "PIZZAS";

    const pizzaList = document.createElement("ul");
    const pizzas = [
        "margarita",
        "pepperoni",
        "hawaii",
        "fungi"
    ];
    pizzas.forEach((name) => pizzaList.appendChild(createListItem(name)));

    const otherHeading = document.createElement("h3");
    otherHeading.textContent = "OTHER STUFF";

    const otherList = document.createElement("ul");
    const otherStuff = [
        "other1",
        "other2",
        "other3",
        "other4",
        "other5"
    ];
    otherStuff.forEach((name) => otherList.appendChild(createListItem(name)));

    menuElement.appendChild(title);
    menuElement.appendChild(line);
    menuElement.appendChild(pizzaHeading);
    menuElement.appendChild(pizzaList);
    menuElement.appendChild(otherHeading);
    menuElement.appendChild(otherList);

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