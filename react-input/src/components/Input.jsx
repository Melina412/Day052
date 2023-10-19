// Aufgabe React-Input-Level-1_6
//
// Erstelle dir Inputfelder und greife auf den value mit Hilfe von React-Hooks zu.
// Zeige den Output im JSX an.
// Verwende “useState”-hooks, um die Aufgabe zu lösen.

import { useState } from "react";
import "./Input.scss";

const Input = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  //
  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Vorname"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
        />
        <input
          type="text"
          placeholder="Nachname"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setMail(event.target.value)}
          value={mail}
        />
      </form>

      <div>
        <p>Vorname: {firstname}</p>
        <p>Nachname: {lastname}</p>
        <p>Email: {mail}</p>
      </div>
    </section>
  );
};

export default Input;
