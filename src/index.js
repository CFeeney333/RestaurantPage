// import modules
import {loadHome} from "./home";
import {loadMenu} from "./menu";
import {loadContact} from "./contact";

// create a div to hold the main content - this will be on the highest level as well as the header
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");

// use constants for tab ids
const HOME = 'home';
const MENU = 'menu';
const CONTACT = 'contact';

// create an array of buttons that represent the tabs at the top of the page
const tabItems = {
    'home': createTabItem('HOME', HOME),
    'menu': createTabItem('MENU', MENU),
    'contact': createTabItem('CONTACT', CONTACT)
}

// we will keep a reference to the home, menu and contact tab contents when they are created
let home, menu, contact;

// load the header and the main content
loadPage();

/**
 * Load the initial state of the page
 *
 * The home content is loaded into the main content by default
 */
function loadPage() {
    const page = document.querySelector('#content');
    if (!home) {
        home = loadHome();
        addClass(home, "home-content");
    }
    makeActiveTab(tabItems[HOME]);

    mainContent.appendChild(home);

    page.appendChild(createHeader());
    page.appendChild(mainContent);
}

/**
 * Make a tab element from the tabItems array the active one, also removing the active class from all other tab items
 * @param tabItem the tabItem to make the active tabItem
 */
function makeActiveTab(tabItem) {
    for (let item of Object.values(tabItems)) {
        item.classList.remove('active');
    }
    tabItem.classList.add('active');
}

/**
 * Create the header
 * @returns {HTMLDivElement} the element that represents the header
 */
function createHeader() {
    const container = document.createElement("div");

    // create the logo
    const logo = document.createElement("img");
    logo.src = "..\\images\\TurquesaJardimLogo.png";
    logo.id = "logo";
    container.appendChild(logo);

    // create the navigation list of tabs
    const navList = document.createElement("div");
    navList.classList.add("tab-list");
    for (let elem of Object.values(tabItems)) {
        navList.appendChild(elem);
    }
    container.appendChild(navList);
    container.classList.add("header");

    return container;
}

/**
 * Create a tab button with a given id and text to display
 * @param text the text to display in the tab
 * @param id the id of the tab
 * @returns {HTMLButtonElement} the tab element with the 'tab' class added
 */
function createTabItem(text, id) {
    const tab = document.createElement("button");
    tab.id = id;
    tab.classList.add('tab');
    tab.textContent = text;
    tab.addEventListener('click', onTabClick);
    return tab;
}

/**
 * Clear the content from a parent element by removing all children
 */
function clearContent(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// EVENT HANDLERS
/**
 * When a tab is clicked determine the content that should be shown
 * @param e the event
 */
function onTabClick(e) {
    clearContent(mainContent);
    const id = e.target.id;
    let elem;
    if (id === HOME) {
        if (!home) {
            home = loadHome();
            addClass(home, "home-content");
        }
        elem = home;
    } else if (id === MENU) {
        if (!menu) {
            menu = loadMenu();
            addClass(menu, "menu-content");
        }
        elem = menu;
    } else if (id === CONTACT) {
        if (!contact) {
            contact = loadContact();
            addClass(contact, "contact-content");
        }
        elem = contact;
    }
    makeActiveTab(tabItems[id]);
    mainContent.appendChild(elem);
}

function addClass(elem, name) {
    if (!elem.classList.contains(name)) {
        elem.classList.add(name);
    }
}