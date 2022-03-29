import quinoaImage from './quinoa.jpeg';
const container = document.getElementById('content');

function mainPage() {
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');
    const image = document.createElement('img');

    heading.innerText = "Gud Restaurant";
    paragraph.innerText = "Restaurant is rly gud.";
    image.src = quinoaImage;
    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(image);
}

export { mainPage, container };


