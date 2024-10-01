import "./gymcard.css";
import React, { useState } from "react";

export default function GymCard(props) {
  const [brightnessLevel, setBrightness] = useState("100%");
  const [text, setText] = useState(false);

  const handleMouseOver = () => {
    setBrightness("50%");
    setText(true);
  };
  const handleMouseOut = () => {
    setBrightness("100%");
    setText(false);
  };

  return (
    <section className="gymCard">
      <img
        src={props.gymCardImage}
        alt={props.altText || "Gym Card Image"}
        className="gymCardImage"
        style={{ filter: `brightness(${brightnessLevel})` }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <div className="gymCardText">
        {text && <h3 className="gymName">{props.gymName}</h3>}
        {text && <h4 className="description">{props.description}</h4>}
      </div>
    </section>
  );
}
