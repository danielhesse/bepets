import { Request, Response } from 'express';

class ContactController {
  async handle(_: Request, response: Response) {
    return response.render('pages/contato');
  }
}

export { ContactController };
