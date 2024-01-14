import styles from '../styles/navBar.css'

import { Link } from '@remix-run/react'
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
                <Link Link to='/' ><img src='./imgs/white_logo.png' /> </Link>
            </div>
            
            <nav ref={navRef}>
                <div>
                    <Link to='/services'>Services</Link>
                    <Link to='/hosting'>Hosting</Link>
                    <Link to='/about_us'>About Us</Link>
                    <Link to='/contact_us'>Contact</Link>
                </div>
                 <div>
                    <a><FaUser color='red' />Sign In</a>
                    <button className="navBtn closeBtn" onClick={showNavBar}>
                    <FaTimes/>
                    </button>
                </div>
            </nav>
               
                
                
            <button className="navBtn openBtn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
        
    );
}

export function links(){
    return [{rel: 'stylesheet', href: styles }];
}