import { Request, Response, Router } from 'express';

import { mainRoutes } from './main.routes';

const router = Router();

// Main Routes
router.use('/', mainRoutes);

// Page/Route 404
router.use((_: Request, response: Response) => {
  return response.status(404).send('Página não encontrada!');
});

export { router };
