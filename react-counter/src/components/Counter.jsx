// Aufgabe React-Counter-Level-2_1
//
// Du hast bestimmt schon Erfahrungen damit gesammelt etwas online zu kaufen. Stell Dir vor, Du hast ein Produkt gewählt, du brauchst allerdings nicht nur eins, sondern mehrere. Du kannst einfach auf den Button "+" oder "-" klicken, um die Menge der bestellten Waren anzupassen.
// Heute sollst du eine solche Komponente programmieren.

import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <section>
      <div className="border">
        <p>{counter}</p>
        <div className="wrapper">
          <button onClick={() => setCounter(counter + 1)}>+1</button>
          <button onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
