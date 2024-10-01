import ListItem from "../List-item/List-item";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;

  @media (max-width: 700px) {
    flex-flow: column nowrap;
    background-color: #708871;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    margin-top: 0;
    padding-top: 2.5rem;
    transition: transform 0.3s ease-in-out;
  }

  li {
  }
`;

export default function RightNav({ open }) {
  const location = useLocation();
  const isContactPage = location.pathname === "/Contact";

  return (
    <div className={styles.navContainer}>
      <Ul className={styles.navUl} open={open}>
        <li>
          <Link
            to="/Home"
            className={isContactPage ? styles.contactNavItem : styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Oasis"
            className={isContactPage ? styles.contactNavItem : styles.navItem}>
            Oasis
          </Link>
        </li>
        <li>
          <Link
            to="/Membership"
            className={isContactPage ? styles.contactNavItem : styles.navItem}>
            Membership
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className={isContactPage ? styles.contactNavItem : styles.navItem}>
            Contact
          </Link>
        </li>
      </Ul>
    </div>
  );
}
