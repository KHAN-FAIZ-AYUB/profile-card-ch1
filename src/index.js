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
      <p>
        Full-stack developer by profession. State-level Swimmer. Professionla
        Rider and Content Creator.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Software Developer" emoji="👨‍💻" color="green" />
      <Skill skill="Swimmer" emoji="🏊" color="lightblue" />
      <Skill skill="Rider" emoji="🏍️" color="grey" />
      <Skill skill="Vlogger" emoji="🎥" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
