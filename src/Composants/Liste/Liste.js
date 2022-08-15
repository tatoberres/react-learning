import React from "react";
import Element from "../Element/Element";

export default function Liste({ title, elements }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {elements.map((element) => (
          <Element content={element} />
        ))}
      </ul>
    </>
  );
}
