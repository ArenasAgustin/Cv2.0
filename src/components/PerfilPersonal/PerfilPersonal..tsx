import React from "react";
import { PERFIL } from "../../data/data";
import './Personal.css'

export default function PerfilPersonal() {
  return (
    <div>
      <h3>{PERFIL.title}</h3>
      <p>{PERFIL.description}</p>
    </div>
  );
}
