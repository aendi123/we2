import { todoStore } from "../services/todo-store";

export class IndexController {
    async index(req: any, res: any) {
        const todoList = await todoStore.all(req.session.userSettings.orderBy, req.session.userSettings.orderDirection);
        res.render("index", {todoList: todoList});
    }

    async toggleTheme(req: any, res: any) {
        const { theme } = req.body;
        if (theme && ['dark', 'light'].includes(theme)) {
            req.session.userSettings.theme = theme;
        }
        res.redirect("/");
    }

    async sortby(req: any, res: any) {
        const { by } = req.query;
        if (by && ['title', 'importance', 'duedate', 'creationdate'].includes(by)) {
            req.session.userSettings.orderDirection = req.session.userSettings.orderDirection * -1;
            req.session.userSettings.orderBy = by;
        }
        res.redirect("/");
    }
}

export const indexController = new IndexController();