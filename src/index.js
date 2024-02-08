import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "Software Developer 👨‍💻",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Swimmer 🏊",
    level: "advanced",
    color: "lightblue",
  },
  {
    skill: "Rider 🏍️",
    level: "intermediate",
    color: "grey",
  },
  {
    skill: "Vlogger 🎥",
    level: "advanced",
    color: "red",
  },
];

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
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
