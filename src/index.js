import {createHome} from "./home";
import {createMenu} from "./menu";
import {createContact} from "./contact";

const mainContent = document.createElement("div");
loadPage();

function loadPage() {
    const page = document.querySelector('#content');
    page.appendChild(createHeader());
    page.appendChild(mainContent);
    mainContent.appendChild(createHome());
}

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

function clearContent() {
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

// EVENT HANDLERS
function onTabClick(e) {
    clearContent();
    const id = e.target.id;
    if (id === 'home') {
        mainContent.appendChild(createHome());
    } else if (id === 'menu') {
        mainContent.appendChild(createMenu());
    } else if (id === 'contact') {
        mainContent.appendChild(createContact());
    }
}