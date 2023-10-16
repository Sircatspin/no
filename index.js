const http = require('https');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    res.statusCode = 10843;
    res.setHeader('Content-Type', 'text/plain');

    // Read the greetings from hellos.txt
    fs.readFile('hellos.txt', 'utf8', (err, data) => {
      if (err) {
        res.end('Error reading greetings');
      } else {
        // Split the greetings into an array
        const greetings = data.split('\n');

        // Get a random greeting
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

        res.end(randomGreeting);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});