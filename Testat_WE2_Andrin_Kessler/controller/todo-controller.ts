import { todoStore } from "../services/todo-store";

export class TodoController {
    async todo(req: any, res: any) {

        // User clicks Edit button of existing todo
        if (req.query.id) {
            const todo = await todoStore.get(req.query.id);
            res.render("todo", {todoValues: todo, createOrUpdate : "Update"});
        } 

        // User clicks Create new todo button
        else {
            const todo = {};
            res.render("todo", {todoValues: todo, createOrUpdate : "Create"});
        }
    }
}

export const todoController = new TodoController();