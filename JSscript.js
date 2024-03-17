async function characters() {
    try {
        let response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=8');
        let data = await response.json();
        let container = document.getElementById('quotes');
        
        // Limpiar el contenedor antes de agregar nuevos elementos
        container.innerHTML = '';
        
        data.forEach(personaje => {
            let cuadro = document.createElement('div');
            cuadro.classList.add('cuadro');
            let image = document.createElement('img');
            image.src = personaje.image;
            let nombre = document.createElement('div');
            nombre.classList.add('name');
            nombre.textContent = personaje.character;
            
            cuadro.appendChild(image);
            cuadro.appendChild(nombre);
            container.appendChild(cuadro);
        });
    } catch (error) {
        console.error('Error al cargar los personajes:', error);
    }
}


characters();

let icon = document.querySelector('.fa-magnifying-glass');

icon.addEventListener('click', async function(event) {
    event.preventDefault();
   
    let searchTerm = document.getElementById('personaje').value;
    if (searchTerm.trim() !== '') {
        try {
            let response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${searchTerm}&count=8`);
            let data = await response.json();

            
            let container = document.getElementById('quotes');
            container.innerHTML = '';
            
            data.forEach(personaje => {
                let cuadro = document.createElement('div');
                cuadro.classList.add('poster');

                // Agregar imagen del personaje
                let imagen = document.createElement('img');
                imagen.classList.add('imagen');
                imagen.src = personaje.image;
                cuadro.appendChild(imagen);

                // Agregar nombre del personaje
                let nombre = document.createElement('div');
                nombre.classList.add('nombre');
                nombre.textContent = personaje.character;
                cuadro.appendChild(nombre);

                // Agregar frase del personaje
                let textoFrase = document.createElement('p');
                textoFrase.textContent = `"${personaje.quote}"`;
                textoFrase.classList.add('text');
                textoFrase.style.color = 'black';
                cuadro.appendChild(textoFrase);
                
                container.appendChild(cuadro);
            });
          
            ocultar();

        } catch (error) {
            console.error('Error al cargar las frases del personaje:', error);
        }
    }
});

let icon2 = document.getElementById('searchIcon2');
if (searchIcon2) {
    searchIcon2.addEventListener('click', async function(event){
        event.preventDefault();
        let item2 = document.getElementById('how-many').value;
        let countPhrase = document.getElementById('how-many-phrases').value;

        if (item2.trim() !== '' && countPhrase > 0) {
            try {
                let response = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${item2}&count=${countPhrase}`);
                let data = await response.json();

                let container = document.getElementById('quotes');
                container.innerHTML='';

                data.forEach(personaje => {
                    let cuadro = document.createElement('div');
                    cuadro.classList.add('poster');

                    let imagen = document.createElement('img');
                    imagen.classList.add('imagen');
                    imagen.src = personaje.image;
                    cuadro.appendChild(imagen);

                    let nombre = document.createElement('div');
                    nombre.classList.add('nombre');
                    nombre.textContent = personaje.character;
                    cuadro.appendChild(nombre);

                    let textoFrase = document.createElement('p');
                    textoFrase.textContent = `"${personaje.quote}"`;
                    textoFrase.classList.add('text');
                    cuadro.appendChild(textoFrase);
                    
                    container.appendChild(cuadro);
                });
                ocultar();

            } catch (error) {
                console.error('Error al cargar las frases del personaje:', error);
            }
        } else {
            alert('Por favor, ingresa un nombre de personaje válido y una cantidad de frases mayor que cero.');
        }
    });
} else {
    console.error('No se encontró el ícono de búsqueda con el ID searchIcon2');
}
        
let backButton = document.getElementById('backButton');
backButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = "index.html";
});


let loadMore = document.getElementById('loadMore');
loadMore.addEventListener('click', cargarMasPersonajes);

async function cargarMasPersonajes() {
    try {
        let response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=4');
        let data = await response.json();
        let container = document.getElementById('quotes');

        data.forEach(personaje => {
            let cuadro = document.createElement('div');
            cuadro.classList.add('cuadro');
            let image = document.createElement('img');
            image.src = personaje.image;
            let nombre = document.createElement('div');
            nombre.classList.add('name');
            nombre.textContent = personaje.character;

            cuadro.appendChild(image);
            cuadro.appendChild(nombre);
            container.appendChild(cuadro);
        });
    } catch (error) {
        console.error('Error al cargar más personajes:', error);
    }
}

function ocultar (){
    loadMore.style.display = 'none';
}