import { container, mainPage } from './main-page';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

const navBar = document.getElementById("nav-bar");

const mainPageTab = document.createElement('button');
const menuPageTab = document.createElement('button');
const contactPageTab = document.createElement('button');

mainPageTab.innerText = "Home";
menuPageTab.innerText = "Menu";
contactPageTab.innerText = "Contact";

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
