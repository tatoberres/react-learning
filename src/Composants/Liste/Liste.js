import React from "react";
import Element from "../Element/Element";

export default function Liste({ title, elements }) {
  return (
    <>
      <h3 className="title-3">{title}</h3>
      <ul className="liste">
        {elements.map((element) => (
          <Element content={element} />
        ))}
      </ul>
    </>
  );
}
