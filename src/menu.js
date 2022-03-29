import { container } from './main-page'

const menuPage = () => {
    const menuHeading = document.createElement('h1');
    const foodItem = document.createElement('p');
    menuHeading.innerText = "MENU";
    foodItem.innerText = "Gud food - $1,000,000"
    container.appendChild(menuHeading);
    container.appendChild(foodItem);
}

export { menuPage };