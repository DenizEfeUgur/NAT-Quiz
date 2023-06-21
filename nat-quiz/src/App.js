/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Allgemein from "./Allgemein";
import Tier from "./Tier";
import Flaggen from "./Flaggen";
import logo from "./logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

function allgemeinQuiz() {
  root.render(<Allgemein />);
}

function flaggenQuiz() {
  root.render(<Flaggen />);
}

function ZliQuiz() {
  root.render(<Tier />);
}

function App() {
  return (
    <>
      <h1 className="h1">Willkommen im NÄT_Quiz</h1>
      <img
        // src="https://o.remove.bg/downloads/0d554e69-1ae0-4d8b-a35e-b092dede6888/image-removebg-preview.png"
        src={logo}
        className="logo_nat"
      />

      <div className="container">
        <div className="image-container">
          <img
            onClick={flaggenQuiz}
            className="pic"
            src="https://cdn.pixabay.com/photo/2013/07/12/19/18/world-154527_1280.png"
          ></img>
          <label className="lbl">Flaggen Quiz</label>
        </div>
        <div className="image-container">
          <img
            onClick={allgemeinQuiz}
            className="pic"
            src="https://cdn.pixabay.com/photo/2017/01/31/00/09/books-2022464_1280.png"
          ></img>
          <label className="lbl">Allgemeinwissen Quiz</label>
        </div>
        <div className="image-container">
          <img
            onClick={ZliQuiz}
            className="pic"
            src="https://cdn.pixabay.com/photo/2016/03/31/22/14/blue-1296931_1280.png"
          ></img>
          <label className="lbl">Tier Quiz</label>
        </div>
      </div>
      <h5 className="efe"> by Deniz</h5>
    </>
  );
}

export default App;
