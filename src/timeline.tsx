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
      </div>
      
    </div>
  );
};

export default Timeline;
