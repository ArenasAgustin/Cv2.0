import * as React from "react";
import { TECNOLOGIAS } from "../../data/data";

export default function AptHab() {
  return (
    <div>
      <h3>{TECNOLOGIAS.title}</h3>
      <ul>
        {TECNOLOGIAS.description.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
