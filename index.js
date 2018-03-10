const config = require('./config.json');
const http = require('http');

const handleRequest = (req, res) => {
  res.writeHead(config.statusCode || 302, {
    Location: config.location + req.url
  });
  res.end();
};

const server = http.createServer(handleRequest);

server.listen(config.port, err => {
  if (err) return console.log('Server failed to start.', err);
  console.log(
    `Redirecting requests on port ${config.port} to ${config.location}`
  );
});
