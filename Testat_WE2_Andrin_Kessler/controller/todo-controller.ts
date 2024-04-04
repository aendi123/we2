import { todoStore } from "../services/todo-store";

export class TodoController {
    async todo(req: any, res: any) {
        const todoValues = {
            title: "",
            importance: 0,
            duedate: "",
            finished: "",
            description: ""
        };

        if (req.query.id) {
            const todo = await todoStore.get(req.query.id);
            console.log(todo);
            todoValues.title = todo.title;
            todoValues.importance = todo.importance;
            todoValues.duedate = todo.duedate.toISOString().slice(0, 16);
            if (todo.finished) todoValues.finished = "checked";
            todoValues.description = todo.description;
        }

        if (req.query.title || req.query.importance || req.query.duedate || req.query.finished || req.query.description) {
            todoStore.add(req.query.title, parseInt(req.query.importance), req.query.duedate, Boolean(req.query.finished), req.query.description);
        }

        res.render("todo", {todoValues: todoValues});
    }
}

export const todoController = new TodoController();