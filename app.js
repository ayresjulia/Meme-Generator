const form = document.querySelector('#logoform');
const urlInput = document.querySelector('input[name="urlName"]');
const textOnTop = document.querySelector('input[name="textTop"]');
const textOnBottom = document.querySelector('input[name="textBottom"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeMeme(
        urlInput.value,
        textOnTop.value,
        textOnBottom.value
    );
    results.appendChild(newMeme);
});

function makeMeme(){
    const container = document.createElement('div'); //create container div
    container.classList = 'container'; //create div class

    const memeImage = document.createElement('img'); //create image
    memeImage.classList = 'meme-space'; // create img class
    memeImage.setAttribute('src', urlInput.value ); //make image out of a link
    container.append(memeImage);

    const top = document.createElement('div'); //create top text div
    top.innerText = textOnTop.value;
    top.classList = 'top'; //create text class
    container.append(top);

    const bottom = document.createElement('div'); //create bottom text div
    bottom.innerText = textOnBottom.value;
    bottom.classList = 'bottom'; //create text class
    container.append(bottom);

    container.addEventListener('click', function(){
        container.remove() //when clicked on meme, remove it
    })

    return container; //return full meme
}

function randomRGB(){
    const r = Math.floor(Math.random() * 256) //random from 0 to 255
    const g = Math.floor(Math.random() * 256) //random from 0 to 255
    const b = Math.floor(Math.random() * 256) //random from 0 to 255
    return `rgb(${r}, ${g}, ${b})`;
}

const title = document.querySelector('#title')

const intervalId = setInterval(function(){
        title.style.color = randomRGB();
}, 300);














