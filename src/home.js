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
    pizzaContent.textContent = "movet posse noluisse te fabellas voluptaria sententiae sapientem deterruisset mel interpretaris fames dolor elit condimentum reque justo offendit habeo eloquentiam sed reformidans finibus nunc molestie nec tractatos alterum dapibus legere iaculis option esse aliquam adhuc mazim ipsum suas alterum atomorum ac ludus nascetur doctus pro turpis duo scripserit legere molestie";

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
    steakContent.textContent = "nisl molestiae nominavi consul ante audire etiam ubique quod deterruisset quaerendum cu purus civibus mauris augue maluisset fames delectus nobis ornatus vim morbi ultrices iaculis ac enim dico dolorum tortor corrumpit nostra sem aenean lectus efficitur accumsan ultrices per graece nonumy vidisse consectetuer nominavi himenaeos latine fames alia parturient ac";

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