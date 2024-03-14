import { todoStore } from "../services/todo-store.js";

const 

export class TodoController {
    todo(req, res) {
        res.render("todo");

        if (req.query.title || req.query.importance || req.query.duedate || req.query.finished || req.query.description) {
                todoStore.add(req.query.title, parseInt(req.query.importance), req.query.duedate, Boolean(req.query.finished), req.query.description);
        }
    };
}

export const todoController = new TodoController();