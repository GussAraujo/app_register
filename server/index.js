const express = require('express');
const app = express();
const cors = require('cors');
const rotas = require('./routes');

app.use(express.json());
app.use(cors());

app.use('/', rotas);

app.listen(3001, () => {
  console.log('Server on port 3001');
})