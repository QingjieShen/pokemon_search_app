const inputText = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokName = document.getElementById('pokemon-name');
const pokId = document.getElementById('pokemon-id');
const pokWeight = document.getElementById('weight');
const pokHeight = document.getElementById('height');
const pokImgContainer = document.getElementById('pictures');
const pokType = document.getElementById('types');
const status = document.querySelectorAll('.status');

const url = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';


// input text sorting
const searchTarget = (inputValue) => {
    const inputId = inputValue.match(/\d+/g);
    const inputName = inputValue.match(/[a-zA-Z]+/g);
    if (inputId) {
        return inputId[0];
    } else if (inputName) {
        return inputName[0];
    } else {
        alert('Pokemon not found');
        return;
    }
}

// test regex
// const text = '94pikachu';
// console.log('inputId equals:', text.match(/\d+/g));
// console.log('inputName equals:', text.match(/[a-zA-Z]+/g));
// console.log(url + '/' + searchTarget("94pikachu"));


// fetch data
const fetchData = async () => {
    try {
        const inputValue = inputText.value;
        // console.log(url + '/' + searchTarget(inputValue));
        const res = await fetch(url + '/' + searchTarget(inputValue));
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// insert result


// event listener

searchBtn.addEventListener('click', () => {
    fetchData();
})