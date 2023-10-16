import ReactDOM from "react-dom/client";
import * as lodash from "lodash";

// import "todomvc-app-css/index.css";
import "./index.css";
import { TodoModel } from "./todoModel.ts";
import { Loro, setPanicHook } from "loro-crdt";
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const render = () => {
  root.render(
    // StrictMode is unsupported
    // <React.StrictMode>
    <App
      modelA={modelA}
      modelB={modelB}
      history={history}
      onCheckout={onCheckout}
      onReset={onReset}
      currentIdx={currentIdx}
    />

    // </React.StrictMode>
  );
};
// TODO: use state manager
setPanicHook();
export const updateEachPeer = () => {
  modelA.updateFromPeer(modelB);
  modelB.updateFromPeer(modelA);
};

let currentIdx = 0;

const onCheckout = (idx: number) => {
  const f = idx === 0 ? [] : history[idx - 1];
  currentIdx = idx;
  modelA.checkout(f);
};

const onReset = () => {
  currentIdx = history.length;
  modelA.reset();
};

let history: any[] = [];
const addHistory = (f: any[]) => {
  if (history.length === 0 || !lodash.isEqual(f, history[history.length - 1])) {
    history.push(f);
    currentIdx += 1;
    render();
  }
};
const loroA = new Loro();
const modelA = new TodoModel(loroA, "react-todosA", addHistory);
modelA.subscribe(render);
const loroB = new Loro();
const modelB = new TodoModel(loroB, "react-todosB", addHistory);
modelB.subscribe(render);
modelA.subscribe(() => {
  modelB.updateFromPeer(modelA);
});
modelB.subscribe(() => {
  modelA.updateFromPeer(modelB);
});
render();
