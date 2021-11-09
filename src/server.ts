import express, { Request, Response } from 'express';

import { router } from './routes';

const server = express();

server.use(router);

// Page 404
router.use((_: Request, response: Response) => {
  return response.status(404).send('Página não encontrada!');
});

server.listen('3333', () => {
  console.log('🚀 Server running on port 3333!');
});
