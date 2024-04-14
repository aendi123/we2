import { todoStore } from "../services/todo-store";

export class IndexController {
    async index(req: any, res: any) {
        const todoList = await todoStore.all(req.session.userSettings.orderBy, req.session.userSettings.orderDirection, req.session.userSettings.filterCompleted);
        res.render("index", {todoList: todoList});
    }

    async toggleTheme(req: any, res: any) {
        req.session.userSettings.theme = req.session.userSettings.theme === 'dark' ? 'light' : 'dark';
        res.redirect("/");
    }

    async sortBy(req: any, res: any) {
        const { by } = req.query;
        if (by && ['title', 'importance', 'duedate', 'creationdate'].includes(by)) {
            req.session.userSettings.orderDirection = req.session.userSettings.orderDirection * -1;
            req.session.userSettings.orderBy = by;
        }
        res.redirect("/");
    }

    async filterCompleted(req: any, res: any) {
        req.session.userSettings.filterCompleted = !req.session.userSettings.filterCompleted;
        res.redirect("/");
    }
}

export const indexController = new IndexController();