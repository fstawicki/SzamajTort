import React from "react";
import styles from './Footer.module.css';


const Footer = () =>{
    return(
        <div id="Footer" className={styles.footer}>
            <div className={styles.left}>
                <ul>
                    <li>Szamaj Tort</li>
                    <li>Sobota: 11 - 18</li>
                    <li>Niedziela: 11 - 16</li>
                    <li>Bolesława Chrobrego 12</li>
                    <li>02-479, Warszawa</li>
                </ul>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.right}>
                <ul>
                    <li>
                        <i class="fas fa-envelope"></i>szamajtort@gmail.com
                    </li>
            <li>
                <i class="fas fa-phone"></i>660 387 232
            </li>
            <li>
                <a href="https://www.facebook.com/szamajtort">
                    <i class="fab fa-facebook"></i>Facebook
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/szamajtort/?fbclid=IwAR2kd1Xi57Ud9JnKAtd8VmOI6UUmz9G3rrAIGzdZlggRS70EaHI6Yc8bjEg">
                    <i class="fab fa-instagram-square"></i>Instagram
                </a>
            </li>
        </ul>
            
            
            </div>
        </div>
    )
}

export default Footer;
