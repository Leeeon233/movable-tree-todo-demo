/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
import { ITodo, ITodoModel } from "./interfaces";
import { Loro, LoroTree, TreeID, TreeNode } from "loro-crdt";

export const ROOT_KEY = null;

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
  sync: boolean = true;
  addHistory: any;
  isCheckout: boolean = false;
  constructor(loro: Loro, key: string, addHistory: any) {
    this.key = key;
    this.loro = loro;
    this.addHistory = addHistory;
    this.onChanges = [];
    this.root = this.loro.getTree("root");
    const state = this.root.getDeepValue().roots;
    this.todos = state.map((root) => {
      return this.getTodos(root);
    });
    this.loro.subscribe((_e) => {
      this.inform();
      if (!this.isCheckout) {
        addHistory(this.loro.frontiers());
      }
    });
  }

  private getTodos(root: TreeNode): ITodo {
    const meta = root.meta;
    return {
      id: root.id,
      parentId: root.parent,
      children: root.children.map((node) => {
        return this.getTodos(node);
      }),
      title: meta.title,
      completed: meta.completed,
      expanded: meta.expanded,
    };
  }

  public checkout(f: any[]) {
    this.isCheckout = true;
    this.loro.checkout(f);
    this.inform();
  }

  public reset() {
    this.loro.attach();
    this.isCheckout = false;
    this.inform();
  }

  public setSync(sync: boolean) {
    this.sync = sync;
  }

  public subscribe(onChange: any) {
    this.onChanges.push(onChange);
  }

  public inform() {
    const state = this.root.getDeepValue();
    this.todos = state.roots.map((root) => {
      return this.getTodos(root);
    });
    this.onChanges.forEach(function (cb) {
      cb();
    });
  }

  public addChildTodo(title: string, parentId: TreeID): TreeID {
    const id = this.loro.transact((txn) => {
      const id = this.root.create(txn, parentId);
      this.root.insertMeta(txn, id, "title", title);
      this.root.insertMeta(txn, id, "completed", false);
      this.root.insertMeta(txn, id, "expanded", true);
      return id;
    });
    return id;
  }

  public addRootTodo(title: string): TreeID {
    const id = this.loro.transact((txn) => {
      const id = this.root.create(txn, undefined);
      this.root.insertMeta(txn, id, "title", title);
      this.root.insertMeta(txn, id, "completed", false);
      this.root.insertMeta(txn, id, "expanded", true);
      return id;
    });
    return id;
  }

  public asRoot(target: TreeID) {
    this.loro.transact((txn) => {
      this.root.asRoot(txn, target);
    });
  }

  public move(target: TreeID, parent: TreeID) {
    this.loro.transact((txn) => {
      this.root.move(txn, target, parent);
    });
  }

  changeExpanded(target: TreeID, expanded: boolean) {
    this.loro.transact((txn) => {
      this.root.insertMeta(txn, target, "expanded", expanded);
    });
  }

  public toggleAll(checked: boolean) {
    this.loro.transact((txn) => {
      const nodes = this.root.nodes;
      for (const node of nodes) {
        this.root.insertMeta(txn, node, "completed", checked);
      }
    });
  }

  public toggle(todoToToggle: TreeID) {
    this.loro.transact((txn) => {
      const checked = this.root.getMeta(txn, todoToToggle, "completed");
      this.root.insertMeta(txn, todoToToggle, "completed", !checked);
    });
  }

  public destroy(id: TreeID) {
    this.loro.transact((txn) => {
      this.root.delete(txn, id);
    });
  }

  public save(todoToSave: TreeID, text: string) {
    this.loro.transact((txn) => {
      this.root.insertMeta(txn, todoToSave, "title", text);
    });
  }

  public updateFromPeer(other: TodoModel) {
    if (this.sync) {
      const thisVersion = this.loro.version();
      const otherVersion = other.loro.version();
      if (!isArrayBufferEqual(thisVersion, otherVersion)) {
        const update = other.loro.exportFrom(thisVersion);
        this.loro.import(update);
      }
    }
  }

  public clearCompleted() {
    this.todos = this.todos.filter(function (todo) {
      return !todo.completed;
    });

    this.loro.transact((txn) => {
      const nodes = this.root.nodes;
      for (const node of nodes) {
        const completed = this.root.getMeta(txn, node, "completed");
        if (completed) {
          this.root.delete(txn, node);
        }
      }
    });
  }
}

function isArrayBufferEqual(a: Uint8Array, b: Uint8Array) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}
export { TodoModel };
