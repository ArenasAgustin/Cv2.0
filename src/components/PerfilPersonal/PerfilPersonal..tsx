import React from "react";
import { PERFIL } from "../../data/data";

export default function PerfilPersonal() {
  return (
    <div>
      <h2 className="divTituloDatos">{PERFIL.title}</h2>
      <p className="divDataInfo">{PERFIL.description}</p>
    </div>
  );
}
