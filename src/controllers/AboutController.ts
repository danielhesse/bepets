import { Request, Response } from 'express';

class AboutController {
  async handle(_: Request, response: Response) {
    return response.render('pages/sobre');
  }
}

export { AboutController };
