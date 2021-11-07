import React from "react";
import { TECNOLOGIAS } from "../../data/data";

export default function AptHab() {
  return (
    <div>
      <h2 className="divTituloDatos">{TECNOLOGIAS.title}</h2>
      <ul className="divDataInfo">
        {TECNOLOGIAS.description.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
