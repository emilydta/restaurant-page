import quinoaImage from './quinoa.jpeg';

function loadMainPage() {
    const container = document.createElement('div');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');
    const image = document.createElement('img');

    heading.innerText = "Gud Restaurant";
    paragraph.innerText = "Restaurant is rly gud.";
    image.src = quinoaImage;
    document.body.appendChild(container);
    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(image);
}

export { loadMainPage };


