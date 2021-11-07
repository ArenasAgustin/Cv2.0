import React from "react";
import { INTERESES } from "../../data/data";

export default function Intereses() {
  return (
    <div>
      <h2 className="divTituloDatos">{INTERESES.title}</h2>
      <p className="divDataInfo">{INTERESES.description}</p>
    </div>
  );
}
