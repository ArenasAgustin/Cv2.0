import * as React from "react";
import { CONTACTO } from "../../data/data";

export default function Contacto() {
  return (
    <div>
      <h3>{CONTACTO.title}</h3>
      <ul>
        {CONTACTO.description.map((element) => {
          return <li key={element.type}>{element.data}</li>;
        })}
      </ul>
    </div>
  );
}