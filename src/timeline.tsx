import React, { useRef, useState } from "react";

interface TimelineProps {
  history: any[];
  currentIdx: number;
  onChange: (idx: number) => void;
  onReset: () => void;
}

const Timeline = ({
  history,
  currentIdx,
  onChange,
  onReset,
}: TimelineProps) => {
  const slide = useRef(null);

  return (
    <div className="slidecontainer">
      <p>Check out any version</p>
      <input
        style={{ width: "400px" }}
        ref={slide}
        onChange={(e) => {
          const v = parseInt(e.target.value);
          onChange(v);
        }}
        className="slider"
        type="range"
        min={0}
        max={history.length}
        value={currentIdx}
        id="myRange"
      />
      <button
        onClick={onReset}
        style={{
          width: "100px",
          height: "40px",
          margin: "0 16px",
          fontSize: "x-large",
          border: "1px solid black",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Timeline;
