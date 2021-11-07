import React from "react";
import { TRABAJOS } from "../../data/data";

export default function IHLaboral() {
  return (
    <div>
      <h2 className="titulosExperiencia">{TRABAJOS.title}</h2>

      <div>
        {TRABAJOS.description.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="subtitleExperiencia">{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <ul>
                {item.description.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
