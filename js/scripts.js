var pokemonRepository = (function() {
  var pokemonList = [  
    { name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
    { name: 'Ivysaur', height: 10, types: ['grass', 'poison']},
    { name: 'Venusaur', height: 20, types: ['grass', 'poison']}
  ];

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

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
    
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);

});

// for (var i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 10) {
//     document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ') Wow!!' + '</p>') 
//   } else { 
//     document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '</p>')
//   }
// }