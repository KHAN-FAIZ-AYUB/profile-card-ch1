import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

function App() {
  return (
    <div>
      <Image />
      <Heading />
      <Intro />
      <Skills skill="HTML/CSS" />
      <Skills skill="JavaScript" />
      <Skills skill="React" />
      <Skills skill="Git & GitHub" />
      <Skills skill="Next.Js" />
    </div>
  );
}

function Image() {
  return <img src="logo192.png" alt="avtar"></img>;
}

function Heading() {
  return <h2>FAIZ AYUB KHAN</h2>;
}

function Intro() {
  return <p>Full-stack developer working in XYZ company Since 1998</p>;
}

function Skills(props) {
  return (
    <div>
      <p>{props.skill}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
