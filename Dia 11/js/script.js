const NombrePokemon = document.querySelector('.Nombre_Pokemon');
const NumeroPokemon = document.querySelector('.Numero_Pokemon');
const ImagenPokemon = document.querySelector('.Imagen_Pokemon');

const form = document.querySelector('.form');
const input = document.querySelector('.input__Buscar');
const BotonAnterior = document.querySelector('.btn-Siguiente');
const BotonSiguiente = document.querySelector('.btn-Anterior');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  NombrePokemon.innerHTML = 'Cargando...';
  NumeroPokemon.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    ImagenPokemon.style.display = 'block';
    NombrePokemon.innerHTML = data.name;
    NumeroPokemon.innerHTML = data.id;
    ImagenPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
  } else {
    ImagenPokemon.style.display = 'none';
    NombrePokemon.innerHTML = 'No Encontrado :c';
    NumeroPokemon.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

function playSonido_Pokemon(audioUrl) {
  let audio = document.getElementById("Sonido_pokemon");
  audio.src = audioUrl;
  audio.play();
}

BotonAnterior.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

BotonSiguiente.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);