var pokemonList = [
  { name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
  { name: 'Ivysaur', height: 10, types: ['grass', 'poison']},
  { name: 'Venusaur', height: 20, types: ['grass', 'poison']}
];

for (var i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 10) {
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ') Wow!!' + '</p>') 
  } else { 
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '</p>')
  }
}