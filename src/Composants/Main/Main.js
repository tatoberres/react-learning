import React from "react";
import Liste from "../Liste/Liste";

export default function Main() {
  const courses = ["farine", "lait", "oeuf"];
  return (
    <div className="main">
      <h2 className="title-2">Titre du Main</h2>
      <Liste title="Liste de courses dans main" elements={courses} />
    </div>
  );
}
