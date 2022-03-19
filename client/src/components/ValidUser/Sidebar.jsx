import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [rangeValue, setRangeValue] = useState(5000);

async function rangeHandler(e){ 
    e.preventDefault();
    setRangeValue(e.target.value)
  }
  
  return (
    <div className="sidebar-container">
        <h4>Sort  by Price:</h4>
        <input
          type="range"
          id="points"
          name="points"
          min="100"
          max="5000"
          value={rangeValue}
          onInput={rangeHandler}
        ></input>
        <h5>Range {100} to {rangeValue}</h5>
    </div>
  );
};

export default Sidebar;
