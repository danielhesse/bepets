import { Request, Response, Router } from 'express';

const mainRoutes = Router();

mainRoutes.get('/', (_: Request, response: Response) => {
  return response.render('home');
});

mainRoutes.get('/contato', (_: Request, response: Response) => {
  return response.send('Fomulário de Contato.');
});

mainRoutes.get('/sobre', (_: Request, response: Response) => {
  return response.send('Página Institucional sobre a empresa.');
});

export { mainRoutes };
