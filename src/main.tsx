import ReactDOM from "react-dom/client";

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
    <App modelA={modelA} modelB={modelB} />

    // </React.StrictMode>
  );
};
setPanicHook();
export const updateEachPeer = () => {
  modelA.updateFromPeer(modelB);
  modelB.updateFromPeer(modelA);
};
const loroA = new Loro();
const modelA = new TodoModel(loroA, "react-todosA");
modelA.subscribe(render);
const loroB = new Loro();
const modelB = new TodoModel(loroB, "react-todosB");
modelB.subscribe(render);
modelA.subscribe(() => {
  modelB.updateFromPeer(modelA);
});
modelB.subscribe(() => {
  modelA.updateFromPeer(modelB);
});
render();
