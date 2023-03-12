import {createHome} from "./home";
import {createMenu} from "./menu";
import {createContact} from "./contact";

const content = document.createElement("div");

function createHeader() {
    const container = document.createElement("div");
    const navList = document.createElement("ul");

    const homeTab = document.createElement("li");
    homeTab.id = 'home';
    homeTab.classList.add("tab");
    homeTab.textContent = "HOME";
    homeTab.addEventListener('click', onTabClick);
    navList.appendChild(homeTab);

    const menuTab = document.createElement("li");
    menuTab.id = 'menu';
    menuTab.classList.add("tab");
    menuTab.textContent = "MENU";
    menuTab.addEventListener('click', onTabClick);
    navList.appendChild(menuTab);

    const contactTab = document.createElement("li");
    contactTab.id = 'contact';
    contactTab.classList.add("tab");
    contactTab.textContent = "CONTACT";
    contactTab.addEventListener('click', onTabClick);
    navList.appendChild(contactTab);

    container.appendChild(navList);
    return container;
}

function onTabClick(e) {
    const id = e.target.id;
    if (id === 'home') {
        loadHome();
    } else if (id === 'menu') {
        loadMenu();
    } else if (id === 'contact') {
        loadContact();
    }
}

function loadHome() {
    clearContent();
    content.appendChild(createHome());
}

function loadMenu() {
    clearContent();
    content.appendChild(createMenu());
}

function loadContact() {
    clearContent();
    content.appendChild(createContact());
}

function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function loadPage() {
    const page = document.querySelector('#content');
    page.appendChild(createHeader());
    page.appendChild(content);
    loadHome();
}

loadPage();