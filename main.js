const inputText = document.getElementById('search-input');
const searchBtn = document.getElementById('search-button');
const pokName = document.getElementById('pokemon-name');
const pokId = document.getElementById('pokemon-id');
const pokWeight = document.getElementById('weight');
const pokHeight = document.getElementById('height');
const pokImgContainer = document.querySelector('.pictures');
const pokType = document.getElementById('types');
const pokHp = document.getElementById('hp');
const pokAttack = document.getElementById('attack');
const pokDefense = document.getElementById('defense');
const pokSpecialAttack = document.getElementById('special-attack');
const pokSpecialDefense = document.getElementById('special-defense');
const pokSpeed = document.getElementById('speed');

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
        alert('Please type in Pokemon\'s name or id to search.');
        return;
    }
}

// type display
const typeDisplay = (data) => {
    pokType.innerHTML = "";
    let types = [];
    data.types.forEach(element => {
        types += `<p id="types">${element.type.name.toUpperCase()}</p>`
    });
    return types;
}

// fetch data
const fetchData = async () => {
    try {
        const inputValue = inputText.value;
        // console.log(url + '/' + searchTarget(inputValue));
        const res = await fetch(url + '/' + searchTarget(inputValue).toLowerCase());
        if (res.ok) {
            const data = await res.json()
            showPok(data);
        } else {
            alert('Pokemon not found');
        }
    } catch (err) {
        console.log(err);
    }
}

// insert result
const showPok = (data) => {
    pokName.textContent = data.name.toUpperCase();
    pokId.textContent = `#${data.id}`;
    pokWeight.textContent = `Weight: ${data.weight}`;
    pokHeight.textContent = `Height: ${data.height}`;
    pokType.innerHTML = typeDisplay(data);
    pokImgContainer.innerHTML = `<img src="${data.sprites.front_default}" alt="image of Pokemon ${data.name}" id="sprite">`;
    pokHp.textContent = data.stats[0].base_stat;
    pokAttack.textContent = data.stats[1].base_stat;
    pokDefense.textContent = data.stats[2].base_stat;
    pokSpecialAttack.textContent = data.stats[3].base_stat;
    pokSpecialDefense.textContent = data.stats[4].base_stat;
    pokSpeed.textContent = data.stats[5].base_stat;
}

// event listener
searchBtn.addEventListener('click', () => {
    fetchData();
})