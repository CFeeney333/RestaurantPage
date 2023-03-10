import {createHome} from "./home";
import {createMenu} from "./menu";
import {createContact} from "./contact";

function createHeader() {
    return document.createElement("div");
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