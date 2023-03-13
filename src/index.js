import {loadHome} from "./home";
import {loadMenu} from "./menu";
import {loadContact} from "./contact";

const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
let home, menu, contact;
loadPage();

function loadPage() {
    const page = document.querySelector('#content');
    page.appendChild(createHeader());
    page.appendChild(mainContent);
    if (!home) {
        home = loadHome();
    }
    mainContent.appendChild(home);
}

function createHeader() {
    const container = document.createElement("div");
    const navList = document.createElement("div");
    navList.classList.add("tab-list");

    const tabItems = [createTabItem('HOME', 'home'),
        createTabItem('MENU', 'menu'),
        createTabItem('CONTACT', 'contact')];
    tabItems.forEach((elem) => navList.appendChild(elem));

    container.appendChild(navList);
    return container;
}

function createTabItem(text, id) {
    const tab = document.createElement("div");
    tab.id = id;
    tab.classList.add('tab');
    tab.textContent = text;
    tab.addEventListener('click', onTabClick);
    return tab;
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
    let elem;
    if (id === 'home') {
        if (!home) {
            home = loadHome();
        }
        elem = home;
    } else if (id === 'menu') {
        if (!menu) {
            menu = loadMenu();
        }
        elem = menu;
    } else if (id === 'contact') {
        if (!contact) {
            contact = loadContact();
        }
        elem = contact;
    }
    mainContent.appendChild(elem);
}