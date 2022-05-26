import { createServer } from 'http';
import f1 from './util/test';

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer((req, res) => {
  f1()
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  f1()
  console.log(`Server running at http://${hostname}:${port}/`);
});
server.listen