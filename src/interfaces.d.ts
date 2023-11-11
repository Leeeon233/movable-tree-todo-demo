import { TreeID } from "loro-crdt";

interface ITodoMeta {
  title: string;
  completed: boolean;
  expanded: boolean;
}

interface ITodo {
  id: TreeID;
  title: string;
  completed: boolean;
  expanded: boolean;
  parentId: TreeID | null;
  children: ITodo[];
}

interface ITodoItemProps {
  key: string;
  todo: ITodo;
  editing?: boolean;
  onSave: (val: any) => void;
  onDestroy: () => void;
  onEdit: () => void;
  onCancel: (event: any) => void;
  onToggle: () => void;
  onAddChild: () => void;
}

interface ITodoItemState {
  editText: string;
}

interface ITodoFooterProps {
  completedCount: number;
  onClearCompleted: any;
  nowShowing: string;
  count: number;
}

interface ITodoModel {
  key: any;
  history: any[];
  version: number;
  todos: Array<ITodo>;
  onChanges: Array<any>;
  subscribe(onChange);
  checkout(version: number);
  inform();
  addRootTodo(title: string): TreeID;
  addChildTodo(title: string, parent: TreeID): TreeID;
  move(target: TreeID, parent: TreeID);
  asRoot(target: TreeID);
  changeExpanded(target: TreeID, expanded: boolean);
  toggleAll(checked);
  toggle(todoToToggle: TreeID);
  destroy(todo: TreeID);
  onAttach();
  save(todoToSave: TreeID, text: string);
  clearCompleted();
}

interface IAppProps {
  model: ITodoModel;
}

interface IAppState {
  editing?: string;
  nowShowing?: string;
}
