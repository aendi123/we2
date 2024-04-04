import { todoStore } from "../services/todo-store";

export class IndexController {
    async index(req: any, res: any) {
        const todoWithRelativeDueDateList = await todoStore.all();
        res.render("index", {todoList: todoWithRelativeDueDateList});
    }
}

export const indexController = new IndexController();