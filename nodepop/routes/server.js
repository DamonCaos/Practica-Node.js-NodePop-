import http from 'http';
import debugLib from 'debug';
import app from '../app';

const debug = debugLib('nodepop:server');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.on('error', err => console.error(err));
server.on('listening', () => {debug(`start server at ${port}`)});
server.listen(3000);