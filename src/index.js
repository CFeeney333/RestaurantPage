// import modules
import {loadHome} from "./home";
import {loadMenu} from "./menu";
import {loadContact} from "./contact";

// create a div to hold the main content - this will be on the highest level as well as the header
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");

// create an array of buttons that represent the tabs at the top of the page
const tabItems = {
    'home': createTabItem('HOME', 'home'),
    'menu': createTabItem('MENU', 'menu'),
    'contact': createTabItem('CONTACT', 'contact')
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
    page.appendChild(createHeader());
    page.appendChild(mainContent);
    if (!home) {
        home = loadHome();
    }
    mainContent.appendChild(home);
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
    const navList = document.createElement("div");
    navList.classList.add("tab-list");

    for (let elem of Object.values(tabItems)) {
        navList.appendChild(elem);
    }
    // TODO: move makeActiveTab call to loadPage
    makeActiveTab(tabItems['home']);

    container.appendChild(navList);
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
    // TODO: make tab ids constants
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
    makeActiveTab(tabItems[id]);
    mainContent.appendChild(elem);
}