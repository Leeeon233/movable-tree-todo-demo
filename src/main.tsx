import React from "react";
import ReactDOM from "react-dom/client";

import "todomvc-app-css/index.css";
import { TodoModel } from "./todoModel.ts";
import TodoApp from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const render = () => {
  root.render(
    <React.StrictMode>
      <TodoApp model={model} />
    </React.StrictMode>
  );
};
const model = new TodoModel("react-todos");
model.subscribe(render);
render();
