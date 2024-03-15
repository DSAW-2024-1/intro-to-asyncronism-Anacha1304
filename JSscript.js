document.addEventListener("DOMContentLoaded", async function() {
    let bigContainer = document.getElementById('big-container');
    await displayPosters(bigContainer);

    let quotes = document.getElementById('quotes');
    let characterSearch = document.getElementById('characterSearch');

    characterSearch.addEventListener('click', async function (event) {
        event.preventDefault();

        let personaje = document.getElementById('personaje').value.trim();
        if (personaje === '') return;

        let characterQuotes = await fetchQuotes(personaje);
        displayQuotes(characterQuotes);
    });

    async function fetchQuotes(personaje){
        try {
            let response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${encodeURIComponent(personaje)}`);
            let data = await response.json();
            return data; 
        } catch (error) {
            console.error('Hubo un error al obtener las citas de la API');
            return [];
        }
    }

    function displayQACuotes(characterQuotes) {
        quotes.innerHTML = '';

        if (characterQuotes.length === 0) {
            quotes.innerHTML = '<p>No se encontraron citas para este personaje.</p>';
            return;
        }

        characterQuotes.forEach(quote => {
            let quoteElement = document.createElement('div');
            quoteElement.textContent = '${quote.character} : "${quote.quote"';
            quotes.appendChild(quoteElement);
        });
    }
    
});

let shown = [];

 

async function simpsonsData() {
    try {
        let response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=8');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Hubo un error al obtener los datos de la API', error);
    }
}

async function displayPosters(bigContainer) {
    let data = await simpsonsData();

    data.forEach(character => {
 
        if(!shown.includes(character.character)){
            let cuadro = document.createElement('div');
            cuadro.className = 'cuadro';

            let img = document.createElement('img');
            img.src = character.image;
            cuadro.appendChild(img);

            let name = document.createElement('div');
            name.className = 'name';
            name.textContent = character.character;
            cuadro.appendChild(name);

            bigContainer.appendChild(cuadro);

            shown.push(character.character);
        }
        
    });
}
