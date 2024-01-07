import styles from '../styles/navBar.css'

import { useRef } from "react";
import {FaBars, FaTimes, FaUser} from "react-icons/fa/index.js"

export default function NavBar() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("navBarContainer");
    }

    return(
        <header>
            <div>
                <h3>Logo Here</h3>
            </div>
            
            <nav ref={navRef}>
                <a>Services</a>
                <a>Hosting</a>
                <a>About Us</a>
                <a>Contact</a>
                <a><FaUser />Sign In</a>
                <button className="navBtn closeBtn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="navBtn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
        
    );
}

export function links(){
    return [{rel: 'stylesheet', href: styles }];
}