import React from "react";
import Stars from "./components/Stars";
import "./App.css";

export default function App() {
  let count = 4;


  return (
    <div className="container">
      <div className="content">
        {
          count > 0 && 
          count < 6 && 
          isFinite(count) && 
          <div className="card">
            <Stars count={count} />
          </div>
        }
      </div>
    </div>
  );
};