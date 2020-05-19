const POKEMONS = require('../mock-pokemons');

class PokemonService {
  constructor() {
    this.pokemons = POKEMONS;
  }

  addPokemon(pokemon) {
    pokemon.id = this.pokemons.length + 1;
    this.pokemons.push(pokemon);
    return pokemon;
  }

  getPokemons(term) {
    if (term) {
      return this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    return this.pokemons;
  }

  getPokemonById(id) {
    const pokemon = this.pokemons.find(pokemon => pokemon.id === +id);
    return pokemon;
  }

  updatePokemon(id, updatedPokemon) {
    console.log(updatedPokemon);
    this.pokemons = this.pokemons.map(pokemon =>
      pokemon.id === +id ? { ...pokemon, ...updatedPokemon } : pokemon
    );
  }

  deletePokemon(id) {
    this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== +id);
  }

  catchPokemon(id) {
    this.pokemons = this.pokemons.map(pokemon =>
      pokemon.id === +id ? { ...pokemon, isCaught: true } : pokemon
    );
  }

  getCaptured() {
    const captured = this.pokemons.filter(pokemon => pokemon.isCaught);
    return captured;
  }
}

module.exports = new PokemonService();
