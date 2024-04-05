import express from 'express';

const router = express.Router();
import { indexController } from '../controller/index-controller';
import { todoController } from '../controller/todo-controller';
import { todoPostController } from '../controller/todo-post-controller';

router.get("/", indexController.index.bind(indexController));
router.get("/todo", todoController.todo.bind(todoController));
router.post("/todo", todoPostController.todo.bind(todoPostController));

export const indexRoutes = router;
