const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/router');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', router);

const port = process.env.port || 1337;

app.listen(port, () => console.log(`Server started on port ${port}`));
