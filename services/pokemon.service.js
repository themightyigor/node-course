const POKEMONS = require('../mock-pokemons');
const Pokemon = require('../models/Pokemon');

class PokemonService {
  constructor() {
    this.pokemons = POKEMONS;
  }

  addPokemon(pokemon) {
    const { name, damage, isCaught, createdAt } = pokemon;
    const newPokemon = new Pokemon({
      name,
      damage,
      isCaught,
      createdAt,
    });

    return newPokemon.save();
  }

  getPokemons(term) {
    return Pokemon.find(term && { name: term });
  }

  getPokemonById(pokemonId) {
    return Pokemon.findById(pokemonId);
  }

  updatePokemon(pokemonId, updatedPokemon) {
    return Pokemon.findOneAndUpdate(
      pokemonId,
      {
        $set: updatedPokemon,
      },
      { new: true }
    );
  }

  deletePokemon(pokemonId) {
    return Pokemon.findOneAndRemove({ _id: pokemonId });
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
