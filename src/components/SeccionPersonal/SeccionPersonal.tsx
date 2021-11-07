import React from "react";
import PerfilPersonal from "../PerfilPersonal/PerfilPersonal.";
import Perfil from "../Perfil/Perfil";
import AptitudesHAbilidades from "../AptitudesHabilidades/AptitudesHabilidades";
import Tecnologias from "../Tecnologias/Tecnologias";
import Intereses from "../Intereses/Intereses";
import Contacto from "../Contacto/Contacto";
import "./SeccionPersonal.css";

export default function SeccionPersonal() {
  return (
    <div className="divSPersonal">
      <div className="divDatos">
        <Perfil />
      </div>

      <div id="linea"></div>

      <div className="divDatos">
        <PerfilPersonal />
      </div>

      <div className="divDatos">
        <AptitudesHAbilidades />
      </div>

      <div className="divDatos">
        <Tecnologias />
      </div>

      <div className="divDatos">
        <Intereses />
      </div>

      <div className="divDatos">
        <Contacto />
      </div>
    </div>
  );
}
