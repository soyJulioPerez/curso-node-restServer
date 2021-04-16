require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Rest server');
});

app.listen(process.env.PORT, () => {
  console.log('Aplicación corriendo en el puerto', process.env.PORT);
});
