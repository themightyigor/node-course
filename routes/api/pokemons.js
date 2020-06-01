const express = require('express');
const PokemonService = require('../../services/pokemon.service');

const router = express.Router();

// @route    POST api/pokemons
// @desc     Create a Pokemon
router.post('/', (req, res) => {
  const newPokemon = {
    name: req.body.name,
    damage: req.body.damage,
    isCaught: req.body.isCaught,
    createdAt: new Date().toISOString(),
  };

  const pokemon = PokemonService.addPokemon(newPokemon);

  res.setHeader('Location', `api/pokemons/${pokemon.id}`);
  res.status(201).json({ pokemon });
});

// @route    GET api/pokemons or api/pokemons?pokemon=blabla
// @desc     Get all pokemons or filtered by query string
router.get('/', (req, res) => {
  res.json(PokemonService.getPokemons(req.query.pokemon));
});

// @route    GET api/pokemons/captured
// @desc     GET a captured pokemon
router.get('/captured', (req, res) => {
  res.json(PokemonService.getCaptured());
});

// @route    GET api/pokemons/:id
// @desc     Get pokemon by ID
router.get('/:id', (req, res) => {
  const pokemon = PokemonService.getPokemonById(req.params.id);

  if (!pokemon) {
    return res.status(400).json({ msg: 'Pokemon not found' });
  }

  res.json(pokemon);
});

// @route    PUT api/pokemons/update/:id
// @desc     Update a pokemon
router.put('/:id', (req, res) => {
  res.json(PokemonService.updatePokemon(req.params.id, req.body));
});

// @route    DELETE api/pokemons/:id
// @desc     DELETE a pokemon
router.delete('/:id', (req, res) => {
  res.json(PokemonService.deletePokemon(req.params.id));
});

// @route    PATCH api/pokemons/:id
// @desc     PATCH a pokemon
router.patch('/:id', (req, res) => {
  res.json(PokemonService.catchPokemon(req.params.id));
});

module.exports = router;
