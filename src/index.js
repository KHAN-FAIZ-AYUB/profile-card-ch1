import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avtar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avtar() {
  return <img className="avatar" src="PR_IMG.jpg" alt="avtar"></img>;
}

function Intro() {
  return (
    <div>
      <h2>Faiz Ayub Khan</h2>
      <p>Full-stack developer working in XYZ company Since 1998</p>
    </div>
  );
}

function SkillList() {
  return;
}

function skill() {
  return;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
