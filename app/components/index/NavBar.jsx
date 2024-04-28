import styles from "../../styles/index/navBar.css";

import { Link } from "@remix-run/react";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa/index.js";

export default function NavBar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("navBarContainer");
  };

  return (
    <header>
      <div>
        <Link Link to="/">
          <img src="./imgs/color_logo.png" />{" "}
        </Link>
      </div>

      <nav ref={navRef}>
        <div>
          <Link to="/services">Services</Link>
          <Link to="/hosting">Hosting</Link>
          <Link to="/client_library">Client Library</Link>
          <Link to="/contact_us">Contact Us</Link>
        </div>
        <div>
          <Link className="signInButton" to="/login">
            <img
              src="./imgs/gradient_person_icon.png"
              style={{ width: "20px" }}
            />
            Sign In
          </Link>
          <button className="navBtn closeBtn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </div>
      </nav>

      <button className="navBtn openBtn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
