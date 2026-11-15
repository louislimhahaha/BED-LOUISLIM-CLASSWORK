const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Book Category API');
});

app.get('/categories', (req, res) => {
  res.json([
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Biography' }
  ]);
});

app.get('/about', (req, res) => {
  res.send(
    'Hi, I am Louis Lim, an Information Technology student at Ngee Ann Polytechnic. ' +
    'Outside of classes, I spend my time lifting weights at the gym, training Muay Thai, and breaking down football match analytics.'
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
