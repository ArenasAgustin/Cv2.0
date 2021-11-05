import React from "react";
import { INTRODUCCION } from "../../data/data";
import './Perfil.css'

export default function Perfil() {
  return (
    <div>
      <h1 className='titlePerfil'>{INTRODUCCION.name}</h1>
      <h2 className='descripcionPerfil'>{INTRODUCCION.description}</h2>
    </div>
  );
}
