import { TodoWithRelativeDueDate, todoStore } from "../services/todo-store";

export class IndexController {
    async index(req: any, res: any) {
        const todoList = await todoStore.all();
        const todoWithRelativeDueDateList = [];
        for (const todo of todoList) {
            const daysDifference = Math.ceil((new Date(todo.duedate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
            const relativeDueDate = new Intl.RelativeTimeFormat('en', { style: 'short' }).format(daysDifference, 'day');
            todoWithRelativeDueDateList.push(new TodoWithRelativeDueDate(todo.title, todo.importance, todo.duedate, todo.finished, todo.description, relativeDueDate));
        }
        res.render("index", {todoList: todoWithRelativeDueDateList});
    }
}

export const indexController = new IndexController();