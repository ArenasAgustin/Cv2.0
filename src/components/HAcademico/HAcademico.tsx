import React from "react";
import { EDUCACION } from "../../data/data";

export default function HAcademico() {
  return (
    <div>
      <h1>{EDUCACION.title}</h1>

      <div>
        {EDUCACION.description.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
