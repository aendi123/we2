import Datastore from 'nedb-promises'

export class Todo {
    constructor(title, importance, duedate, finished, description) {
        this.title = title;
        this.importance = importance;
        this.duedate = duedate;
        this.finished = finished;
        this.description = description
    }
}

export class TodoStore {
    constructor(db) {
        this.db = db || new Datastore({filename: './data/todos.db', autoload: true});
    }

    async add(title, importance, duedate, finished, description) {
        let todo = new Todo(title, importance, duedate, finished, description);
        const storedTodo = await this.db.insert(todo);
        return storedTodo;
    }

    async delete(id) {
        await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
        return this.get(id);
    }

    async get(id) {
        return this.db.findOne({_id: id});
    }

    async all() {
        return this.db.find({});
    }
}

export const todoStore = new TodoStore();
todoStore.add("Do exercises (Default entry)", 1, new Date('June 17, 2024 17:00:00'), false, "Web Engineering 2");
todoStore.add("Take exam (Default entry)", 5, new Date('January 23, 2024 08:00:00'), false, "Web Engineering 1");