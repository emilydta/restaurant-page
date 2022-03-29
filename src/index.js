import { container, mainPage } from './main-page';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

const navBar = document.getElementById("nav-bar");

const mainPageTab = document.createElement('button').innerText = "Home";
const menuPageTab = document.createElement('button').innerText = "Menu";
const contactPageTab = document.createElement('button').innerText = "Contact";

navBar.appendChild(mainPageTab);
navBar.appendChild(menuPageTab);
navBar.appendChild(contactPageTab);

mainPage();

const changePage = (tab) => {
    container.innerHTML = "";
    tab();
}


document.addEventListener("click", (e) => {
    if (e.target.innerText == "Home") {
        changePage(mainPage);
    }
    if (e.target.innerText == "Menu") {
        changePage(menuPage);
    }
    if (e.target.innerText == "Contact") {
        changePage(contactPage);
    }
})
