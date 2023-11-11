/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
import { getTreeFromFlatData } from "@nosferatu500/react-sortable-tree";
import { ITodo, ITodoModel } from "./interfaces";
import { Loro, LoroTree, TreeID } from "loro-crdt";
import lodash from "lodash";

interface Meta{
  title: string;
  completed: boolean;
  expanded: boolean;
}

interface TreeNode{
  id: TreeID;
  parent: TreeID | null;
  meta: Meta;
  children: TreeNode[];
}

export const ROOT_KEY = null;

// Generic "model" object. You can use whatever
// framework you want. For this application it
// may not even be worth separating this logic
// out, but we do this to demonstrate one way to
// separate out parts of your application.
class TodoModel implements ITodoModel {
  public key: string;
  public todos: Array<ITodo> = [];
  public onChanges: Array<any>;
  loro: Loro;
  tree: LoroTree;
  sync: boolean = true;
  history: any[] = [[]];
  version: number = 0;
  isCheckout: boolean = false;
  constructor(loro: Loro, key: string) {
    this.key = key;
    this.loro = loro;
    this.onChanges = [];
    this.tree = this.loro.getTree("tree");
    this.loro.subscribe((_e) => {
      if (!this.isCheckout) {
        const newVersion = this.loro.frontiers();
        if (!lodash.isEqual(newVersion, this.history[this.history.length-1])){
          this.history.push(newVersion);
          this.version = this.history.length - 1;
        }
        this.inform();
      }
    });
  }

  private getTodos(root: TreeNode): ITodo {
    const meta = root.meta;
    return {
      id: root.id,
      parentId: root.parent,
      children: root.children? root.children.map((node: any) => {
        return this.getTodos(node);
      }):[],
      title: meta.title,
      completed: meta.completed,
      expanded: meta.expanded,
    };
  }

  public checkout(version: number) {
    this.isCheckout = true;
    this.loro.checkout(this.history[version]);
    this.version = version;
    if(version === this.history.length-1){
      this.onAttach();
    }
    this.inform();
  }

  public onAttach() {
    if(this.loro.is_detached()){
      this.loro.attach();
      this.isCheckout = false;
      this.inform();
    }
  }

  public setSync(sync: boolean) {
    this.sync = sync;
  }

  public subscribe(onChange: any) {
    this.onChanges.push(onChange);
  }

  public inform() {
    const state = this.tree.getDeepValue();
    
    
    const hierarchyTree = getTreeFromFlatData({
      flatData: state,
      getKey: (v) => v.id,
      getParentKey: (v) => v.parent,
      // @ts-ignore
      rootKey: ROOT_KEY}
    );
    this.todos = hierarchyTree.map((root:any) => {
      return this.getTodos(root);
    });
    
    this.onChanges.forEach(function (cb) {
      cb();
    });
  }

  public addChildTodo(title: string, parentId: TreeID): TreeID {
    const id = this.tree.create( parentId);
    const metaMap = this.tree.getMeta(id);
    metaMap.set("title", title);
    metaMap.set("completed", false);
    metaMap.set("expanded", true);
    this.loro.commit();
    return id;
  }

  public addRootTodo(title: string): TreeID {
    const id = this.tree.create();
    const metaMap = this.tree.getMeta(id);
    metaMap.set("title", title);
    metaMap.set("completed", false);
    metaMap.set("expanded", true);
    this.loro.commit();
    return id;
  }

  public asRoot(target: TreeID) {
      this.tree.root(target);
      this.loro.commit();
  }

  public move(target: TreeID, parent: TreeID) {
      this.tree.mov(target, parent);
      this.loro.commit();
  }

  changeExpanded(target: TreeID, expanded: boolean) {
    const metaMap = this.tree.getMeta(target);
    metaMap.set("expanded", expanded);
    this.loro.commit();
  }

  public toggleAll(checked: boolean) {
    const nodes = this.tree.nodes;
    for (const node of nodes) {
      const metaMap = this.tree.getMeta(node);
      metaMap.set("completed", checked);
    }
    this.loro.commit();
  }

  public toggle(todoToToggle: TreeID) {
    const metaMap = this.tree.getMeta(todoToToggle);
    const checked = metaMap.get("completed");
    metaMap.set("completed", !checked);
    this.loro.commit();
  }

  public destroy(id: TreeID) {
    this.tree.delete( id);
    this.loro.commit();
  }

  public save(todoToSave: TreeID, text: string) {
    const metaMap = this.tree.getMeta(todoToSave);
    metaMap.set("title", text);
    this.loro.commit();
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
    const nodes = this.tree.nodes;
    for (const node of nodes) {
      const metaMap = this.tree.getMeta(node);
      const completed = metaMap.get("completed");
      if (completed) {
        this.tree.delete(node);
      }
    }
    this.loro.commit();
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
