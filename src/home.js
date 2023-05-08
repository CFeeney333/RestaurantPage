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


    const fishSection = document.createElement("div");
    fishSection.classList.add("section");

    const fishImg = document.createElement("img");
    fishImg.src = "../images/tuna-steak.webp";
    fishImg.classList.add("section-item");
    fishImg.classList.add("section-img");

    const fishDescription = document.createElement("div");
    fishDescription.classList.add("section-item");

    const fishHeading = document.createElement("h2");
    fishHeading.textContent = "FRESH FISH SERVED DAILY";

    const fishContent = document.createElement("p");
    fishContent.textContent = "patrioque suas iuvaret vehicula fugit definitiones eripuit senectus vel constituto expetenda elit quo dui vestibulum ornatus non hac metus class convallis dissentiunt commodo sit adversarium reque hac affert fabulas adipisci sed ridiculus convallis error ex tractatos molestiae quaerendum donec tamquam volumus patrioque honestatis accumsan instructior verear lorem vituperata urbanitas fermentum inciderint tota augue wisi graeci utamur falli has debet prompta dicunt postea deterruisset eam autem faucibus leo curabitur mazim libris eum moderatius sumo quot iuvaret ligula aliquam quaerendum nullam eu blandit euismod graeco reformidans litora tale facilis porro elit nascetur tempor voluptatum autem urna dissentiunt placerat mus sodales per convenire";

    fishDescription.appendChild(fishHeading);
    fishDescription.appendChild(fishContent);

    fishSection.appendChild(fishImg);
    fishSection.appendChild(fishDescription);


    homeElement.appendChild(img);
    homeElement.appendChild(line);
    homeElement.appendChild(pizzaSection);
    homeElement.appendChild(steakSection);
    homeElement.appendChild(fishSection);

    return homeElement;
}

export function loadHome() {
    return createHome();
}