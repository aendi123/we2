import { todoStore } from "../services/todo-store.js";

export class IndexController {
    async index(req, res) {
        const todoList = await todoStore.all();
        for (const todo of todoList) {
            const daysDifference = Math.ceil((new Date(todo.duedate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
            todo.duedate = new Intl.RelativeTimeFormat('en', { style: 'short' }).format(daysDifference, 'day');
        }
        res.render("index", {todoList: todoList});
    };
}

export const indexController = new IndexController();