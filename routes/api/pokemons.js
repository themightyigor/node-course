const express = require('express');
const PokemonService = require('../../services/pokemon.service');

const router = express.Router();

// @route    POST api/pokemons
// @desc     Create a Pokemon
router.post('/', async (req, res) => {
  try {
    const pokemon = await PokemonService.addPokemon(req.body);

    res.setHeader('Location', `api/pokemons/${pokemon.id}`);
    res.status(201).json(pokemon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/pokemons or api/pokemons?pokemon=blabla
// @desc     Get all pokemons or filtered by query string
router.get('/', async (req, res) => {
  try {
    const pokemons = await PokemonService.getPokemons(req.query.pokemon);
    res.json(pokemons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/pokemons/captured
// @desc     GET a captured pokemon
router.get('/captured', (req, res) => {
  res.json(PokemonService.getCaptured());
});

// @route    GET api/pokemons/:id
// @desc     Get pokemon by ID
router.get('/:id', async (req, res) => {
  try {
    const pokemon = await PokemonService.getPokemonById(req.params.id);

    res.json(pokemon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/pokemons/update/:id
// @desc     Update a pokemon
router.put('/:id', async (req, res) => {
  try {
    const pokemon = await PokemonService.updatePokemon(req.params.id, req.body);

    res.json(pokemon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/pokemons/:id
// @desc     DELETE a pokemon
router.delete('/:id', async (req, res) => {
  try {
    await PokemonService.deletePokemon(req.params.id);

    res.json({ msg: 'Pokemon deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PATCH api/pokemons/:id
// @desc     PATCH a pokemon
router.patch('/:id', (req, res) => {
  res.json(PokemonService.catchPokemon(req.params.id));
});

module.exports = router;
