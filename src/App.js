import React from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
import data from "./data"

export default function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "950px", marginLeft:"200px" }}>
        <Chrono items={data} mode="VERTICAL" theme={{primary:"navy",secondary:"gray".fontsize(72)}} />
      </div>
    </div>
  );
}
