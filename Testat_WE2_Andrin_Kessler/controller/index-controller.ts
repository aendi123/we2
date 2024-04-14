import { todoStore } from "../services/todo-store";

export class IndexController {
    async index(req: any, res: any) {
        const todoList = await todoStore.all();
        res.render("index", {todoList: todoList});
    }

    async toggleTheme(req: any, res: any) {
        const { theme } = req.body;
        if (theme && ['dark', 'light'].includes(theme)) {
            req.session.userSettings.theme = theme;
        }
        const todoList = await todoStore.all();
        res.render("index", {todoList: todoList});
    }
}

export const indexController = new IndexController();