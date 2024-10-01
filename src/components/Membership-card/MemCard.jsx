import "./card.css";
import React, { useState } from "react";

export default function MembershipCard(props) {
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
    <section className="card">
      <img
        src={props.cardImage}
        alt={props.altText || "Membership Card Image"}
        className="cardImage"
        style={{ filter: `brightness(${brightnessLevel})` }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <div className="cardText">
        {text && <h3 className="memHeading">{props.heading}</h3>}
        {text && <h4 className="blurb">{props.blurb}</h4>}
      </div>
    </section>
  );
}
