// Hero.jsx
import "../Hero/hero.css";
import Button from "../Button/Button";

export default function Hero({ heroImage, title, subtitle, showButton }) {
  return (
    <div className="heroContainer">
      <img src={heroImage} className="heroImage" alt="Hero" />
      <div className="titleContainer">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        {showButton && <Button buttonName="Get Started" />}
      </div>
    </div>
  );
}
