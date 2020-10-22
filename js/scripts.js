var pokemonRepository = (function () {
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

  return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.getAll().forEach(function(pokemon){
  if (pokemon.height > 10) {
    document.write('<p>' + pokemon.name + ' (height:' + pokemon.height + ') Wow!!' + '</p>') 
  }else{ 
    document.write('<p>' + pokemon.name + ' (height:' + pokemon.height + ')' + '</p>')
  }
});

// for (var i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 10) {
//     document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ') Wow!!' + '</p>') 
//   } else { 
//     document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '</p>')
//   }
// }