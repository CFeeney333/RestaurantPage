function createHome() {
    const homeElement = document.createElement("div");

    const img = document.createElement("img");
    img.src = "..\\images\\TurquesaJardimLogo.png";
    img.classList.add("center-logo");

    const line = document.createElement("div");
    line.classList.add("line");

    const pizzaSection = document.createElement("div");
    pizzaSection.classList.add("section");

    const pizzaImg = document.createElement("img");
    pizzaImg.src = "../images/pizza-oven-2.webp";
    pizzaImg.classList.add("section-item");
    pizzaImg.classList.add("section-img");

    const pizzaDescription = document.createElement("div");
    pizzaDescription.classList.add("section-item");

    const pizzaHeading = document.createElement("h2");
    pizzaHeading.textContent = "HOMEMADE GOURMET PIZZA";

    const pizzaContent = document.createElement("p");
    pizzaContent.textContent = "lorem ipsum dolor sit amet...";

    pizzaDescription.appendChild(pizzaHeading);
    pizzaDescription.appendChild(pizzaContent);

    pizzaSection.appendChild(pizzaImg);
    pizzaSection.appendChild(pizzaDescription);


    const steakSection = document.createElement("div");
    steakSection.classList.add("section");

    const steakDescription = document.createElement("div");
    steakDescription.classList.add("section-item");

    const steakHeading = document.createElement("h2");
    steakHeading.textContent = "CLASSIC TOMAHAWK STEAK";

    const steakContent = document.createElement("p");
    steakContent.textContent = "lorem ipsum dolor sit amet...";

    steakDescription.appendChild(steakHeading);
    steakDescription.appendChild(steakContent);

    const steakImg = document.createElement("img");
    steakImg.src = "../images/tomahawk-steak.webp";
    steakImg.classList.add("section-item");
    steakImg.classList.add("section-img");

    steakSection.appendChild(steakDescription);
    steakSection.appendChild(steakImg);


    homeElement.appendChild(img);
    homeElement.appendChild(line);
    homeElement.appendChild(pizzaSection);
    homeElement.appendChild(steakSection);

    // homeElement.textContent = "HOME CONTENT";
    return homeElement;
}

export function loadHome() {
    return createHome();
}