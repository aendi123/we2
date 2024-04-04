import Datastore from 'nedb-promises'

export class Todo {
    title: string;
    importance: number;
    duedate: Date;
    finished: boolean;
    description: string;

    constructor(title: string, importance: number, duedate: Date, finished: boolean, description: string) {
        this.title = title;
        this.importance = importance;
        this.duedate = duedate;
        this.finished = finished;
        this.description = description
    }
}

export class TodoWithRelativeDueDate extends Todo {
    id: string;
    relativeDueDate: string;

    constructor(id: string, title: string, importance: number, duedate: Date, finished: boolean, description: string, relativeDueDate: string) {
        super(title, importance, duedate, finished, description);
        this.id = id;
        this.relativeDueDate = relativeDueDate;
    }
}

export class TodoStore {
    db: Datastore;

    constructor(db: Datastore | undefined) {
        this.db = db || new Datastore({filename: './data/todos.db', autoload: true});
    }

    async add(title: string, importance: number, duedate: Date, finished: boolean, description: string) : Promise<Todo> {
        const todo = new Todo(title, importance, duedate, finished, description);
        const storedTodo = await this.db.insert(todo);
        return storedTodo;
    }

    async delete(id: string) : Promise<Todo> {
        await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
        return this.get(id);
    }

    async get(id: string) : Promise<Todo> {
        return this.db.findOne({_id: id});
    }

    async all() : Promise<TodoWithRelativeDueDate[]> {
        const allTodos : any[] = await this.db.find({});
        const todoWithRelativeDueDateList = [];
        for (const todo of allTodos) {
            const daysDifference = Math.ceil((new Date(todo.duedate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
            const relativeDueDate = new Intl.RelativeTimeFormat('en', { style: 'short' }).format(daysDifference, 'day');
            todoWithRelativeDueDateList.push(new TodoWithRelativeDueDate(todo._id, todo.title, todo.importance, todo.duedate, todo.finished, todo.description, relativeDueDate));
        }
        return todoWithRelativeDueDateList;
    }
}

export const todoStore = new TodoStore(undefined);
todoStore.add("Do exercises (Default entry)", 1, new Date('June 17, 2024 17:00:00'), false, "Web Engineering 2");
todoStore.add("Take exam (Default entry)", 5, new Date('January 23, 2024 08:00:00'), true, "Web Engineering 1");