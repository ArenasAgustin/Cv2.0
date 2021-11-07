import React from "react";
import { APTITUDES_HABILIDADES } from "../../data/data";

export default function Tecnologias() {
  return (
    <div>
      <h2 className="divTituloDatos">{APTITUDES_HABILIDADES.title}</h2>
      <ul>
        {APTITUDES_HABILIDADES.description.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
