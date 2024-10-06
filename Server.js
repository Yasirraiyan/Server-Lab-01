const express = require('express');
const path = require('path');
const app = express();

// Serve static files (like the movie poster) from the 'public' folder
app.use(express.static('public'));

// Home page route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Marvel Universe</h1>
    <ul>
      <li><a href="/comics">Comics</a></li>
      <li><a href="/animated-series">Animated Series</a></li>
      <li><a href="/movies">Movies</a></li>
    </ul>
  `);
});

// Comics route - Text response
app.get('/comics', (req, res) => {
  res.send('Comics are a fantastic way to experience Marvels stories.');
});

// Animated Series route - HTML formatted response
app.get('/animated-series', (req, res) => {
  res.send(`
    <h1>Marvel Animated Series</h1>
    <p>Animated series bring Marvels world to life in a different and fun way.</p>
  `);
});

// Movies route - Serve HTML file
app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','lab1.html'));
});

// Start the server
const port = 1069;
app.listen(1069, () => {
  console.log(listening on port 1069);
});
