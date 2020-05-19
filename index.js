const express = require('express');

const app = express();

app.use(express.json());

app.use('/api/pokemons', require('./routes/api/pokemons'));

const port = process.env.port || 1337;

app.listen(port, () => console.log(`Server started on port ${port}`));
