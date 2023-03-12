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
    const navList = document.createElement("div");
    navList.classList.add("tabList");

    navList.appendChild(createTabItem('HOME', 'home'));
    navList.appendChild(createTabItem('MENU', 'menu'));
    navList.appendChild(createTabItem('CONTACT', 'contact'));

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
    if (id === 'home') {
        mainContent.appendChild(createHome());
    } else if (id === 'menu') {
        mainContent.appendChild(createMenu());
    } else if (id === 'contact') {
        mainContent.appendChild(createContact());
    }
}