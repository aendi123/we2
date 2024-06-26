import express from 'express';

const router = express.Router();
import { indexController } from '../controller/index-controller';
import { todoController } from '../controller/todo-controller';

router.get("/", indexController.index.bind(indexController));
router.get("/todo", todoController.todo.bind(todoController));
router.post("/todo", todoController.todopost.bind(todoController));
router.get("/toggle-theme", indexController.toggleTheme.bind(indexController));
router.get("/sort", indexController.sortBy.bind(indexController));
router.get("/filter-completed", indexController.filterCompleted.bind(indexController));

export const indexRoutes = router;
