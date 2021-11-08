import React from "react";
import { EDUCACION } from "../../data/data";

export default function HAcademico() {
  return (
    <div>
      <h2 className="titulosExperiencia">{EDUCACION.title}</h2>

      <div>
        {EDUCACION.description.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="subtitleExperiencia">{item.title}</h3>
              <h4 className="subsubTitleExperiencia">{item.subtitle}</h4>
              <p className="dataExperiencia">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
