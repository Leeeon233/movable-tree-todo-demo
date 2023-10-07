import React, { useEffect, useRef, useState } from "react";
import TodoFooter from "./todoFooter";
import {
  ALL_TODOS,
  ACTIVE_TODOS,
  COMPLETED_TODOS,
  ENTER_KEY,
} from "./constants";
import TodoItem from "./todoItem";
import TodoTree from "./todoTree";

declare var Router: any;
const TodoApp = ({ model }: IAppProps) => {
  const [nowShowing, setNowShowing] = useState(ALL_TODOS);
  const [editing, setEditing] = useState<string | null>(null);

  useEffect(() => {
    var router = new Router({
      "/": () => setNowShowing(ALL_TODOS),
      "/active": () => setNowShowing(ACTIVE_TODOS),
      "/completed": () => setNowShowing(COMPLETED_TODOS),
    });
    router.init("/");
  }, []);

  const activeTodoCount = model.todos.reduce(function (accum, todo) {
    return todo.completed ? accum : accum + 1;
  }, 0);
  const newInputRef = useRef<HTMLInputElement>(null);
  const completedCount = model.todos.length - activeTodoCount;
  const shownTodos = model.todos.filter((todo) => {
    switch (nowShowing) {
      case ACTIVE_TODOS:
        return !todo.completed;
      case COMPLETED_TODOS:
        return todo.completed;
      default:
        return true;
    }
  });

  const todoItems = shownTodos.map((todo) => {
    return (
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
  });

  const handleNewTodoKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = newInputRef.current!.value.trim();

    if (val) {
      model.addRootTodo(val);
      newInputRef.current!.value = "";
    }
  };
  const cancel = () => {
    setEditing(null);
  };

  return (
    <>
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            ref={newInputRef}
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={(e) => handleNewTodoKeyDown(e)}
            autoFocus={true}
          />
        </header>
        {model.todos.length > 0 ? (
          <>
            <section className="main">
              <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                onChange={(e) => model.toggleAll(e.target.checked)}
                checked={activeTodoCount === 0}
              />
              <label htmlFor="toggle-all">Mark all as complete</label>
              {/* <ul className="todo-list">{todoItems}</ul>
              <p>Tree</p> */}
              <TodoTree
                data={shownTodos}
                model={model}
                editing={editing}
                setEditing={setEditing}
                cancel={cancel}
              />
            </section>
          </>
        ) : (
          <></>
        )}
        {activeTodoCount || completedCount ? (
          <TodoFooter
            count={activeTodoCount}
            completedCount={completedCount}
            nowShowing={nowShowing}
            onClearCompleted={() => model.clearCompleted()}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default TodoApp;
