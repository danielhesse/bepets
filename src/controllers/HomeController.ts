import { Request, Response } from 'express';

class HomeController {
  async handle(_: Request, response: Response) {
    const user = 'Daniel Hessel';

    return response.render('pages/home', { user });
  }
}

export { HomeController };
