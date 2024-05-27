import ReactDOM from "react-dom/client";

import "./index.css";
import { TodoModel } from "./todoModel.ts";
import { Loro } from "loro-crdt";
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const render = () => {
  root.render(<App modelA={modelA} modelB={modelB} />);
};
// TODO: use state manager
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

const rootNode = modelA.addRootTodo("Learning");
await one_ms();
modelA.addChildTodo("React", rootNode);
await one_ms();
modelA.addChildTodo("Vue", rootNode);
await one_ms();
const root2 = modelA.addRootTodo("Reading");
await one_ms();
modelA.addChildTodo("Loro Doc", root2);
await one_ms();
render();

function one_ms(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 1));
}
