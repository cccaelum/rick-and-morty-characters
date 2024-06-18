/*fetch('https://rickandmortyapi.com/api/character/1')
  .then(response => response.json())
  .then(data => console.log(data.species));*/

  window.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    let totalPages = 0;
    updateCharacters();
  
  
  function loadCharacters(page) {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        totalPages = data.info.pages;
        return data.results;
      });
  }
  
  function renderCharacters(characters) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = characters.map(character => `
      <li>
        <img src="${character.image}" alt="${character.name}"> <br>
        <p><strong>Name:</strong> ${character.name}</p> <p><strong>Species:</strong> ${character.species}</p>
      </li>`).join('');
  }

  function updateCharacters() {
    loadCharacters(currentPage)
      .then(characters => {
        renderCharacters(characters);
      })
      .catch(error => {
        console.error('Error al cargar personajes:', error);
      });
  }
  
  const nextPageButton = document.getElementById('next-page');
  const prevPageButton = document.getElementById('prev-page');
  
  nextPageButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateCharacters();
    }
  });
  
  prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateCharacters();
    }
  });
});
  