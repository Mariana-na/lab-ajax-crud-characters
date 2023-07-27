const charactersAPI = new APIHandler('http://localhost:3000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async () => {
    try {
      const dataStore =  await charactersAPI.getFullList()
      const charactersContainer = document.querySelector('.characters-container');
      charactersContainer.innerHTML = '';

      console.log(dataStore)

      dataStore.data.forEach ((character) => {
        const card = characterCard(character);
        charactersContainer.appendChild(card);

      })
    } catch (error) {
      console.log(error)
    }

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });


  function characterCard(character) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('character-info');

    const nameElement = document.createElement('div');
    nameElement.textContent = `Name: ${character.name}`;

    const occupationElement = document.createElement('div');
    occupationElement.textContent = `Occupation: ${character.occupation}`;

    const weaponElement = document.createElement('div');
    weaponElement.textContent = `Weapon: ${character.weapon}`;

    const cartoonElement = document.createElement('div');
    cartoonElement.textContent = `Is a Cartoon: ${character.cartoon ? 'Yes' : 'No'}`;

    cardContainer.appendChild(nameElement);
    cardContainer.appendChild(occupationElement);
    cardContainer.appendChild(weaponElement);
    cardContainer.appendChild(cartoonElement);

    return cardContainer;
  }


});
