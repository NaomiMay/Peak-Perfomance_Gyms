import ListItem from "../List-item/List-item";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

import Burger from "./Burger";

export default function Navbar() {
  return (
    <nav>
      <Burger />
    </nav>
  );
}
