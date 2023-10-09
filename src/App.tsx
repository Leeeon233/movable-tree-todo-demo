import React, { useState } from "react";
import TodoApp from "./todoApp";
import { updateEachPeer } from "./main";

const App = ({ modelA, modelB }) => {
  const [sync, setSync] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        gap: "100px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
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
      <div style={{ flex: 1 }}>
        <TodoApp model={modelB} />
      </div>
    </div>
  );
};

export default App;
