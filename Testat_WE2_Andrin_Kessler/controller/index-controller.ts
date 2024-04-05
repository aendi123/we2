import { todoStore } from "../services/todo-store";

export class IndexController {
    async index(req: any, res: any) {
        const todoList = await todoStore.all();
        res.render("index", {todoList: todoList});
    }
}

export const indexController = new IndexController();