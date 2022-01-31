import React from "react";
import styles from './Navbar.module.css';


const Navbar = (props) => {

    return(
        <nav className={styles.navbar}>
            <div className={styles.left}>
                
            </div>
            <div className={styles.right}>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href="#">Aktualności</a></li>
                    <li className={styles.listItem}><a href="#">O Nas</a></li>
                    <li className={styles.listItem}><a href="#">Galeria</a></li>
                    <li className={styles.listItem}><a href="#">Kontakt</a></li>
                </ul>
            </div>
        </nav>
    )


}

export default Navbar;