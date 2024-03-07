import express from 'express';

const router = express.Router();
import {indexController} from '../controller/index-controller.js';

router.get("/", indexController.index.bind(indexController));
router.get("/todos", indexController.createTodo.bind(indexController));

export const indexRoutes = router;
