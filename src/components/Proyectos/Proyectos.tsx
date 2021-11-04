import React from "react";
import { PROYECTOS } from "../../data/data";

export default function Proyectos() {
  return (
    <div>
      <h3>{PROYECTOS.title}</h3>

      <div>
        {PROYECTOS.description.map((proyecto) => (
          <div className="proyecto" key={proyecto.title}>
            <h4>{proyecto.title}</h4>
            <p>{proyecto.description}</p>
            <div>
              <span>Github: </span>
              <a href={proyecto.url}>{proyecto.url}</a>
            </div>

            {proyecto.url_deploy ? (
              <div>
                <span>Github: </span>
                <a href={proyecto.url_deploy}>{proyecto.url_deploy}</a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}