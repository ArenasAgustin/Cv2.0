import React from "react";
import { CONTACTO } from "../../data/data";

export default function Contacto() {
  const descripcion = CONTACTO.description;

  return (
    <div>
      <h2 className="divTituloDatos">{CONTACTO.title}</h2>
      <ul className="divDataInfo">
        <li>
          <span>{descripcion[0].type} </span>
          <span>{descripcion[0].data}</span>
        </li>

        <li>
          <span>{descripcion[1].type} </span>
          <span>{descripcion[1].data}</span>
        </li>

        <li>
          <span>{descripcion[2].type} </span>
          <a href={descripcion[2].data} target="_blank">
            {descripcion[2].data}
          </a>
        </li>

        <li>
          <span>{descripcion[3].type} </span>
          <a href={descripcion[3].data} target="_blank">
            {descripcion[3].data}
          </a>
        </li>

        <li>
          <span>{descripcion[4].type} </span>
          <a href={descripcion[4].data} target="_blank">
            {descripcion[4].data}
          </a>
        </li>
      </ul>
    </div>
  );
}
