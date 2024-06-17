const characterList = document.getElementById('character-list');
const nextPageButton = document.getElementById('next-page');
const prevPageButton = document.getElementById('prev-page');

/*fetch('https://rickandmortyapi.com/api/character/1')
  .then(response => response.json())
  .then(data => console.log(data.species));*/


  window.addEventListener('DOMContentLoaded', async () => {
    const data = await loadCharacters()
    renderCharacters(data.results)
  })

  async function loadCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=1')
    return await response.json()
  }

  const createCharacterItem = characters => characters.map(character =>        
    `<li>
    <img src="${character.image}" alt="${character.name}">
    <br>
    Name: ${character.name} <br> Species: ${character.species}
  </li>
`).join('');


  function renderCharacters(characters) {
    const itemsString = createCharacterItem(characters)
    characterList.innerHTML = itemsString
  }


  nextPageButton.addEventListener('click', () => {})

  prevPageButton.addEventListener('click', () => {})