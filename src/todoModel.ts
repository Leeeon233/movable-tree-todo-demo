/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */

import { Utils } from "./utils";
import { Loro, LoroTree } from "loro-crdt";

export const ROOT_KEY = "0";

// Generic "model" object. You can use whatever
// framework you want. For this application it
// may not even be worth separating this logic
// out, but we do this to demonstrate one way to
// separate out parts of your application.
class TodoModel implements ITodoModel {
  public key: string;
  public todos: Array<ITodo>;
  public onChanges: Array<any>;
  loro: Loro;
  root: LoroTree;

  constructor(loro: Loro, key: string) {
    this.key = loro.peerId.toString();
    this.loro = loro;
    const data = Utils.store(key);
    if (data) {
      console.log(data);
      this.loro.import(data);
    }
    this.root = this.loro.getTree("root");
    this.todos = this.getTodos();

    this.onChanges = [];
  }

  private getTodos(): ITodo[] {
    const value = this.root.getDeepValue();
    const roots = value.roots;
    return roots.map((v) => {
      const meta = v.meta;
      return {
        id: v.id,
        parentId: v.parent,
        children: v.children,
        title: meta.title,
        completed: meta.completed,
        expanded: meta.expanded,
      };
    });
  }

  public subscribe(onChange: any) {
    this.onChanges.push(onChange);
  }

  public inform() {
    Utils.store(this.key, this.loro.exportSnapshot());
    this.todos = this.getTodos();
    this.onChanges.forEach(function (cb) {
      cb();
    });
  }

  public addChildTodo(title: string, parentId: string) {
    const todo: ITodo = {
      id: Utils.uuid(),
      title: title,
      completed: false,
      expanded: true,
      parentId,
    };
    this.todos = this.todos.concat(todo);
    this.inform();
  }

  public addRootTodo(title: string) {
    this.todos = this.todos.concat({
      id: Utils.uuid(),
      title: title,
      completed: false,
      expanded: true,
      parentId: ROOT_KEY,
    });

    this.inform();
  }

  public move(target: ITodo, parent: ITodo) {
    this.todos = this.todos.map((v) => {
      return v.id === target.id ? { ...v, parentId: parent.id } : v;
    });
    this.inform();
  }

  public toggleAll(checked: Boolean) {
    // Note: It's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map(), filter() and reduce() everywhere instead of mutating the
    // array or todo items themselves.
    this.todos = this.todos.map<ITodo>((todo: ITodo) => {
      return Utils.extend({}, todo, { completed: checked });
    });

    this.inform();
  }

  public toggle(todoToToggle: ITodo) {
    this.todos = this.todos.map<ITodo>((todo: ITodo) => {
      return todo.id !== todoToToggle.id
        ? todo
        : Utils.extend({}, todo, { completed: !todo.completed });
    });

    this.inform();
  }

  public destroy(todo: ITodo) {
    this.todos = this.todos.filter(function (candidate) {
      return candidate.id !== todo.id;
    });

    this.inform();
  }

  public save(todoToSave: ITodo, text: string) {
    this.todos = this.todos.map(function (todo) {
      return todo.id !== todoToSave.id
        ? todo
        : Utils.extend({}, todo, { title: text });
    });

    this.inform();
  }

  public clearCompleted() {
    this.todos = this.todos.filter(function (todo) {
      return !todo.completed;
    });

    this.inform();
  }
}

export { TodoModel };
