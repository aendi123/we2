import express from 'express';
const router = express.Router();

import * as randomController from '../controllers/random-controller.js'

router.get('/',  randomController.index);
router.post('/random', randomController.randomPost);
router.get('/random', randomController.randomGet);

export const randomRoutes = router;
