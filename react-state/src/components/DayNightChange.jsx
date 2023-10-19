// Aufgabe React-state-Day-Night-change-Level-2_2
//
// In dieser Aufgabe erstellst du einen “Day-Night-Schalter”
// Dafür benötigst du eine Komponente, die eine Überschrift und einen Button hat.
// Wenn der Button geklickt wird, soll sich die Farbe der Komponente und der Text in der Überschrift sowie im Button ändern.

import { useState } from "react";
import "./DayNightChange.scss";

const DayNightChange = () => {
  const [night, setNight] = useState(false);
  const [headline, setHeadline] = useState("Day");
  const [buttonText, setButtonText] = useState("change to night");

  // * bei mehreren onclick-aktionen muss man die funktion auslagern -> changeMode
  const changeMode = () => {
    setNight((night) => !night);
    setHeadline(night ? "Day" : "Night");
    setButtonText(night ? "Change to night" : "Change to day");
  };

  return (
    <section className={night ? "dark" : ""}>
      <div className="wrapper">
        <h1>{headline}</h1>
        <button onClick={changeMode}>{buttonText}</button>
      </div>
    </section>
  );
};
export default DayNightChange;
