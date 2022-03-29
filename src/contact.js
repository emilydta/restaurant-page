import { container } from './main-page'

const contactPage = () => {
    const contactHeading = document.createElement('h1');
    const contactItem = document.createElement('p');
    contactHeading.innerText = "CONTACT";
    contactItem.innerText = "Call us at 0411 111 111 111 111"
    container.appendChild(contactHeading);
    container.appendChild(contactItem);
}

export { contactPage };