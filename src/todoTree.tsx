import SortableTree, {
  TreeItem,
  getTreeFromFlatData,
} from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import TodoItem from "./todoItem";
import { ROOT_KEY } from "./todoModel";

interface TodoTreeProps {
  data: ITodo[];
  model: ITodoModel;
  editing: string | null;
  setEditing: (id: string | null) => void;
  cancel: () => void;
}

const TodoTree = ({
  data,
  model,
  setEditing,
  editing,
  cancel,
}: TodoTreeProps) => {
  const treeData = getTreeFromFlatData({
    flatData: data,
    getKey: (v) => v.id,
    getParentKey: (v) => v.parentId,
    rootKey: ROOT_KEY,
  });

  return (
    <div style={{ height: 400 }}>
      <SortableTree
        className="todo-list"
        style={{ width: "100%" }}
        treeData={treeData}
        onMoveNode={(params) => {
          const target = params.node;
          const parent = params.nextParentNode;
          model.move(target, parent);
        }}
        onChange={(treeData) => {
          //   console.log(treeData);
        }}
        generateNodeProps={(params) => {
          const todo = params.node;
          const node = (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => {
                model.toggle(todo);
              }}
              onDestroy={() => {
                model.destroy(todo);
              }}
              onEdit={() => {
                setEditing(todo.id);
              }}
              editing={editing === todo.id}
              onSave={(text) => {
                model.save(todo, text);
                setEditing(null);
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
