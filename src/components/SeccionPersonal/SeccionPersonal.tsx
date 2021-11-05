import React from "react";
import PerfilPersonal from "../PerfilPersonal/PerfilPersonal.";
import Perfil from "../Perfil/Perfil";
import AptitudesHAbilidades from "../AptitudesHabilidades/AptitudesHabilidades";
import Tecnologias from "../Tecnologias/Tecnologias";
import Intereses from "../Intereses/Intereses";
import Contacto from "../Contacto/Contacto";

export default function SeccionPersonal() {
  return (
    <div>
      <div>
        <Perfil />
      </div>

      <div></div>

      <div>
        <PerfilPersonal />
      </div>

      <div>
        <AptitudesHAbilidades />
      </div>

      <div>
        <Tecnologias />
      </div>

      <div>
        <Intereses />
      </div>

      <div>
        <Contacto />
      </div>
    </div>
  );
}
