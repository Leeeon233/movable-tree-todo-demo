interface ITodoMeta {
  title: string;
  completed: boolean;
  expanded: boolean;
}

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  expanded: boolean;
  parentId: string | undefined;
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
  todos: Array<ITodo>;
  onChanges: Array<any>;
  subscribe(onChange);
  inform();
  addRootTodo(title: string);
  addChildTodo(title: string, parent: string);
  move(target: ITodo, parent: ITodo);
  toggleAll(checked);
  toggle(todoToToggle);
  destroy(todo);
  save(todoToSave, text);
  clearCompleted();
}

interface IAppProps {
  model: ITodoModel;
}

interface IAppState {
  editing?: string;
  nowShowing?: string;
}
