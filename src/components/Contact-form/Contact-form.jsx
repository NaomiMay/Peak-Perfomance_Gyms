import { useState } from "react";
import "./Contact-form.css";
import Button from "../Button/Button";

export default function ContactForm({ showButton }) {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("Contact Us");

  function handleChange(event) {
    setName(event.target.value);
  }

  function submit(event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    setHeading("Thank you for your message " + name + "!");
  }

  return (
    <div className="contactContainer">
      <h2>{heading}</h2>
      <form className="form" onSubmit={submit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input type="tel" id="phone" name="phone" placeholder="Phone" />

        <select id="gyms" name="gyms">
          <option value="">Location</option>
          <option value="surry-hills">Surry Hills</option>
          <option value="bondi-beach">Bondi Beach</option>
          <option value="new-town">New Town</option>
          <option value="the-bunker">The Bunker</option>
          <option value="potts-point">Potts Point</option>
          <option value="ruby-bay">Ruby Bay</option>
        </select>

        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Message..."
          required></textarea>

        {showButton && <Button buttonName="Submit" type="submit" />}
      </form>
    </div>
  );
}
