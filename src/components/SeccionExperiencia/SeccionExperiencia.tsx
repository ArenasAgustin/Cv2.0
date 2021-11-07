import React from "react";
import HAcademico from "../HAcademico/HAcademico";
import HLaboral from "../HLaboral/HLaboral";
import Proyectos from "../Proyectos/Proyectos";
import './SeccionExperiencia.css'

export default function SeccionExperiencia() {
  return (
    <div>
      <div>
        <Proyectos />
      </div>

      <div>
        <HLaboral />
      </div>

      <div>
        <HAcademico />
      </div>
    </div>
  );
}
