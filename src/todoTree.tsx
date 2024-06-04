import SortableTree from "@nosferatu500/react-sortable-tree";
import "./tree.css";
import TodoItem from "./todoItem";
import { ITodo, ITodoModel } from "./interfaces";
import { ACTIVE_TODOS, COMPLETED_TODOS } from "./constants";
import { allTodoCount, getActiveTodoCount } from "./todoApp";
import { TreeID } from "loro-crdt";

interface TodoTreeProps {
  model: ITodoModel;
  editing: string | null;
  nowShowing: string;
  setEditing: (id: string | null) => void;
  cancel: () => void;
}

const filterTodo = (todos: ITodo[], nowShowing: string): ITodo[] => {
  return todos
    .map((todo) => {
      const children = filterTodo(todo.children, nowShowing);
      const childrenActiveCount = getActiveTodoCount(children);
      const childrenAllCount = allTodoCount(children);
      return { ...todo, children, childrenActiveCount, childrenAllCount };
    })
    .filter((todo) => {
      switch (nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed || todo.childrenActiveCount > 0;
        case COMPLETED_TODOS:
          return todo.completed && todo.childrenActiveCount === 0;
        default:
          return true;
      }
    });
};

const getIndex = (treeData: ITodo[], target: TreeID): number | undefined => {
  let q = treeData.map((node, index) => ({ node, index }));
  while (q.length > 0) {
    const { node, index } = q.shift()!;
    if (node.id === target) {
      return index;
    }
    if (node.children) {
      q = q.concat(node.children.map((node, i) => ({ node, index: i })));
    }
  }
};

const TodoTree = ({
  model,
  setEditing,
  editing,
  cancel,
  nowShowing,
}: TodoTreeProps) => {
  const treeData = filterTodo(model.todos, nowShowing);
  return (
    <div style={{ height: 400 }}>
      <SortableTree
        className="todo-list"
        style={{ width: "100%" }}
        treeData={treeData}
        onMoveNode={(params) => {
          const target = params.node;
          const parent = params.nextParentNode;
          const index = getIndex(params.treeData, target.id)!;

          if (parent) {
            model.move(target.id, parent.id, index);
          } else {
            model.move(target.id, undefined, index);
          }
        }}
        onVisibilityToggle={(p) => {
          const target = p.node;
          model.changeExpanded(target.id, p.expanded);
        }}
        onChange={(_treeData) => {
          //   console.log(treeData);
        }}
        getNodeKey={({ node }) => {
          return node.id;
        }}
        generateNodeProps={(params) => {
          const todo: ITodo = params.node;
          const node = (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => {
                model.toggle(todo.id);
              }}
              onDestroy={() => {
                model.destroy(todo.id);
              }}
              onEdit={() => {
                setEditing(todo.id);
              }}
              editing={editing === todo.id}
              onSave={(text) => {
                model.save(todo.id, text);
                setEditing(null);
              }}
              onAddChild={() => {
                const id = model.addChildTodo("", todo.id);
                setEditing(id);
              }}
              onCancel={() => cancel()}
            />
          );
          return { title: node };
        }}
      />
    </div>
  );
};

export default TodoTree;
