import "./App.css";
import AboutMe from "./containers/AboutMe";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Skills from "./containers/Skills";
import data from "./config";

function App() {
  return (
    <div className="App">
      <div className="separator" />
      <AboutMe me={data.me} />
      <div className="separator" />
      <Experience experience={data.experience} />
      <div className="separator" style={{ marginTop: "10px" }} />
      <Education education={data.education} />
      <div className="separator" style={{ marginTop: "10px" }} />
      <Skills skills={data.skills} />
      <div className="separator" />
      <div className="section">
        <p style={{ fontSize: 12, fontWeight: 200 }}>
          * - фактический опыт без официального трудоустройства
        </p>
      </div>
    </div>
  );
}

export default App;
