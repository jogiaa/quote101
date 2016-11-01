const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  var quote = '<b><i>Four things support the world:</i></br> the learning of the wise, </br>the justice of the great, </br>the prayers of the good, </br>and the valor of the brave';
  res.end(quote);

});

server.listen(port , () => {
  console.log(`Server is open for business...`);
});
