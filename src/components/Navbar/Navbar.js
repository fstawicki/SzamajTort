import React from "react";
import styles from './Navbar.module.css';


const Navbar = (props) => {

    return(
        <nav className={styles.navbar}>
            <div className={styles.left}>
            <a href="#"></a>
            </div>
            <div className={styles.right}>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href="#">Aktualności</a></li>
                    <li className={styles.listItem}><a href="">O Nas</a></li>
                    <li className={styles.listItem}><a href="#gallery">Galeria</a></li>
                    <li className={styles.listItem}><a href="#">Kontakt</a></li>
                    <li className={styles.listItemBtn}>
                    <button className={styles.btn}><a href="https://forms.gle/3B1aczqwx2XDw6mw7">ZŁÓŻ ZAMÓWIENIE</a></button>
                    </li>
                </ul>
                
            </div>
        </nav>
    )


}

export default Navbar;