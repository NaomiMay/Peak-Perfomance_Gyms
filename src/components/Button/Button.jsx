import "./Button.css";

export default function Button({ buttonName }) {
  return (
    <div className="buttonContainer">
      <button type="submit" value="Submit" className="btn">
        {buttonName}
      </button>
    </div>
  );
}
