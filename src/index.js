import {createHome} from "./home";
import {createMenu} from "./menu";
import {createContact} from "./contact";

function createHeader() {
    const container = document.createElement("div");
    const navList = document.createElement("ul");

    const homeTab = document.createElement("li");
    homeTab.id = 'home';
    homeTab.classList.add("tab");
    homeTab.textContent = "HOME";
    navList.appendChild(homeTab);

    const menuTab = document.createElement("li");
    menuTab.id = 'menu';
    menuTab.classList.add("tab");
    menuTab.textContent = "MENU";
    navList.appendChild(menuTab);

    const contactTab = document.createElement("li");
    contactTab.id = 'contact';
    contactTab.classList.add("tab");
    contactTab.textContent = "CONTACT";
    navList.appendChild(contactTab);

    container.appendChild(navList);
    return container;
}

function createContent() {
    const content = document.createElement("div");
    content.appendChild(createHome());
    content.appendChild(createMenu());
    content.appendChild(createContact());
    return content;
}

function loadPage() {
    const page = document.querySelector('#content');
    page.appendChild(createHeader());
    page.appendChild(createContent());
}

loadPage();