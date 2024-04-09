const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Data from AppB');
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server run on port: ${PORT}`);
});