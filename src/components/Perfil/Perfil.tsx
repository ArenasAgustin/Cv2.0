import React from "react";
import { INTRODUCCION } from "../../data/data";

export default function Perfil() {
  return (
    <div>
      <h3>{INTRODUCCION.name}</h3>
      <p>{INTRODUCCION.description}</p>
    </div>
  );
}
