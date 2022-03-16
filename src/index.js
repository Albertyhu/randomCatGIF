import _ from 'lodash';
import './myStyle.css';
import { fetchNew } from  './fetchGIF.js'
import { GiphyFetch } from '@giphy/js-fetch-api'
import './searchGIF.js';

//for watching the html file 
require('./index.html')

const countdown = {
    count: 5,
    decrement() {
        if (this.count == 0) {
            this.count = 5;
        }
        else {
            this.count--;
        }
    },
}

const button = document.getElementById('fetchButton');

button.addEventListener('click', fetchNew);

const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=AwFuWvUi5hOrf2vqElpXARws8MQPPZAR&s=cat', { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        img.src = response.data.images.original.url;
        //console.log(response)
    })

/*
setInterval(function () {
    location.reload();
}, 5000)
const countDisplay = document.getElementById('countdown');
countDisplay.innerHTML = countdown.count;
setInterval(function () {
    countdown.decrement();
    countDisplay.innerHTML = countdown.count;

}, 1000)
*/