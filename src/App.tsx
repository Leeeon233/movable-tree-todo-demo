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
          width: "56px",
          height: "56px",
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
        {sync ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
          >
            <path fill="#505050" d="M14 10h-2v12h2zm6 0h-2v12h2z" />
            <path
              fill="#505050"
              d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
          >
            <path
              fill="#505050"
              d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23m1-11.382v8.764L20.764 16Z"
            />
            <path
              fill="#505050"
              d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"
            />
          </svg>
        )}
      </button>
      <div className="todoContainer">
        <TodoApp model={modelB} />
      </div>
    </div>
  );
};

export default App;
