import styles from "../../styles/index/footer.css";

import { Link } from "@remix-run/react";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa/index.js";

export default function Footer() {
  return (
    <footer>
        <div className="left">

            <img src="./imgs/footer/dreamindex.png"/>
            <div className="line"></div>

          
          <div>
            <div className="links">
              <Link><p>About</p></Link>
              <Link><p>Services</p></Link>
              <Link><p>Portfolio</p></Link>
              <Link><p>Contact</p></Link>
            </div>
            <p>© 2024 Dream Index. All Rights Reserved.</p>
          </div>
        </div>
        

        <div>
          <div className="socials">
            <img src="./imgs/footer/instagram.svg"/>
            <img src="./imgs/footer/linkedin.svg"/>
            <img src="./imgs/footer/email.svg"/>
          </div>

          <p>Support: Support@dreamindex.org</p>
        </div>

      </footer>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
