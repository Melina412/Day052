// Aufgabe React-state-faq-Level-1_1
//
// Heute erstellst du eine FAQ-Seite
// Wenn du auf einen Button klickst wird die kurze Antwort gegeben.
// Hebe deinen Code auf! Wir werden daran weiterarbeiten ;-)

import { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  const [answerBar, setAnswerBar] = useState(true);

  return (
    <section>
      <div className="wrapper">
        <div className="bar">
          <p>Why is React great?</p>
          <button onClick={() => setAnswerBar((answerBar) => !answerBar)}>
            -
          </button>
        </div>
        <div className={answerBar ? "bar" : "hide"}>
          <p>Fast Learning Curve</p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
