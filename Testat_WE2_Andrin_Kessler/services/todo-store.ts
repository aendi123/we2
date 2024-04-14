import Datastore from 'nedb-promises'

export class Todo {
    title: string;
    importance: number;
    duedate: string;
    finished: boolean;
    description: string;
    creationdate: string;

    constructor(title: string, importance: number, duedate: string, finished: boolean, description: string) {
        this.title = title;
        this.importance = importance;
        this.duedate = duedate;
        this.finished = finished;
        this.description = description
        this.creationdate = new Date().toISOString();
    }
}

export class TodoStore {
    db: Datastore;

    constructor(db: Datastore | undefined) {
        this.db = db || new Datastore({filename: './data/todos.db', autoload: true});
    }

    async add(title: string, importance: number, duedate: string, finished: boolean, description: string) : Promise<Todo> {
        const todo = new Todo(title, importance, duedate, finished, description);
        const storedTodo = await this.db.insert(todo);
        return storedTodo;
    }

    async update(id: string, title: string, importance: number, duedate: Date, finished: boolean, description: string) : Promise<Todo> {
        await this.db.update({_id: id}, {$set: {title: title, importance: importance, duedate: duedate, finished: finished, description: description}});
        return this.get(id);
    }

    async delete(id: string) : Promise<Todo> {
        await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
        return this.get(id);
    }

    async get(id: string) : Promise<Todo> {
        return this.db.findOne({_id: id});
    }

    async all(orderBy: string, orderDirection: number) : Promise<any> {
        return this.db.find({}).sort({[orderBy]: orderDirection});
    }
}

export const todoStore = new TodoStore(undefined);
todoStore.add("Do exercises (Default entry)", 1, "2024-06-17", false, "Web Engineering 2");
todoStore.add("Take exam (Default entry)", 5, "2024-01-23", true, "Web Engineering 1");