import * as React from "react";
import { PERFIL } from '../../data/data';

export default function Perfil() {
  return (
    <div>
      <h3>{PERFIL.title}</h3>
      <p>{PERFIL.description}</p>
    </div>
  );
}
