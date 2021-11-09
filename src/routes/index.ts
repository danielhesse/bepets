import { Router } from 'express';

import { mainRoutes } from './main.routes';

const router = Router();

// Main Routes
router.use('/', mainRoutes);

export { router };
