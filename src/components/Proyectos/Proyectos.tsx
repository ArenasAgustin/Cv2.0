import React from "react";
import { PROYECTOS } from "../../data/data";
import "./Proyectos.css";

export default function Proyectos() {
  return (
    <div>
      <h2 className="titulosExperiencia">{PROYECTOS.title}</h2>

      <div>
        {PROYECTOS.description.map((proyecto) => (
          <div className="proyecto" key={proyecto.title}>
            <h3 className="subtitleExperiencia">{proyecto.title}</h3>

            <div className="dataExperiencia">
              <p className="dataExperienciaTexto">{proyecto.description}</p>
              <div className="dataExperienciaLinks">
                <span>Github: </span>
                <a href={proyecto.url}>{proyecto.url}</a>
              </div>

              {proyecto.url_deploy ? (
                <div className="dataExperienciaLinks">
                  <span>Deploy: </span>
                  <a href={proyecto.url_deploy}>{proyecto.url_deploy}</a>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
