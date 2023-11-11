import ReactDOM from "react-dom/client";

import "./index.css";
import { TodoModel } from "./todoModel.ts";
import { Loro, setPanicHook } from "loro-crdt";
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const render = () => {
  root.render(
    <App
      modelA={modelA}
      modelB={modelB}
    />
  );
};
// TODO: use state manager
setPanicHook();
export const updateEachPeer = () => {
  modelA.updateFromPeer(modelB);
  modelB.updateFromPeer(modelA);
};

const loroA = new Loro();
const modelA = new TodoModel(loroA, "react-todosA");
const loroB = new Loro();
const modelB = new TodoModel(loroB, "react-todosB");
modelA.subscribe(render);
modelB.subscribe(render);
modelA.subscribe(() => {
  modelB.updateFromPeer(modelA);
});
modelB.subscribe(() => {
  modelA.updateFromPeer(modelB);
});
render();
