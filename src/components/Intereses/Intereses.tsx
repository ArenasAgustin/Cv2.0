import * as React from "react";
import { INTERESES } from '../../data/data';

export default function Intereses() {
  return (
    <div>
      <h3>{INTERESES.title}</h3>
      <p>{INTERESES.description}</p>
    </div>
  );
}
