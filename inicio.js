const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades');
});

app.get('/portafolio', (req, res) => {
  res.render('portafolio');
});

app.get('/SobreMI', (req, res) => {
  res.render('SobreMI');
});

app.get('/reciente', (req, res) => {
    res.render('reciente');
  });

app.get('/analizador1', (req, res) => {
    res.render('analizador1');
  });

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
  