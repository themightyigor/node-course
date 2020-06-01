const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/pokemons', require('./routes/api/pokemons'));

const port = process.env.port || 1337;

app.listen(port, () => console.log(`Server started on port ${port}`));
