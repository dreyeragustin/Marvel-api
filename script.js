const apiUrl = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3562247efb0eebfaee149123974bf71a&hash=4d78d9650e733a74646b97ca617c3dbc";

const characterList = document.getElementById("character-list");

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (data.code !== 0) {
      const characters = data.data.results;

      characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");
        characterDiv.innerHTML = `
          <h2>${character.name}</h2>          
          <img src="${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}" alt="${character.name}">          
          <p>Comics disponibles: ${character.comics.available}</p>
          <p>Series disponibles: ${character.series.available}</p>                    
        `;
        characterList.appendChild(characterDiv);
      });
    } else {
      characterList.innerHTML = "No se pudo cargar la información de los personajes.";
    }
  })
  .catch(error => {
    characterList.innerHTML = "Hubo un error al cargar la información de los personajes: " + error;
  });
