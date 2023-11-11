import  { useRef } from "react";
import { ITodoModel } from "./interfaces";


const Timeline = ({
  model
}: {model: ITodoModel}) => {
  const slide = useRef(null);
  const history = model.history;
  
  return (
    <div className="slidecontainer" style={{padding: "8px"}}>
      <p>Check out any version</p>
      <div style={{display:"flex"}}>
      <input
        style={{ width: "400px", margin: "0 auto"}}
        ref={slide}
        onChange={(e) => {
          const v = parseInt(e.target.value);
          model.checkout(v);
        }}
        className="slider"
        type="range"
        min={0}
        max={history.length-1}
        value={model.version}
      />
      {/* <button
        onClick={model.onAttach}
        style={{
          width: "70px",
          height: "30px",
          margin: "0 16px",
          fontSize: "large",
          border: "1px solid black",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        reset
      </button> */}
      </div>
      
    </div>
  );
};

export default Timeline;
