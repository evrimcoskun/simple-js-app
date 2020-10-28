var pokemonRepository = (function() {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function getAll() {
    return pokemonList;
  }
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  
  function showDetails(pokemon) {
    console.log(pokemon)
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
      console.log(pokemon);
    });
  }
    
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});


// pokemonRepository.getAll().forEach(function(pokemon) {
//   pokemonRepository.addListItem(pokemon);
// 
// });

// for (var i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 10) {
//     document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ') Wow!!' + '</p>') 
//   } else { 
//     document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '</p>')
//   }
// }