import { Router } from 'express';

import { AboutController } from '../controllers/AboutController';
import { ContactController } from '../controllers/ContactController';
import { HomeController } from '../controllers/HomeController';

const mainRoutes = Router();

const homeController = new HomeController();
const contactController = new ContactController();
const aboutController = new AboutController();

mainRoutes.get('/', homeController.handle);

mainRoutes.get('/contato', contactController.handle);

mainRoutes.get('/sobre', aboutController.handle);

export { mainRoutes };
