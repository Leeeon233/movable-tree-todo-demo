import React, { useEffect, useRef, useState } from "react";
import TodoFooter from "./todoFooter";
import {
  ALL_TODOS,
  ACTIVE_TODOS,
  COMPLETED_TODOS,
  ENTER_KEY,
} from "./constants";
import TodoTree from "./todoTree";
import { IAppProps, ITodo } from "./interfaces";

export const getActiveTodoCount = (todos: ITodo[]): number => {
  return todos.reduce(function (accum, todo) {
    const childrenActiveCount = accum + getActiveTodoCount(todo.children);
    return todo.completed ? childrenActiveCount : childrenActiveCount + 1;
  }, 0);
};
export const allTodoCount = (todos: ITodo[]): number => {
  return todos.reduce(function (accum, todo) {
    const childrenCount = accum + allTodoCount(todo.children);
    return childrenCount + 1;
  }, 0);
};

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
  const newInputRef = useRef<HTMLInputElement>(null);

  const activeTodoCount = getActiveTodoCount(model.todos);
  const completedCount = allTodoCount(model.todos) - activeTodoCount;

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
      <div className="todoapp" style={{ width: "500px" }}>
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
                // data={shownTodos}
                model={model}
                editing={editing}
                setEditing={setEditing}
                cancel={cancel}
                nowShowing={nowShowing}
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
