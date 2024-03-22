import express from 'express';

const router = express.Router();
import {indexController} from '../controller/index-controller.js';
import {todoController} from '../controller/todo-controller.js';

router.get("/", indexController.index.bind(indexController));
router.get("/todo", todoController.todo.bind(todoController));

export const indexRoutes = router;
