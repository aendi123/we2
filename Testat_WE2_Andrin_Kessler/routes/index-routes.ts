import express from 'express';

const router = express.Router();
import { indexController } from '../controller/index-controller';
import { todoController } from '../controller/todo-controller';

router.get("/", indexController.index.bind(indexController));
router.get("/todo", todoController.todo.bind(todoController));

export const indexRoutes = router;
