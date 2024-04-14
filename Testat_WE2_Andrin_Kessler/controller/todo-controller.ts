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

    async todopost(req: any, res: any) {
        // User clicks Update button after editing existing todo
        if (req.body.id !== "" && req.body.title && req.body.importance && req.body.duedate && req.body.description) {
            const todo = await todoStore.update(req.body.id, req.body.title, parseInt(req.body.importance), req.body.duedate, Boolean(req.body.finished), req.body.description);
            if (req.body.action === "Update & Overview") {
                res.redirect("/");
            } else {
                res.render("todo", {todoValues: todo, createOrUpdate : "Update"});
            }
        }

        // User clicks Create button after filling out form
        else if (req.body.id === "" && req.body.title && req.body.importance && req.body.duedate && req.body.description) {
            const todo = await todoStore.add(req.body.title, parseInt(req.body.importance), req.body.duedate, Boolean(req.body.finished), req.body.description);
            if (req.body.action === "Create & Overview") {
                res.redirect("/");
            } else {
                res.render("todo", {todoValues: todo, createOrUpdate : "Update"});
            }
        }
    }
}

export const todoController = new TodoController();