import RickAndMortyService from './service.js';

const service = new RickAndMortyService();
const studentName = "Luis Ignacio Forero Molina";
const studentCode = "224778";

function createCharacterCard(character) {
    let statusCircleColor = '';
    if (character.status === 'Alive') {
        statusCircleColor = 'green';
    } else if (character.status === 'Dead') {
        statusCircleColor = 'red';
    } else {
        statusCircleColor = 'grey';
    }

    return `
        <div class="character" id="${character.id}">
            <img src="${character.image}" class="character-image" alt="${character.name}">
            <div>
                <h1 class="character-title"> ${character.name}</h1>
                <p class="spaced-paragraph">
                    <span class="status-circle" style="background-color: ${statusCircleColor};"></span>
                    ${character.status} - ${character.species}
                </p>
                
                <p class="spaced-paragraph2">First Seen in:</p>
                <p class="spaced-paragraph"> ${character.origin.name}</p>
                <p class="spaced-paragraph2">Last known location:</p>
                <p style="margin-bottom:40px" > ${character.location.name}</p>
            </div>
        </div>
    `;
}

function addCharacterListeners(character) {
    const characterElement = document.getElementById(character.id);

    characterElement.addEventListener('click', () => {
        console.log(`Hola, soy ${character.name}`);
    });
}

function createCharacterList() {
    const charactersContainer = document.getElementById('charactersContainer');

    service.getAllCharacters().then(characters => {
        if (Array.isArray(characters)) {
            characters.forEach(character => {
                const characterCard = createCharacterCard(character);
                charactersContainer.innerHTML += characterCard;
                addCharacterListeners(character);
            });
        } else {
            console.error("Characters data is not an array:", characters);
        }
    }).catch(error => {
        console.error("Error fetching characters:", error);
    });
}

createCharacterList();
