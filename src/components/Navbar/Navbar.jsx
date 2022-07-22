import React, { useState } from "react";
import { Link } from "react-scroll";

import styles from './Navbar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = (props) => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <nav className={styles.navbar}>
            <div className={styles.left}>
            <a href="#"></a>
            </div>
            <div className={styles.right}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link activeClass="linkactiveclass" to="About" spy={true} smooth={true} offset={-70} duration={500}>O Nas</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link activeClass="linkactiveclass" to="Gallery" spy={true} smooth={true} offset={-70} duration={500}>Galeria</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link activeClass="linkactiveclass" to="Contact" spy={true} smooth={true} offset={-70} duration={500}>Kontakt</Link>
                    </li>
                    <li className={styles.listItemBtn}>
                        <button className={styles.btn}><a href="#">ZŁÓŻ ZAMÓWIENIE</a></button>
                    </li>
                </ul>
            </div>
            <div className={styles.navbarSmallscreen}>
                    <GiHamburgerMenu className={styles.hamburgerIcon} onClick={() => {setToggleMenu(true) }} />
                {toggleMenu && (
                <div className={styles.smallscreenOverlay}>
                    <div className={styles.overlayCloseDiv}>

                <AiOutlineClose className={styles.overlayClose} onClick={() => { setToggleMenu(false) }} />
                    </div>
                <ul className={styles.listSmall}>
                    <li className={styles.listItemSmall}><a href="#About">O Nas</a></li>
                    <li className={styles.listItemSmall}><a href="#Gallery">Galeria</a></li>
                    <li className={styles.listItemSmall}><a href="#Contact">Kontakt</a></li>
                    <li className={styles.listItemSmallLast}>
                    <a href="https://forms.gle/3B1aczqwx2XDw6mw7">ZŁÓŻ ZAMÓWIENIE</a>
                    </li>
                </ul>
                </div>
            )}
            </div>
        </nav>
    )


}

export default Navbar;