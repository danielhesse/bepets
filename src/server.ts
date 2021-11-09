import express, { Request, Response } from 'express';
import mustacheExpress from 'mustache-express';
import path from 'path';

import { router } from './routes';

const server = express();

// Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustacheExpress());

// Public
server.use(express.static(path.join(__dirname, '../public')));

server.use(router);

// Page/Route 404
router.use((_: Request, response: Response) => {
  return response.status(404).send('Página não encontrada!');
});

server.listen('3333', () => {
  console.log('🚀 Server running on port 3333!');
});
