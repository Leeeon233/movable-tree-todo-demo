import { useState } from "react";
import TodoApp from "./todoApp";
import { updateEachPeer } from "./main";
import { TodoModel } from "./todoModel";

interface AppProps {
  modelA: TodoModel;
  modelB: TodoModel;
}

const App = ({ modelA, modelB }: AppProps) => {
  const [sync, setSync] = useState(true);
  return (
    <div className="appContainer">
      <div className="todoContainer">
        <TodoApp model={modelA} />
      </div>
      <button
        style={{
          width: "200px",
          height: "56px",
          fontSize: "x-large",
          border: "1px solid black",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => {
          setSync(!sync);
          modelA.setSync(!sync);
          modelB.setSync(!sync);
          if (!sync) {
            updateEachPeer();
          }
        }}
      >
        {sync ? "Stop Sync" : "Continue Sync"}
      </button>
      <div className="todoContainer">
        <TodoApp model={modelB} />
      </div>
    </div>
  );
};

export default App;
