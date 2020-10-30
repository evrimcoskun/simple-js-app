var pokemonRepository = (function() {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  var modalContainer = document.querySelector('#modal-container');

  function getAll() {
    return pokemonList;
  }
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function addListItem(pokemon) {
    var pokemonList = document.querySelector('.pokemon-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function() {
      showDetails(pokemon)
    })
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  
  function loadDetails(pokemon) {
    var url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon.name, pokemon.height, pokemon.imageUrl)
    });
  }
    
  function showModal(title, height, img) {

    // Clear all existing modal content
    modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);
    
    var textContainerElement = document.createElement('div');
    textContainerElement.classList.add('modal-text')

    var titleElement = document.createElement('h1');
    titleElement.innerText = title;

    var contentElement = document.createElement('p');
    if (height > 10) {
      contentElement.innerHTML = 'height: ' + height + '<br> Wow, that\'s a big Pokemon!';
    } else {
      contentElement.innerText = 'height: ' + height;
    }
    
    var imgElement = document.createElement('img');
    imgElement.src = img;

    textContainerElement.appendChild(titleElement);
    textContainerElement.appendChild(contentElement);
    modal.appendChild(closeButtonElement);
    modal.appendChild(imgElement);
    modal.appendChild(textContainerElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });
  
  modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
