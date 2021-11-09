import express, { Request, Response } from 'express';

const server = express();

server.get('/', (_: Request, response: Response) => {
  return response.send('Olá Mundo!');
});

server.listen('3333', () => {
  console.log('🚀 Server running on port 3333!');
});
