const http = require('http');
const axios = require('axios');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>AppA request data:</h1>');

  axios.get('http://appB:3001')
    .then(response => {
      res.write(`<p>${response.data}</p>`);
      res.end();
    })
    .catch(error => {
      res.write(`Server is offline`);
      res.end();
    });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});