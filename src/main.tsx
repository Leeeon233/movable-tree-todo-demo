import ReactDOM from "react-dom/client";

// import "todomvc-app-css/index.css";
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

// let currentIdx = 0;

// const onCheckout = (idx: number) => {
//   const f = idx === 0 ? [] : history[idx - 1];
//   currentIdx = idx;
//   modelA.checkout(f);
// };

// const onReset = () => {
//   currentIdx = history.length;
//   modelA.reset();
// };


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
