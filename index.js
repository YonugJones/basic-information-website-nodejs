import { createServer } from 'node:http';
import fs from 'node:fs';

const hostname = 'localhost';
const port = 8080;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  let path = './pages/';
  switch(req.url) {
    case '/': 
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact-me':
      path += 'contact-me.html';
      break;
    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});
